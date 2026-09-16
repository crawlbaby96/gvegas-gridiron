<script>
	import { onMount } from 'svelte';
	import { punishments } from '$lib/utils/punishments';
	import {
		WHEEL_COLORS,
		WHEEL_SLOT_COUNT,
		buildWheelSlots,
		describeSlice,
		getOverflowPunishments,
		landingRotation,
		pickSpinIndex,
		radialLabelTextLength,
		radialLabelTransform,
		sliceAngle,
		sliceCenterAngle,
		formatSubmission,
	} from '$lib/utils/punishmentWheel';

	const slots = buildWheelSlots(punishments);
	const overflow = getOverflowPunishments(punishments);
	const filledCount = slots.filter((slot) => !slot.placeholder).length;
	const angle = sliceAngle();

	const size = 520;
	const cx = size / 2;
	const cy = size / 2;
	const radius = 238;
	const hubRadius = 58;

	let rotation = $state(0);
	let spinning = $state(false);
	let winner = $state(null);
	let selected = $state(null);
	let showModal = $state(false);
	let hovered = $state(null);
	let hoverPos = $state({ x: 0, y: 0 });
	let reduceMotion = $state(false);

	const spinMs = $derived(reduceMotion ? 400 : 4500);

	onMount(() => {
		reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	});

	function slicePath(index) {
		return describeSlice(cx, cy, radius, index * angle, (index + 1) * angle);
	}

	const labelOuterRadius = radius - 16;
	const labelSpan = labelOuterRadius - hubRadius - 12;

	const labels = slots.map((slot) => ({
		...radialLabelTransform(cx, cy, labelOuterRadius, sliceCenterAngle(slot.slotIndex)),
		textLength: radialLabelTextLength(slot.name, labelSpan),
	}));

	function openDetails(slot) {
		if (spinning) return;
		selected = slot;
		showModal = true;
	}

	function closeModal() {
		showModal = false;
		selected = null;
	}

	function onSliceEnter(event, slot) {
		hovered = slot;
		hoverPos = { x: event.clientX, y: event.clientY };
	}

	function onSliceMove(event) {
		hoverPos = { x: event.clientX, y: event.clientY };
	}

	function onSliceLeave() {
		hovered = null;
	}

	function overlayClick(event) {
		if (event.target === event.currentTarget) closeModal();
	}

	function spin() {
		if (spinning) return;
		spinning = true;
		hovered = null;
		const extraSpins = reduceMotion ? 1 : 5 + Math.floor(Math.random() * 3);
		const index = pickSpinIndex(slots);
		rotation = landingRotation(index, WHEEL_SLOT_COUNT, extraSpins, rotation);
		setTimeout(() => {
			winner = slots[index];
			selected = winner;
			showModal = true;
			spinning = false;
		}, spinMs + 50);
	}
</script>

<svelte:window
	onkeydown={(event) => {
		if (event.key === 'Escape' && showModal) closeModal();
	}}
/>

