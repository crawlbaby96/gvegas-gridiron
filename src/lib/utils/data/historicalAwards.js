/**
 * Historical Awards Data (Pre-Sleeper Era: 2011-2021)
 * 
 * This file contains championship and award data from before your league moved to Sleeper.
 * Fill in the data for each season following the structure below.
 * 
 * IMPORTANT: Use the same manager IDs that are in your current leagueInfo.js managers array
 * or create a mapping in managerMapping.js if names/IDs have changed.
 */

export const historicalAwards = [
    // Example season - replace with your actual data
    {
        year: 2021,
        champion: "419350278400126976", // Ricky Nichols - use actual manager ID from leagueInfo.js
        second: "manager_id_here",      // Runner-up
        third: "manager_id_here",       // Third place (if tracked)
        toilet: "manager_id_here",      // Last place/Toilet Bowl winner (if tracked)
        divisions: [
            {
                name: "Division 1",     // Division name (or null if no divisions)
                rosterID: "manager_id_here",
                wins: 10,
                points: 1450.5
            },
            {
                name: "Division 2",
                rosterID: "manager_id_here", 
                wins: 9,
                points: 1425.0
            }
            // Add more divisions if your league had them
        ]
    },
    
    {
        year: 2020,
        champion: "manager_id_here",
        second: "manager_id_here",
        third: "manager_id_here",
        toilet: "manager_id_here",
        divisions: [
            // Fill in division winners for 2020
            // Set to empty array [] if no divisions that year
        ]
    },
    
    {
        year: 2019,
        champion: "manager_id_here",
        second: "manager_id_here", 
        third: "manager_id_here",
        toilet: "manager_id_here",
        divisions: []
    },
    
    {
        year: 2018,
        champion: "manager_id_here",
        second: "manager_id_here",
        third: "manager_id_here", 
        toilet: "manager_id_here",
        divisions: []
    },
    
    {
        year: 2017,
        champion: "manager_id_here",
        second: "manager_id_here",
        third: "manager_id_here",
        toilet: "manager_id_here", 
        divisions: []
    },
    
    {
        year: 2016,
        champion: "manager_id_here",
        second: "manager_id_here",
        third: "manager_id_here",
        toilet: "manager_id_here",
        divisions: []
    },
    
    {
        year: 2015,
        champion: "manager_id_here", 
        second: "manager_id_here",
        third: "manager_id_here",
        toilet: "manager_id_here",
        divisions: []
    },
    
    {
        year: 2014,
        champion: "manager_id_here",
        second: "manager_id_here", 
        third: "manager_id_here",
        toilet: "manager_id_here",
        divisions: []
    },
    
    {
        year: 2013,
        champion: "manager_id_here",
        second: "manager_id_here",
        third: "manager_id_here", 
        toilet: "manager_id_here",
        divisions: []
    },
    
    {
        year: 2012,
        champion: "manager_id_here",
        second: "manager_id_here",
        third: "manager_id_here",
        toilet: "manager_id_here", 
        divisions: []
    },
    
    {
        year: 2011, // Your founding year!
        champion: "manager_id_here",
        second: "manager_id_here",
        third: "manager_id_here",
        toilet: "manager_id_here",
        divisions: []
    }
];

/**
 * INSTRUCTIONS FOR FILLING OUT THIS DATA:
 * 
 * 1. MANAGER IDs: Use the managerID from your leagueInfo.js managers array
 *    Example: "419350278400126976" for Ricky Nichols
 * 
 * 2. DIVISIONS: If your league had divisions in certain years, fill in the division
 *    winners. If no divisions, use an empty array: divisions: []
 * 
 * 3. MISSING DATA: If you don't have certain data (like third place), you can:
 *    - Use null: third: null
 *    - Or omit the field entirely
 * 
 * 4. TOILET BOWL: If you didn't track last place, set to null or omit
 * 
 * 5. VERIFICATION: Double-check manager IDs match your current leagueInfo.js
 *    to ensure awards show up correctly on manager profiles
 */
