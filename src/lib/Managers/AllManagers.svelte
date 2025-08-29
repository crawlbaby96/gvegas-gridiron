<script>
    import { leagueName } from '$lib/utils/helper';
    import ManagerRow from './ManagerRow.svelte'

    export let managers, leagueTeamManagers, awards = [];

    let innerWidth;
</script>

<svelte:window bind:innerWidth={innerWidth} />

<style>
    .managerContainer {
        width: 100%;
        margin: 2em 0 5em;
    }

    .managerConstrained {
        width: 97%;
        max-width: 1200px;
        margin: 0 auto;
    }

    .managersGrid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 1.5em;
        margin-top: 2em;
    }

    h2 {
        text-align: center;
        font-size: 2.8em;
        margin: 2em 0 1.5em;
        line-height: 1em;
    }

    @media (max-width: 520px) {
        h2 {
            text-align: center;
            font-size: 2em;
            margin: 1.5em 0 1em;
            line-height: 1em;
        }
        
        .managersGrid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1em;
        }
    }

    @media (max-width: 350px) {
        .managersGrid {
            grid-template-columns: 1fr;
            gap: 1em;
        }
    }
</style>

<div class="managerContainer">
    <h2>{leagueName} Managers</h2>
    <div class="managerConstrained">
        <div class="managersGrid">
            {#each managers as manager, key}
                <ManagerRow {manager} {leagueTeamManagers} {awards} {key} />
            {/each}
        </div>
    </div>

</div>