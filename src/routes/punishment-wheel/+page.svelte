<script>
	import PunishmentWheel from '$lib/PunishmentWheel/index.svelte';
	import { leagueName } from '$lib/utils/helper';
</script>

<svelte:head>
	<title>{leagueName} - Punishment Wheel</title>
</svelte:head>

<PunishmentWheel />
