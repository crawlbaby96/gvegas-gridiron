/**
 * G-Vegas Punishment Wheel catalog.
 *
 * HOW TO ADD NEXT WEEK'S PUNISHMENT
 * ---------------------------------
 * 1. Copy the template object below.
 * 2. Paste it at the bottom of `punishments` (before the closing `];`).
 * 3. Fill in `id`, `name` (short — this is what appears on the wheel),
 *    `rules`, and optional `details`.
 * 4. Set `weekAdded` to the NFL week it was added and `submittedBy` to the team name.
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
 *   submittedBy: 'Team Name',
 *   rules: 'What the loser must do, timing, and any constraints.',
 *   details: 'Optional extra notes, proof required, exceptions.',
 *   active: true,
 * }
 */

export const punishments = [
	{
		id: 'daytona-500',
		name: 'Daytona 500',
		weekAdded: 1,
		submittedBy: 'BadNewsBabyMammas',
		rules: 'The loser must drive around a roundabout 500 times. Each donut eaten reduces the remaining laps by 5. This cannot be done in a self-driving car.',
		active: true,
	},
];
