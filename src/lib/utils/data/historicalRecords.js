/**
 * Historical Records Data (Pre-Sleeper Era: 2011-2021)
 * 
 * This file contains scoring records and statistics from before your league moved to Sleeper.
 * Fill in what data you have available - missing data will simply not appear in records.
 */

export const historicalRecords = {
    // Highest single-week scores across all historical seasons
    allTimeWeekHighs: [
        // Example entries - replace with your actual highest scores
        {
            year: 2021,
            week: 5,
            managerID: "419350278400126976", // Use actual manager ID
            teamName: "Children of the Corn", // Team name that year
            points: 165.5,
            rosterID: "419350278400126976" // Usually same as managerID for historical
        },
        {
            year: 2020,
            week: 12,
            managerID: "manager_id_here",
            teamName: "Team Name Here",
            points: 158.2,
            rosterID: "manager_id_here"
        }
        // Add more high scores as you find them
        // These will be merged with Sleeper's week highs for all-time records
    ],

    // Lowest single-week scores (if you track these)
    allTimeWeekLows: [
        {
            year: 2015,
            week: 14,
            managerID: "manager_id_here",
            teamName: "Team Name Here", 
            points: 45.8,
            rosterID: "manager_id_here"
        }
        // Add more if available
    ],

    // Season-long point totals by year
    seasonTotals: [
        {
            year: 2021,
            records: [
                {
                    managerID: "419350278400126976",
                    teamName: "Children of the Corn",
                    totalPoints: 1456.7,
                    wins: 11,
                    losses: 3,
                    ties: 0,
                    rosterID: "419350278400126976"
                },
                {
                    managerID: "manager_id_here",
                    teamName: "Team Name Here",
                    totalPoints: 1234.5,
                    wins: 8,
                    losses: 6,
                    ties: 0,
                    rosterID: "manager_id_here"
                }
                // Add all managers for that season
            ]
        },
        
        {
            year: 2020,
            records: [
                // Fill in 2020 season data
            ]
        }
        
        // Continue for all years you have data
    ],

    // Notable blowouts (largest margins of victory)
    biggestBlowouts: [
        {
            year: 2019,
            week: 8,
            winner: {
                managerID: "manager_id_here",
                teamName: "Team Name Here",
                points: 167.5
            },
            loser: {
                managerID: "manager_id_here", 
                teamName: "Team Name Here",
                points: 85.2
            },
            margin: 82.3
        }
        // Add more blowouts if you remember them
    ],

    // Closest matchups
    closestMatchups: [
        {
            year: 2018,
            week: 13,
            winner: {
                managerID: "manager_id_here",
                teamName: "Team Name Here", 
                points: 112.58
            },
            loser: {
                managerID: "manager_id_here",
                teamName: "Team Name Here",
                points: 112.54
            },
            margin: 0.04
        }
        // Add more nail-biters
    ]
};

/**
 * PRIORITY DATA TO COLLECT:
 * 
 * HIGH PRIORITY (shows on awards/records pages):
 * - Season champions and runners-up (in historicalAwards.js)
 * - Highest single-week scores across all years
 * - Season point totals (at least the highest/lowest per year)
 * 
 * MEDIUM PRIORITY:
 * - Weekly records within individual seasons
 * - Win-loss records by season
 * - Division winners (if applicable)
 * 
 * LOW PRIORITY (nice to have):
 * - Biggest blowouts and closest matchups
 * - Lowest single-week scores
 * - Trading records or other fun stats
 * 
 * DATA SOURCES TO CHECK:
 * - Old ESPN/Yahoo league pages (if still accessible)
 * - Screenshots or saved spreadsheets
 * - League chat history or social media posts
 * - Commissioner notes or records
 * - Draft boards or end-of-season summaries
 */