<div class="container">
	<div class="header">
		<h1>Punishment Wheel</h1>
		<p class="lede">
			Each week of the regular season, the highest scorer submits a punishment for the wheel.
			Council approves or denies it. At the end of the year, the wheel is set.
			The loser spins, and whatever it lands on is eliminated. They keep spinning until one
			punishment remains — that is the punishment.
		</p>
		<p class="howto">Hover a slice or tap a card for the rules. Use Spin to try the wheel.</p>
	</div>

	<div class="status-row">
		<span class="status-pill">{filledCount} / {WHEEL_SLOT_COUNT} loaded</span>
		{#if winner}
			<span class="status-pill winner-pill">
				Last result: {winner.name}{formatSubmission(winner) ? ` · ${formatSubmission(winner)}` : ''}
			</span>
		{/if}
	</div>

	<div class="wheel-stage">
		<div class="pointer" aria-hidden="true"></div>
		<div
			class="wheel-rotate"
			style="transform: rotate({rotation}deg); transition-duration: {spinning ? spinMs : 0}ms;"
		>
			<svg viewBox="0 0 {size} {size}" role="img" aria-label="Punishment wheel with {WHEEL_SLOT_COUNT} slots">
				{#each slots as slot}
					<g
						class="slice {slot.placeholder ? 'placeholder' : ''} {winner?.slotIndex === slot.slotIndex ? 'winner' : ''}"
						onclick={() => openDetails(slot)}
						onkeydown={(event) => {
							if (event.key === 'Enter' || event.key === ' ') {
								event.preventDefault();
								openDetails(slot);
							}
						}}
						onmouseenter={(event) => onSliceEnter(event, slot)}
						onmousemove={onSliceMove}
						onmouseleave={onSliceLeave}
						tabindex="0"
						role="button"
						aria-label="{slot.name}. {formatSubmission(slot) ? `${formatSubmission(slot)}. ` : ''}{slot.rules}"
					>
						<path d={slicePath(slot.slotIndex)} fill={slot.placeholder ? '#9aa6b5' : WHEEL_COLORS[slot.slotIndex]} />
						{#if winner?.slotIndex === slot.slotIndex}
							<path d={slicePath(slot.slotIndex)} fill="none" stroke="#ffd36a" stroke-width="6" />
						{/if}
						<text
							x={labels[slot.slotIndex].x}
							y={labels[slot.slotIndex].y}
							transform="rotate({labels[slot.slotIndex].rotate} {cx} {cy})"
							text-anchor={labels[slot.slotIndex].anchor}
							dominant-baseline="middle"
							textLength={labels[slot.slotIndex].textLength}
							lengthAdjust="spacingAndGlyphs"
							class="slice-label"
						>
							{slot.name}
						</text>
					</g>
				{/each}
				<circle cx={cx} cy={cy} r={hubRadius} fill="var(--fff)" stroke="#00316b" stroke-width="6" />
				<text x={cx} y={cy - 6} text-anchor="middle" class="hub-title">G-VEGAS</text>
				<text x={cx} y={cy + 16} text-anchor="middle" class="hub-sub">SPIN</text>
			</svg>
		</div>
		<button class="spin-button" onclick={spin} disabled={spinning}>
			{spinning ? 'Spinning…' : 'Spin the wheel'}
		</button>
	</div>

	<section class="catalog">
		<h2>This season's punishments</h2>
		<p class="catalog-help">
			Click a card for full rules. To add next week's punishment, append one object in
			<code>src/lib/utils/punishments.js</code>.
		</p>
		<div class="card-grid">
			{#each slots as slot}
				<button class="punishment-card {slot.placeholder ? 'is-placeholder' : ''}" onclick={() => openDetails(slot)}>
					<div class="card-index">#{slot.slotIndex + 1}</div>
					<h3>{slot.name}</h3>
					<p>{slot.rules}</p>
					{#if formatSubmission(slot)}
						<span class="week-badge">{formatSubmission(slot)}</span>
					{:else}
						<span class="week-badge muted">Open slot</span>
					{/if}
				</button>
			{/each}
		</div>
	</section>

	{#if overflow.length}
		<section class="overflow">
			<h2>Waiting for a slot</h2>
			<p>More than 14 active punishments are in the catalog. Retire one (<code>active: false</code>) or these stay off the wheel:</p>
			<ul>
				{#each overflow as extra}
					<li>
						<strong>{extra.name}</strong>
						{#if formatSubmission(extra)} — {formatSubmission(extra)}{/if}
						 — {extra.rules}
					</li>
				{/each}
			</ul>
		</section>
	{/if}
</div>

{#if hovered && !spinning && !showModal}
	<div class="popover" style="top: {hoverPos.y + 16}px; left: {hoverPos.x + 16}px;" role="tooltip">
		<strong>{hovered.name}</strong>
		{#if formatSubmission(hovered)}
			<p class="submitted">{formatSubmission(hovered)}</p>
		{/if}
		<p>{hovered.rules}</p>
		<span>Click for full details</span>
	</div>
{/if}

{#if showModal && selected}
	<div class="modal-overlay" onclick={overlayClick} role="presentation">
		<div class="modal-content" role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="punishment-title">
			<div class="modal-header">
				<h2 id="punishment-title">{selected.name}</h2>
				<button class="close-button" onclick={closeModal} aria-label="Close">×</button>
			</div>
			<div class="modal-body">
				<div class="modal-info">
					<div class="info-row">
						<span class="info-label">Wheel slot</span>
						<span class="info-value">{selected.slotIndex + 1} of {WHEEL_SLOT_COUNT}</span>
					</div>
					<div class="info-row">
						<span class="info-label">Submitted</span>
						<span class="info-value">{formatSubmission(selected) || 'Not yet filled'}</span>
					</div>
				</div>
				<div class="modal-description">
					<h4>Rules</h4>
					<p>{selected.rules}</p>
					{#if selected.details}
						<h4>Details</h4>
						<p>{selected.details}</p>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px 20px 80px;
	}

	.header {
		text-align: center;
		margin-bottom: 24px;
		padding: 20px 0;
		border-bottom: 2px solid var(--ddd);
	}

	.header h1 {
		font-size: 2.5rem;
		margin-bottom: 10px;
		color: var(--g000);
	}

	.header p {
		color: var(--g555);
		max-width: 720px;
		margin: 0 auto;
		line-height: 1.55;
	}

	.lede {
		font-size: 1.15rem;
		margin-bottom: 12px;
	}

	.howto {
		font-size: 1rem;
	}

	.status-row {
		display: flex;
		justify-content: center;
		gap: 12px;
		flex-wrap: wrap;
		margin-bottom: 16px;
	}

	.status-pill {
		background: var(--headerPrimary);
		color: var(--blueOne);
		border: 1px solid #00316b33;
		border-radius: 999px;
		padding: 6px 14px;
		font-weight: 600;
		font-size: 0.9rem;
	}

	.winner-pill {
		background: #fff4d6;
		color: #920505;
	}

	.wheel-stage {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 10px auto 40px;
		max-width: 560px;
	}

	.pointer {
		width: 0;
		height: 0;
		border-left: 16px solid transparent;
		border-right: 16px solid transparent;
		border-top: 28px solid #920505;
		z-index: 3;
		filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.25));
		margin-bottom: -8px;
	}

	.wheel-rotate {
		width: 100%;
		transform-origin: center center;
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.12, 0.65, 0.08, 1);
	}

	svg {
		width: 100%;
		height: auto;
		filter: drop-shadow(0px 3px 3px -2px var(--boxShadowOne)) drop-shadow(0px 3px 4px 0px var(--boxShadowTwo));
		border-radius: 50%;
	}

	.slice {
		cursor: pointer;
		outline: none;
	}

	.slice path {
		stroke: #fff;
		stroke-width: 2;
		transition: filter 0.2s ease;
	}

	.slice:hover path,
	.slice:focus-visible path {
		filter: brightness(1.12);
	}

	.slice-label {
		fill: #fff;
		font-size: 15px;
		font-weight: 700;
		pointer-events: none;
		text-transform: uppercase;
		letter-spacing: 0.02em;
		paint-order: stroke;
		stroke: rgba(0, 0, 0, 0.35);
		stroke-width: 2px;
	}

	.placeholder .slice-label {
		fill: #f4f4f4;
		font-weight: 600;
	}

	.hub-title {
		fill: #00316b;
		font-size: 13px;
		font-weight: 800;
		letter-spacing: 0.12em;
	}

	.hub-sub {
		fill: #0082c3;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.2em;
	}

	.spin-button {
		margin-top: 22px;
		background: #00316b;
		color: #fff;
		border: none;
		border-radius: 8px;
		padding: 12px 28px;
		font-size: 1rem;
		font-weight: 700;
		cursor: pointer;
		box-shadow: 0px 3px 3px -2px var(--boxShadowOne), 0px 3px 4px 0px var(--boxShadowTwo);
	}

	.spin-button:hover:not(:disabled) {
		background: #0082c3;
	}

	.spin-button:disabled {
		opacity: 0.7;
		cursor: wait;
	}

	.catalog h2,
	.overflow h2 {
		color: var(--g000);
		font-size: 1.6rem;
		margin-bottom: 8px;
	}

	.catalog-help,
	.overflow p {
		color: var(--g555);
		margin-bottom: 18px;
	}

	code {
		background: var(--eee);
		padding: 1px 6px;
		border-radius: 4px;
		font-size: 0.9em;
	}

	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: 16px;
	}

	.punishment-card {
		text-align: left;
		background: var(--fff);
		border: none;
		border-radius: 12px;
		padding: 18px;
		cursor: pointer;
		box-shadow: 0px 3px 3px -2px var(--boxShadowOne), 0px 3px 4px 0px var(--boxShadowTwo), 0px 1px 8px 0px var(--boxShadowThree);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
		color: inherit;
	}

	.punishment-card:hover {
		transform: translateY(-4px);
		box-shadow: 0px 8px 8px -4px var(--boxShadowOne), 0px 8px 12px 0px var(--boxShadowTwo);
	}

	.punishment-card h3 {
		margin: 0 0 8px;
		font-size: 1.15rem;
		color: var(--g000);
	}

	.punishment-card p {
		margin: 0 0 12px;
		color: var(--g555);
		line-height: 1.45;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.card-index {
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--blueTwo);
		margin-bottom: 6px;
	}

	.week-badge {
		display: inline-block;
		background: var(--blueOne);
		color: white;
		padding: 4px 10px;
		border-radius: 20px;
		font-size: 0.75rem;
		font-weight: 600;
	}

	.week-badge.muted {
		background: var(--ccc);
		color: var(--g333);
	}

	.is-placeholder {
		background: var(--f8f8f8);
	}

	.overflow {
		margin-top: 36px;
		background: var(--fff);
		border-radius: 12px;
		padding: 20px 24px;
		box-shadow: 0px 1px 8px 0px var(--boxShadowThree);
	}

	.popover {
		position: fixed;
		z-index: 20;
		max-width: 280px;
		background: var(--fff);
		color: var(--g000);
		border: 1px solid #00316b;
		border-radius: 8px;
		padding: 12px 14px;
		box-shadow: 0 8px 20px rgba(0, 49, 107, 0.18);
		pointer-events: none;
	}

	.popover strong {
		display: block;
		margin-bottom: 6px;
		color: #00316b;
	}

	.popover .submitted {
		font-weight: 600;
		color: var(--blueOne);
		font-size: 0.8rem;
		margin-bottom: 8px;
	}

	.popover p {
		margin: 0 0 8px;
		font-size: 0.9rem;
		color: var(--g555);
		line-height: 1.4;
	}

	.popover span {
		font-size: 0.75rem;
		color: var(--blueTwo);
		font-weight: 600;
	}

	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.7);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: 20px;
	}

	.modal-content {
		background: var(--fff);
		border-radius: 12px;
		max-width: 640px;
		width: 100%;
		max-height: 90vh;
		overflow-y: auto;
		box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
	}

	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 30px;
		border-bottom: 1px solid var(--ddd);
	}

	.modal-header h2 {
		margin: 0;
		color: var(--g000);
	}

	.close-button {
		background: none;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
		color: var(--g555);
		padding: 5px;
	}

	.close-button:hover {
		color: var(--g000);
	}

	.modal-body {
		padding: 30px;
	}

	.modal-info {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
		gap: 15px;
		margin-bottom: 24px;
	}

	.info-row {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.info-label {
		font-weight: 600;
		color: var(--g555);
		font-size: 0.9rem;
	}

	.info-value {
		color: var(--g000);
	}

	.modal-description h4 {
		margin: 0 0 8px;
		color: #00316b;
	}

	.modal-description p {
		margin: 0 0 16px;
		color: var(--g555);
		line-height: 1.55;
	}

	@media (max-width: 640px) {
		.header h1 {
			font-size: 2rem;
		}

		.slice-label {
			font-size: 13px;
		}
	}
</style>
