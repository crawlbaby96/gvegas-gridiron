const fs = require('fs');

// Your league ID from leagueInfo.js
const LEAGUE_ID = "1185988161254850560";

async function get2025DraftPicks() {
    try {
        console.log('Fetching 2025 draft data...');
        
        // First, get the league data to find the draft ID
        const leagueResponse = await fetch(`https://api.sleeper.app/v1/league/${LEAGUE_ID}`);
        const leagueData = await leagueResponse.json();
        
        if (!leagueData.draft_id) {
            console.log('No draft found for this league');
            return;
        }
        
        console.log(`Found draft ID: ${leagueData.draft_id}`);
        
        // Get the draft details
        const draftResponse = await fetch(`https://api.sleeper.app/v1/draft/${leagueData.draft_id}`);
        const draftData = await draftResponse.json();
        
        // Get the draft picks
        const picksResponse = await fetch(`https://api.sleeper.app/v1/draft/${leagueData.draft_id}/picks`);
        const picksData = await picksResponse.json();
        
        // Get player data for position information
        const playersResponse = await fetch('https://api.sleeper.app/v1/players/nfl');
        const playersData = await playersResponse.json();
        
        console.log(`Found ${picksData.length} draft picks`);
        
        // Process the picks
        const processedPicks = picksData.map(pick => {
            const player = playersData[pick.player_id];
            const pickNumber = pick.pick_no;
            const round = pick.round;
            const position = player ? player.position : 'Unknown';
            const playerName = player ? `${player.first_name} ${player.last_name}` : 'Unknown Player';
            const team = player ? player.team : 'FA';
            
            return {
                pickNumber,
                round,
                position,
                playerName,
                team,
                manager: pick.picked_by || 'Unknown'
            };
        });
        
        // Sort by pick number
        processedPicks.sort((a, b) => a.pickNumber - b.pickNumber);
        
        // Create CSV content for Excel
        let csvContent = 'Pick Number,Round,Position,Player Name,Team,Manager\n';
        
        processedPicks.forEach(pick => {
            csvContent += `${pick.pickNumber},${pick.round},${pick.position},${pick.playerName},${pick.team},${pick.manager}\n`;
        });
        
        // Write to file
        fs.writeFileSync('2025_draft_picks.csv', csvContent);
        
        console.log('\n=== 2025 DRAFT PICKS ===');
        console.log('Pick # | Round | Pos | Player Name | Team | Manager');
        console.log('--------|-------|-----|-------------|------|---------');
        
        processedPicks.forEach(pick => {
            console.log(`${pick.pickNumber.toString().padStart(6)} | ${pick.round.toString().padStart(5)} | ${pick.position.padStart(3)} | ${pick.playerName.padEnd(20)} | ${pick.team.padStart(3)} | ${pick.manager}`);
        });
        
        console.log(`\nData exported to '2025_draft_picks.csv'`);
        console.log(`Total picks: ${processedPicks.length}`);
        
        // Summary by position
        const positionCounts = {};
        processedPicks.forEach(pick => {
            positionCounts[pick.position] = (positionCounts[pick.position] || 0) + 1;
        });
        
        console.log('\n=== POSITION BREAKDOWN ===');
        Object.entries(positionCounts).forEach(([pos, count]) => {
            console.log(`${pos}: ${count} picks`);
        });
        
    } catch (error) {
        console.error('Error fetching draft data:', error);
    }
}

// Run the function
get2025DraftPicks();
