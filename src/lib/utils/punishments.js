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
		submittedBy: 'Bad News Babymamas',
		rules: 'The loser must drive around a roundabout 500 times. Each donut eaten reduces the remaining laps by 5. This cannot be done in a self-driving car.',
		active: true,
	},
	// The next three were named in the 10/6/2026 severity note and were not in
	// the catalog. Rules are only the concrete details from that note. Full
	// writeups were not in the repo or its history. No week or submitter was recorded.
	{
		id: 'strawberry-shortcake',
		name: 'Strawberry Shortcake',
		rules: 'The GoPro requirement has been removed. The punishment includes visiting the Pace household.',
		details:
			'Severity note posted 10/6/2026 by North Korean Fighting Kims: the chances of arrest are lower since we removed the GoPro requirement, but Chris Hansen and Alex Rosen are lurking around the corner. Visiting the Pace household is the cherry on top!',
		active: true,
	},
	{
		id: 'back-to-school',
		name: 'Back to School',
		rules: 'The loser must spend a full Saturday that cannot be manipulated, starting at 8AM, including at least two academic tests, reading the essay of shame on draft weekend, and YouTube uploads.',
		details:
			"Severity note posted 10/6/2026 by North Korean Fighting Kims: the lack of getting arrested danger narrowly puts this behind the Daytona 500, but this is a full day of misery that can't be manipulated. From the 8AM start time, at least two academic tests, reading the essay of shame on draft weekend, and YouTube uploads of your misery, this is a wasted Saturday and a migrane inducing nightmare",
		active: true,
	},
	{
		id: 'stay-of-execution',
		name: 'Stay of Execution',
		rules: 'The loser must hold a plank for approximately 7-14 minutes straight, with a burpee penalty.',
		details:
			'Severity note posted 10/6/2026 by North Korean Fighting Kims: holding a plank for approximately 7-14 minutes straight with a burpee penalty is unpleasant, but the name "Stay of Execution" implies that this is designed to be less severe than the other punishments',
		active: true,
	},
	{
		id: 'solo-flash-mob',
		name: 'Solo Flash Mob (The Internet Record Edition)',
		submittedBy: 'Bull City Bots',
		rules: 'The loser will head to a packed public area, turn a portable Bluetooth speaker to maximum volume, and perform a high-energy, fully choreographed full-song routine lasting at least 4 minutes to a highly embarrassing track chosen by the league—all without breaking character or explaining the stunt to the bewildered crowd. Two league members will film the performance and the raw reactions of onlookers from a distance. The unedited footage will then be uploaded as a public YouTube video and pinned across all the loser’s personal social media profiles, where it must remain completely active and public for 365 consecutive days, enforced by severe draft penalties if removed early.',
		details: 'Song choice must be chosen / approved by league council.',
		active: true,
	},
];
