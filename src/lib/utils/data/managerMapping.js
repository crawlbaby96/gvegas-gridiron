/**
 * Manager Mapping for Historical Data
 * 
 * This file handles the mapping between historical manager names/identifiers
 * and current manager IDs used in leagueInfo.js
 * 
 * Use this when manager names, team names, or identifiers have changed
 * over the years, or when you need to consolidate multiple identities
 * into a single manager profile.
 */

// Current manager IDs from leagueInfo.js for reference
export const currentManagerIDs = {
    "Ricky Nichols": "419350278400126976",
    "Wes Cundiff": "419571026003685376", 
    "James Figueroa": "419572262948773888",
    "Rory Hanrahan": "421096087068377088",
    "Christopher Rawlings": "425027598158143488",
    "Jose Cabral": "425808418644836352",
    "Chris Winans": "426547980265734144",
    "Luke Hanrahan": "428351478431973376",
    "Jon Egan": "431978008124940288",
    "Noel Vega": "433093072896229376",
    "John Martin": "440353700598226944",
    "Corbin Winans": "458421503616999424",
    "Brad Reynolds": "463827436154298368",
    "DJ Miller": "465352992996298752",
    "Chuck Gilbertson": "470752089551990784",
    "Elliott Finch": "508406779951431680",
    "Shawn McMahan": "966899065732841472"
};

/**
 * Historical name mappings
 * Maps old team names, nicknames, or different spellings to current manager IDs
 */
export const historicalNameMappings = {
    // Example mappings - update with your actual historical names
    
    // If someone changed their team name over the years
    "La Furia Roja": "419350278400126976", // Ricky's old team name -> current ID
    "Children of the Corn": "419350278400126976", // Ricky's current team name
    
    // If someone had different spellings or nicknames
    "Chris R": "425027598158143488", // Christopher Rawlings
    "Christopher R": "425027598158143488",
    "Chris Rawlings": "425027598158143488",
    
    // If someone joined/left and came back
    "Brad R": "463827436154298368", // Brad Reynolds
    "Brad Reynolds": "463827436154298368",
    
    // Add more mappings as needed for your historical data
    // Format: "Historical Name": "Current Manager ID"
};

/**
 * Manager history - tracks when managers were active
 * Useful for showing accurate historical records
 */
export const managerHistory = {
    "419350278400126976": { // Ricky Nichols
        name: "Ricky Nichols",
        activeYears: [2011, 2012, 2013, 2014, 2015, 2022, 2023, 2024, 2025], // Example: gap from 2016-2021
        teamNames: {
            "2011-2015": "La Furia Roja",
            "2022-2025": "Children of the Corn"
        },
        notes: "Founding member, took sabbatical 2016-2021, returned 2022"
    },
    
    // Add entries for other managers with naming/activity changes
    "425027598158143488": { // Christopher Rawlings
        name: "Christopher Rawlings", 
        activeYears: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
        teamNames: {
            "2011-2025": "Monday Night Comeback"
        },
        notes: "League founder, commissioner"
    }
    
    // Continue for managers with interesting histories
};

/**
 * Helper function to get current manager ID from historical name
 */
export const getManagerIDFromHistoricalName = (historicalName) => {
    return historicalNameMappings[historicalName] || historicalName;
};

/**
 * Helper function to get team name for a specific year
 */
export const getHistoricalTeamName = (managerID, year) => {
    const history = managerHistory[managerID];
    if (!history) return null;
    
    for (const [yearRange, teamName] of Object.entries(history.teamNames)) {
        const [startYear, endYear] = yearRange.split('-').map(y => parseInt(y));
        if (year >= startYear && year <= endYear) {
            return teamName;
        }
    }
    return null;
};

/**
 * INSTRUCTIONS FOR USING THIS FILE:
 * 
 * 1. COLLECT HISTORICAL NAMES: Look through old records and note any
 *    different team names, manager names, or nicknames used
 * 
 * 2. MAP TO CURRENT IDs: For each historical name, map it to the 
 *    current manager ID from your leagueInfo.js file
 * 
 * 3. TRACK ACTIVE YEARS: Note which years each manager participated
 *    This helps show accurate "years active" on manager profiles
 * 
 * 4. TEAM NAME EVOLUTION: Track how team names changed over time
 *    This shows historical team names in old records
 * 
 * 5. USE IN HISTORICAL DATA: Reference these mappings when filling
 *    out historicalAwards.js and historicalRecords.js
 */
