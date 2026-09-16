import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { punishments } from './punishments.js';
import {
	WHEEL_SLOT_COUNT,
	buildWheelSlots,
	describeSlice,
	getActivePunishments,
	getOverflowPunishments,
	landingRotation,
	pickSpinIndex,
	polarToCartesian,
	sliceAngle,
	sliceCenterAngle,
} from './punishmentWheel.js';

describe('punishment catalog', () => {
	it('keeps ids unique among catalog entries', () => {
		const ids = punishments.map((p) => p.id);
		assert.equal(new Set(ids).size, ids.length);
	});

	it('requires a visible name and rules on every catalog entry', () => {
		for (const punishment of punishments) {
			assert.ok(punishment.id);
			assert.ok(punishment.name);
			assert.ok(punishment.rules);
			assert.notEqual(punishment.active, false);
		}
	});

	it('includes only Daytona 500 as a real punishment', () => {
		assert.deepEqual(
			punishments.map((p) => p.name),
			['Daytona 500'],
		);
	});
});

describe('buildWheelSlots', () => {
	it('always returns 14 slots', () => {
		assert.equal(buildWheelSlots([]).length, WHEEL_SLOT_COUNT);
		assert.equal(buildWheelSlots(punishments).length, WHEEL_SLOT_COUNT);
	});

	it('pads remaining slots as TBD placeholders', () => {
		const slots = buildWheelSlots(punishments);
		const filled = slots.filter((slot) => !slot.placeholder);
		const open = slots.filter((slot) => slot.placeholder);
		assert.equal(filled.length, punishments.length);
		assert.equal(open.length, WHEEL_SLOT_COUNT - punishments.length);
		assert.equal(slots[0].name, 'Daytona 500');
		assert.match(slots[1].name, /^TBD /);
	});

	it('ignores inactive punishments on the wheel', () => {
		const slots = buildWheelSlots([
			{ id: 'a', name: 'A', rules: 'do a', active: true },
			{ id: 'b', name: 'B', rules: 'do b', active: false },
		]);
		assert.equal(slots.filter((s) => s.id === 'a').length, 1);
		assert.equal(slots.filter((s) => s.id === 'b').length, 0);
	});

	it('caps the wheel at 14 and reports overflow', () => {
		const many = Array.from({ length: 16 }, (_, i) => ({
			id: `p-${i}`,
			name: `P${i}`,
			rules: 'x',
			active: true,
		}));
		const slots = buildWheelSlots(many);
		assert.equal(slots.length, 14);
		assert.equal(slots[13].id, 'p-13');
		assert.deepEqual(
			getOverflowPunishments(many).map((p) => p.id),
			['p-14', 'p-15'],
		);
	});
});

describe('spin math', () => {
	it('uses 360/14 degree slices', () => {
		assert.equal(sliceAngle(), 360 / 14);
	});

	it('lands the chosen slice under the top pointer', () => {
		const slotIndex = 3;
		const rotation = landingRotation(slotIndex, 14, 5, 0);
		const pointingAt = (360 - (rotation % 360)) % 360;
		const center = sliceCenterAngle(slotIndex);
		assert.ok(Math.abs(pointingAt - center) < 0.0001);
	});

	it('keeps spinning forward from a non-zero current rotation', () => {
		const next = landingRotation(0, 14, 2, 400);
		assert.ok(next > 400);
	});

	it('prefers real punishments over TBD slots', () => {
		const slots = buildWheelSlots(punishments);
		const index = pickSpinIndex(slots, () => 0.99);
		assert.equal(slots[index].placeholder, false);
	});

	it('can still spin TBD-only wheels', () => {
		const slots = buildWheelSlots([]);
		const index = pickSpinIndex(slots, () => 0);
		assert.equal(index, 0);
		assert.equal(slots[index].placeholder, true);
	});
});

describe('svg helpers', () => {
	it('places angle 0 at the top of the circle', () => {
		const top = polarToCartesian(100, 100, 50, 0);
		assert.ok(Math.abs(top.x - 100) < 0.0001);
		assert.ok(Math.abs(top.y - 50) < 0.0001);
	});

	it('draws a closed pie slice path', () => {
		const path = describeSlice(100, 100, 50, 0, sliceAngle());
		assert.match(path, /^M 100 100 L /);
		assert.match(path, / Z$/);
	});
});

describe('getActivePunishments', () => {
	it('treats missing active as on the wheel', () => {
		assert.equal(getActivePunishments([{ id: 'x', name: 'X', rules: 'r' }]).length, 1);
	});
});
