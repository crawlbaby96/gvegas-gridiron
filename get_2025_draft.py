import requests
import csv
import json

# Your league ID from leagueInfo.js
LEAGUE_ID = "1185988161254850560"

def get_2025_draft_picks():
    try:
        print('Fetching 2025 draft data...')
        
        # First, get the league data to find the draft ID
        league_response = requests.get(f'https://api.sleeper.app/v1/league/{LEAGUE_ID}')
        league_data = league_response.json()
        
        if not league_data.get('draft_id'):
            print('No draft found for this league')
            return
        
        draft_id = league_data['draft_id']
        print(f'Found draft ID: {draft_id}')
        
        # Get the draft details
        draft_response = requests.get(f'https://api.sleeper.app/v1/draft/{draft_id}')
        draft_data = draft_response.json()
        
        # Get the draft picks
        picks_response = requests.get(f'https://api.sleeper.app/v1/draft/{draft_id}/picks')
        picks_data = picks_response.json()
        
        # Get player data for position information
        players_response = requests.get('https://api.sleeper.app/v1/players/nfl')
        players_data = players_response.json()
        
        print(f'Found {len(picks_data)} draft picks')
        
        # Process the picks
        processed_picks = []
        for pick in picks_data:
            player = players_data.get(pick.get('player_id', ''))
            pick_number = pick.get('pick_no', 0)
            round_num = pick.get('round', 0)
            position = player.get('position', 'Unknown') if player else 'Unknown'
            player_name = f"{player.get('first_name', '')} {player.get('last_name', '')}" if player else 'Unknown Player'
            team = player.get('team', 'FA') if player else 'FA'
            
            processed_picks.append({
                'pick_number': pick_number,
                'round': round_num,
                'position': position,
                'player_name': player_name.strip(),
                'team': team,
                'manager': pick.get('picked_by', 'Unknown')
            })
        
        # Sort by pick number
        processed_picks.sort(key=lambda x: x['pick_number'])
        
        # Write to CSV file
        with open('2025_draft_picks.csv', 'w', newline='', encoding='utf-8') as csvfile:
            fieldnames = ['pick_number', 'round', 'position', 'player_name', 'team', 'manager']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            
            writer.writeheader()
            for pick in processed_picks:
                writer.writerow(pick)
        
        print('\n=== 2025 DRAFT PICKS ===')
        print('Pick # | Round | Pos | Player Name | Team | Manager')
        print('--------|-------|-----|-------------|------|---------')
        
        for pick in processed_picks:
            print(f"{pick['pick_number']:6} | {pick['round']:5} | {pick['position']:3} | {pick['player_name']:20} | {pick['team']:3} | {pick['manager']}")
        
        print(f'\nData exported to "2025_draft_picks.csv"')
        print(f'Total picks: {len(processed_picks)}')
        
        # Summary by position
        position_counts = {}
        for pick in processed_picks:
            pos = pick['position']
            position_counts[pos] = position_counts.get(pos, 0) + 1
        
        print('\n=== POSITION BREAKDOWN ===')
        for pos, count in sorted(position_counts.items()):
            print(f'{pos}: {count} picks')
        
        # Summary by round
        round_counts = {}
        for pick in processed_picks:
            round_num = pick['round']
            round_counts[round_num] = round_counts.get(round_num, 0) + 1
        
        print('\n=== ROUND BREAKDOWN ===')
        for round_num in sorted(round_counts.keys()):
            print(f'Round {round_num}: {round_counts[round_num]} picks')
        
    except Exception as error:
        print(f'Error fetching draft data: {error}')

if __name__ == "__main__":
    get_2025_draft_picks()
