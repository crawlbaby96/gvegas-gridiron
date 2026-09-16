/**
 * G-Vegas Punishment Wheel catalog.
 *
 * HOW TO ADD NEXT WEEK'S PUNISHMENT
 * ---------------------------------
 * 1. Copy the template object below.
 * 2. Paste it at the bottom of `punishments` (before the closing `];`).
 * 3. Fill in `id`, `name` (short — this is what appears on the wheel),
 *    `rules`, and optional `details`.
 * 4. Set `weekAdded` to the NFL week it was added.
 * 5. Leave `active: true`. To retire a punishment without deleting it,
 *    set `active: false` — it drops off the wheel but stays in this file.
 *
 * The wheel always has 14 slots. Active punishments fill slots in array
 * order. Remaining slots show as TBD until you add more. If there are more
 * than 14 active entries, extras are listed on the page but not on the wheel.
 *
 * Template:
 * {
 *   id: 'kebab-case-id',
 *   name: 'Short Name',
 *   weekAdded: 3,
 *   rules: 'What the loser must do, timing, and any constraints.',
 *   details: 'Optional extra notes, proof required, exceptions.',
 *   active: true,
 * }
 */

export const punishments = [
	{
		id: 'waffle-house',
		name: 'Waffle House',
		weekAdded: 1,
		rules: 'The loser must complete a Waffle House sit-down of league-approved volume and duration. Proof required (photos or video in the group chat).',
		details:
			'League lore: Chris Rawlings once put up 13 waffles in 11 hours. Match or exceed the spirit of that effort; the commissioner sets the exact count for the season.',
		active: true,
	},
	{
		id: 'schwauagaahany-date',
		name: 'Cutout Date',
		weekAdded: 2,
		rules: 'Take a life-size cardboard cutout of a league-designated member out for a full sit-down dinner at a real restaurant. Conversation, photos, and the check are part of the bit.',
		details:
			'Inspired by Jose’s 2023 Soby’s date with the Schwauagaahany cutout. The commissioner names the cutout subject before the spin.',
		active: true,
	},
];
