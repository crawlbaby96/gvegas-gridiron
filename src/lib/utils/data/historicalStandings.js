/**
 * Historical Standings Data (Pre-Sleeper Era: 2011-2021)
 * 
 * This file contains final regular season standings for historical seasons.
 * Use this to show complete league history and calculate all-time records.
 */

export const historicalStandings = [
    {
        year: 2021,
        regularSeasonWeeks: 14, // How many weeks in regular season
        playoffWeeks: 3,        // How many weeks of playoffs
        standings: [
            {
                rank: 1,
                managerID: "419350278400126976", // Use actual manager ID
                teamName: "Children of the Corn",   // Team name that year
                wins: 11,
                losses: 3,
                ties: 0,
                pointsFor: 1456.7,
                pointsAgainst: 1234.5,
                division: 1,        // Division number (1, 2, etc.) or null
                playoffSeed: 1,     // Playoff seeding (1-6 typically)
                rosterID: "419350278400126976" // Usually same as managerID for historical
            },
            {
                rank: 2,
                managerID: "manager_id_here",
                teamName: "Team Name Here",
                wins: 10,
                losses: 4,
                ties: 0,
                pointsFor: 1398.2,
                pointsAgainst: 1289.1,
                division: 1,
                playoffSeed: 2,
                rosterID: "manager_id_here"
            },
            {
                rank: 3,
                managerID: "manager_id_here",
                teamName: "Team Name Here", 
                wins: 9,
                losses: 5,
                ties: 0,
                pointsFor: 1345.8,
                pointsAgainst: 1298.4,
                division: 2,
                playoffSeed: 3,
                rosterID: "manager_id_here"
            }
            // Continue for all managers that season (typically 10-16 teams)
        ]
    },
    
    {
        year: 2020,
        regularSeasonWeeks: 13,
        playoffWeeks: 3,
        standings: [
            // Fill in 2020 standings
            {
                rank: 1,
                managerID: "manager_id_here",
                teamName: "Team Name Here",
                wins: 0,
                losses: 0,
                ties: 0,
                pointsFor: 0,
                pointsAgainst: 0,
                division: null,
                playoffSeed: 1,
                rosterID: "manager_id_here"
            }
            // Add all teams for 2020
        ]
    },
    
    {
        year: 2019,
        regularSeasonWeeks: 13,
        playoffWeeks: 3,
        standings: [
            // Fill in 2019 standings
        ]
    },
    
    {
        year: 2018,
        regularSeasonWeeks: 13,
        playoffWeeks: 3,
        standings: [
            // Fill in 2018 standings  
        ]
    },
    
    {
        year: 2017,
        regularSeasonWeeks: 13,
        playoffWeeks: 3,
        standings: [
            // Fill in 2017 standings
        ]
    },
    
    {
        year: 2016,
        regularSeasonWeeks: 13,
        playoffWeeks: 3,
        standings: [
            // Fill in 2016 standings
        ]
    },
    
    {
        year: 2015,
        regularSeasonWeeks: 13,
        playoffWeeks: 3,
        standings: [
            // Fill in 2015 standings
        ]
    },
    
    {
        year: 2014,
        regularSeasonWeeks: 13,
        playoffWeeks: 3,
        standings: [
            // Fill in 2014 standings
        ]
    },
    
    {
        year: 2013,
        regularSeasonWeeks: 13,
        playoffWeeks: 3,
        standings: [
            // Fill in 2013 standings
        ]
    },
    
    {
        year: 2012,
        regularSeasonWeeks: 13,
        playoffWeeks: 3,
        standings: [
            // Fill in 2012 standings
        ]
    },
    
    {
        year: 2011, // Your founding year!
        regularSeasonWeeks: 13,
        playoffWeeks: 3,
        standings: [
            // Fill in 2011 standings - the original champions!
        ]
    }
];

/**
 * WHAT THIS DATA ENABLES:
 * 
 * 1. ALL-TIME RECORDS: Calculate career wins, losses, winning percentage
 * 2. PLAYOFF HISTORY: Show how many times each manager made playoffs
 * 3. POINTS RECORDS: Find highest/lowest season point totals
 * 4. HEAD-TO-HEAD: Build historical matchup records (if you have game logs)
 * 5. LEAGUE EVOLUTION: Show how league size, divisions changed over time
 * 
 * MINIMUM DATA NEEDED:
 * - Manager ID (mapped to current system)
 * - Wins and Losses for each season
 * - Final rank/standings
 * 
 * BONUS DATA (if available):
 * - Total points for/against
 * - Playoff seeding
 * - Division information
 * - Team names used each year
 * 
 * DATA COLLECTION TIPS:
 * - Check old ESPN/Yahoo league pages
 * - Look for end-of-season Facebook posts or texts
 * - Check draft recaps that might mention previous champions
 * - Ask league members for screenshots of old standings
 * - Even partial data is better than none!
 */
