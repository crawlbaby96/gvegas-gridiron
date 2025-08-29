import {
    getLeagueTeamManagers,
    getAwards,
    managers,
} from '$lib/utils/helper';

export async function load() {
    if(!managers.length) return {managers};
    const leagueTeamManagersData = getLeagueTeamManagers();
    const awardsData = getAwards();

    const props = {
        managers,
        leagueTeamManagersData,
        awardsData
    }

    return props;
}