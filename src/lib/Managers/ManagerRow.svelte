<script>
    import { goto } from "$app/navigation";
	import { getDatesActive, getRosterIDFromManagerID, getTeamNameFromTeamManagers } from "$lib/utils/helperFunctions/universalFunctions";
    import {dynasty} from "$lib/utils/leagueInfo"

    export let manager, leagueTeamManagers, key;

    let retired = false;

    // manager.roster is deprecated, pages should be using managerID now
    let rosterID = manager.roster;
    let year = null;

    if(manager.managerID) {
        const dates = getDatesActive(leagueTeamManagers, manager.managerID);
        if(dates.end) retired = true;

        ({rosterID, year} = getRosterIDFromManagerID(leagueTeamManagers, manager.managerID) || {rosterID, year});
    }

    const commissioner = manager.managerID ? leagueTeamManagers.users[manager.managerID].is_owner : false;
</script>

<style>
    .manager {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 1.5em;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 1em;
        border: 1px solid var(--ccc);
        box-shadow: 0 2px 8px 0 var(--bbb);
        cursor: pointer;
        transition: all 0.2s ease;
        height: 300px;
        position: relative;
        overflow: hidden;
    }

    .manager::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.1) 40%,
            rgba(0, 0, 0, 0.6) 80%,
            rgba(0, 0, 0, 0.8) 100%
        );
        z-index: 1;
    }

    .manager:hover {
        box-shadow: 0 4px 16px 0 var(--g999);
        transform: translateY(-2px);
    }

    .manager:hover::before {
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.2) 40%,
            rgba(0, 0, 0, 0.7) 80%,
            rgba(0, 0, 0, 0.9) 100%
        );
    }

    .councilOverlay {
        position: absolute;
        top: 15px;
        left: 15px;
        height: 50px;
        width: 42px;
        z-index: 2;
        opacity: 0.9;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8));
        transition: all 0.3s ease;
    }

    .councilOverlay:hover {
        opacity: 1;
        transform: scale(1.1);
    }

    .commissionerBadge {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 15px;
        right: 15px;
        height: 40px;
        width: 40px;
        font-weight: 600;
        font-size: 1.2em;
        border-radius: 50%;
        background-color: var(--blueTwo);
        border: 2px solid var(--fff);
        color: #fff;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.3);
        z-index: 2;
    }

    .managerInfo {
        text-align: center;
        width: 100%;
        position: relative;
        z-index: 2;
    }

    .name {
        font-size: 1.4em;
        color: #fff;
        font-weight: 700;
        margin-bottom: 0.3em;
        line-height: 1.2em;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    }

    .team {
        font-style: italic;
        color: #fff;
        font-weight: 400;
        margin-bottom: 1em;
        font-size: 1em;
        line-height: 1.2em;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
    }

    .info {
        display: flex;
        justify-content: center;
        gap: 0.8em;
        flex-wrap: wrap;
        position: relative;
        z-index: 2;
    }

    .infoSlot {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 50px;
    }

    .infoIcon {
        display: flex;
        height: 35px;
        width: 35px;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.8);
        overflow: hidden;
        background-color: rgba(255, 255, 255, 0.9);
        margin-bottom: 0.2em;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(5px);
    }

    .infoImg {
        height: 22px;
        width: 22px;
        object-fit: contain;
    }

    .infoAnswer {
        font-size: 0.7em;
        color: #fff;
        text-align: center;
        line-height: 1.1em;
        font-weight: 600;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
    }

    .question {
        background-color: rgba(255, 255, 255, 0.9);
    }

    /* Retired managers styling */
    .retired::before {
        background: linear-gradient(
            to bottom,
            rgba(100, 100, 100, 0.3) 0%,
            rgba(100, 100, 100, 0.5) 40%,
            rgba(50, 50, 50, 0.8) 80%,
            rgba(0, 0, 0, 0.9) 100%
        );
    }

    .retired {
        filter: grayscale(50%);
    }

    @media (max-width: 520px) {
        .manager {
            padding: 1.2em;
            height: 280px;
        }

        .commissionerBadge {
            height: 35px;
            width: 35px;
            font-size: 1em;
            top: 12px;
            right: 12px;
        }

        .councilOverlay {
            height: 45px;
            width: 38px;
            top: 12px;
            left: 12px;
        }

        .name {
            font-size: 1.2em;
        }

        .team {
            font-size: 0.9em;
        }

        .infoIcon {
            height: 32px;
            width: 32px;
        }

        .infoImg {
            height: 20px;
            width: 20px;
        }
    }

    @media (max-width: 350px) {
        .manager {
            padding: 1em;
            height: 250px;
        }

        .commissionerBadge {
            height: 30px;
            width: 30px;
            font-size: 0.9em;
            top: 10px;
            right: 10px;
        }

        .councilOverlay {
            height: 40px;
            width: 34px;
            top: 10px;
            left: 10px;
        }

        .infoTeam {
            display: none;
        }

        .info {
            gap: 0.6em;
        }

        .name {
            font-size: 1.1em;
        }

        .team {
            font-size: 0.85em;
        }
    }
</style>

<div class="manager {retired ? 'retired' : ''}" 
     style="background-image: url('{manager.photo}')" 
     onclick={() => goto(`/manager?manager=${key}`)}>
    
    {#if manager.council}
        <img class="councilOverlay" src="/council-symbol.svg" alt="League Council Member" title="League Council Member" />
    {/if}
    
    {#if commissioner}
        <div class="commissionerBadge">
            <span>C</span>
        </div>
    {/if}
    
    <div class="managerInfo">
        <div class="name">{manager.name}</div>
        <div class="team">{getTeamNameFromTeamManagers(leagueTeamManagers, rosterID, year)}</div>
        
        <div class="info">
            <!-- Favorite team (optional) -->
            <div class="infoSlot infoTeam">
                {#if manager.favoriteTeam}
                    <div class="infoIcon">
                        <img class="infoImg" src="https://sleepercdn.com/images/team_logos/nfl/{manager.favoriteTeam}.png" alt="favorite team"/>
                    </div>
                    <div class="infoAnswer">Fav Team</div>
                {:else}
                    <div class="infoIcon question">
                        <img class="infoImg" src="/managers/question.jpg" alt="favorite team"/>
                    </div>
                    <div class="infoAnswer">Fav Team</div>
                {/if}
            </div>
            
            <!-- Preferred contact -->
            <div class="infoSlot">
                {#if manager.preferredContact}
                    <div class="infoIcon">
                        <img class="infoImg" src="/{manager.preferredContact}.png" alt="{manager.preferredContact}"/>
                    </div>
                    <div class="infoAnswer">
                        {manager.preferredContact}
                    </div>
                {:else}
                    <div class="infoIcon question">
                        <img class="infoImg" src="/managers/question.jpg" alt="contact"/>
                    </div>
                    <div class="infoAnswer">Contact</div>
                {/if}
            </div>
            
            <!-- Rebuild mode (optional and only displayed for dynasty leagues) -->
            {#if dynasty}
                <div class="infoSlot infoRebuild">
                    {#if manager.mode}
                        <div class="infoIcon">
                            <img class="infoImg" src="/{manager.mode.replace(' ', '%20')}.png" alt="win now or rebuild"/>
                        </div>
                        <div class="infoAnswer">
                            {manager.mode}
                        </div>
                    {:else}
                        <div class="infoIcon question">
                            <img class="infoImg" src="/managers/question.jpg" alt="strategy"/>
                        </div>
                        <div class="infoAnswer">Strategy</div>
                    {/if}
                </div>
            {/if}
        </div>
    </div>
</div>