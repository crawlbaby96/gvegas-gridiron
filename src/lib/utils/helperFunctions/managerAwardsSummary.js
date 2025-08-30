import { checkIfManagerReceivedAward } from './universalFunctions';

/**
 * Calculate awards summary for a manager - championships and division wins
 * @param {Array} awards - Array of award objects from leagueAwards
 * @param {string} rosterID - Current roster ID of the manager
 * @param {string} managerID - Manager ID for historical tracking
 * @param {Object} leagueTeamManagers - League team managers data
 * @returns {Object} Awards summary with championship and division win counts
 */
export const getManagerAwardsSummary = (awards, rosterID, managerID, leagueTeamManagers) => {
    let championships = 0;
    let divisionWins = 0;
    let runnerUp = 0;

    const checkIfDeserves = (awardRosterID, userRosterID, year) => {
        if (!managerID || !year || !awardRosterID) {
            return awardRosterID == userRosterID;
        }
        return checkIfManagerReceivedAward(leagueTeamManagers, awardRosterID, year, managerID);
    };

    // Look through annual awards
    for (const podium of awards) {
        // Check for championships
        if (checkIfDeserves(podium.champion, rosterID, podium.year)) {
            championships++;
        }

        // Check for runner-up finishes  
        if (checkIfDeserves(podium.second, rosterID, podium.year)) {
            runnerUp++;
        }

        // Check for division wins
        if (podium.divisions) {
            for (const division of podium.divisions) {
                if (checkIfDeserves(division.rosterID, rosterID, podium.year)) {
                    divisionWins++;
                }
            }
        }
    }

    return {
        championships,
        divisionWins,
        runnerUp,
        totalMajorAwards: championships + divisionWins
    };
};

/**
 * Get a formatted awards summary string for display
 * @param {Object} awardsSummary - Awards summary object from getManagerAwardsSummary
 * @returns {string} Formatted awards string
 */
export const formatAwardsSummary = (awardsSummary) => {
    const { championships, divisionWins, runnerUp } = awardsSummary;
    
    if (championships === 0 && divisionWins === 0) {
        return runnerUp > 0 ? `${runnerUp} Runner-up${runnerUp > 1 ? 's' : ''}` : "No major awards yet";
    }

    const parts = [];
    if (championships > 0) {
        parts.push(`${championships} Championship${championships > 1 ? 's' : ''}`);
    }
    if (divisionWins > 0) {
        parts.push(`${divisionWins} Division Win${divisionWins > 1 ? 's' : ''}`);
    }

    return parts.join(' • ');
};
