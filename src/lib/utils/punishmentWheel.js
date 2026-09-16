export const WHEEL_SLOT_COUNT = 14;

const TBD_RULES =
	'Replace this open slot by adding an object to punishments in src/lib/utils/punishments.js. See the comment at the top of that file.';

export function getActivePunishments(punishments) {
	return (punishments || []).filter((punishment) => punishment && punishment.active !== false);
}

export function buildWheelSlots(punishments, slotCount = WHEEL_SLOT_COUNT) {
	const active = getActivePunishments(punishments);
	const onWheel = active.slice(0, slotCount).map((punishment, index) => ({
		...punishment,
		slotIndex: index,
		placeholder: false,
	}));

	while (onWheel.length < slotCount) {
		const slotIndex = onWheel.length;
		onWheel.push({
			id: `open-slot-${slotIndex + 1}`,
			name: `TBD ${slotIndex + 1}`,
			weekAdded: null,
			submittedBy: null,
			rules: TBD_RULES,
			details: 'This slice is reserved so the wheel stays at 14 slots while punishments are added weekly.',
			active: true,
			placeholder: true,
			slotIndex,
		});
	}

	return onWheel;
}

export function getOverflowPunishments(punishments, slotCount = WHEEL_SLOT_COUNT) {
	return getActivePunishments(punishments).slice(slotCount);
}

export function sliceAngle(slotCount = WHEEL_SLOT_COUNT) {
	return 360 / slotCount;
}

export function sliceCenterAngle(slotIndex, slotCount = WHEEL_SLOT_COUNT) {
	const angle = sliceAngle(slotCount);
	return slotIndex * angle + angle / 2;
}

/**
 * Rotation (degrees, clockwise) that places the given slice under a pointer at the top.
 * `currentRotation` is the wheel's current CSS rotate value so extra spins keep going forward.
 */
export function landingRotation(slotIndex, slotCount = WHEEL_SLOT_COUNT, extraSpins = 5, currentRotation = 0) {
	const target = (360 - sliceCenterAngle(slotIndex, slotCount)) % 360;
	const currentMod = ((currentRotation % 360) + 360) % 360;
	let delta = target - currentMod;
	if (delta <= 0) delta += 360;
	return currentRotation + extraSpins * 360 + delta;
}

export function pickSpinIndex(slots, random = Math.random) {
	const eligible = slots.filter((slot) => !slot.placeholder);
	const pool = eligible.length ? eligible : slots;
	const pick = pool[Math.floor(random() * pool.length)];
	return pick.slotIndex;
}

export function polarToCartesian(cx, cy, radius, angleDeg) {
	const angleRad = ((angleDeg - 90) * Math.PI) / 180;
	return {
		x: cx + radius * Math.cos(angleRad),
		y: cy + radius * Math.sin(angleRad),
	};
}

export function describeSlice(cx, cy, radius, startAngle, endAngle) {
	const start = polarToCartesian(cx, cy, radius, endAngle);
	const end = polarToCartesian(cx, cy, radius, startAngle);
	const largeArc = endAngle - startAngle <= 180 ? '0' : '1';
	return `M ${cx} ${cy} L ${end.x} ${end.y} A ${radius} ${radius} 0 ${largeArc} 1 ${start.x} ${start.y} Z`;
}

export function labelTransform(cx, cy, radius, midAngle) {
	const pos = polarToCartesian(cx, cy, radius, midAngle);
	let rotate = midAngle;
	if (midAngle > 90 && midAngle < 270) {
		rotate = midAngle + 180;
	}
	return { x: pos.x, y: pos.y, rotate };
}

/** e.g. "Week 1 · BadNewsBabyMammas". Empty when no team has submitted yet. */
export function formatSubmission(punishment) {
	if (!punishment?.submittedBy) return '';
	if (punishment.weekAdded != null && punishment.weekAdded !== '') {
		return `Week ${punishment.weekAdded} · ${punishment.submittedBy}`;
	}
	return punishment.submittedBy;
}

export const WHEEL_COLORS = [
	'#00316b',
	'#0082c3',
	'#920505',
	'#00316b',
	'#0082c3',
	'#920505',
	'#00316b',
	'#0082c3',
	'#920505',
	'#00316b',
	'#0082c3',
	'#920505',
	'#00316b',
	'#0082c3',
];
