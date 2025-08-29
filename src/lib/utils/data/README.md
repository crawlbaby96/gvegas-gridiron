# Historical Data Integration Guide

This directory contains the hybrid data layer for integrating pre-Sleeper historical data with your current Sleeper API data.

## 📁 File Structure

```
src/lib/utils/data/
├── README.md              # This file
├── index.js              # Centralized exports
├── historicalAwards.js   # Champions, runners-up, division winners (2011-2021)
├── historicalRecords.js  # Scoring records, season stats (2011-2021)
├── historicalStandings.js # Final standings by year (2011-2021)
├── managerMapping.js     # Maps old names to current manager IDs
└── ../helperFunctions/
    └── combinedData.js   # Functions that merge historical + Sleeper data
```

## 🚀 Quick Start

### Step 1: Fill in Historical Data
1. **Start with `historicalAwards.js`** - Add champions and runners-up for each year
2. **Update `managerMapping.js`** - Map any old team names to current manager IDs
3. **Add `historicalRecords.js`** - Include high scoring games and season totals
4. **Complete `historicalStandings.js`** - Full standings if available

### Step 2: Get Current Manager IDs
From your `leagueInfo.js`, find the `managerID` for each current manager:
```javascript
// Example: Ricky Nichols
{
  "managerID": "419350278400126976",
  "name": "Ricky Nichols",
  // ...
}
```

### Step 3: Update Your Data Functions
Replace these function calls in your components:
```javascript
// OLD
import { getAwards } from '$lib/utils/helper';
import { getLeagueRecords } from '$lib/utils/helper';

// NEW  
import { getCombinedAwards, getCombinedRecords } from '$lib/utils/data';
```

## 📊 Data Priority

### 🔥 HIGH PRIORITY (Start Here)
- **Champions by year** - Shows on awards pages
- **Division winners** - If your league had divisions  
- **Manager ID mapping** - Critical for linking historical to current

### 🟡 MEDIUM PRIORITY  
- **Season point totals** - For all-time records
- **High scoring weeks** - For weekly records
- **Final standings** - For win-loss records

### 🟢 LOW PRIORITY (Nice to Have)
- **Weekly records within seasons**
- **Biggest blowouts and closest games**
- **Trading history or other fun stats**

## 🔍 Where to Find Historical Data

### ESPN/Yahoo League Pages
- Check if old league pages are still accessible
- Look for archived standings and results

### Social Media & Messages
- Facebook posts about championships
- Group chat history with results
- Draft day photos with previous year results

### Personal Records
- Spreadsheets or notes you might have kept
- Screenshots of final standings
- Trophy photos or commissioner announcements

## 🛠️ Implementation Steps

### Phase 1: Awards Integration (Start Here)
1. Fill in `historicalAwards.js` with championship data
2. Update awards components to use `getCombinedAwards()`
3. Test that historical champions show up on manager profiles

### Phase 2: Records Integration
1. Add high scoring weeks to `historicalRecords.js`
2. Update records components to use `getCombinedRecords()`
3. Verify all-time records include historical data

### Phase 3: Complete History
1. Add full standings to `historicalStandings.js`
2. Create league timeline/history page
3. Add any remaining fun facts or records

## 📝 Data Template Examples

### Champion Entry
```javascript
{
    year: 2015,
    champion: "419350278400126976", // Ricky Nichols
    second: "425027598158143488",   // Christopher Rawlings  
    third: "463827436154298368",    // Brad Reynolds
    divisions: [] // Or add division winners if applicable
}
```

### High Score Entry
```javascript
{
    year: 2018,
    week: 5,
    managerID: "419350278400126976",
    teamName: "Children of the Corn",
    points: 165.5,
    rosterID: "419350278400126976"
}
```

## 🚨 Important Notes

### Manager ID Consistency
- Always use current manager IDs from `leagueInfo.js`
- Use `managerMapping.js` for old team names
- Double-check IDs to ensure awards appear on correct profiles

### Data Validation
- Test with one year of data first
- Verify awards show up on manager cards and individual pages
- Check that records appear in all-time lists

### Incremental Updates
- You can add data gradually over time
- Start with what you remember clearly
- Add more as you find old records

## 🔧 Troubleshooting

### Awards Not Showing Up
- Check manager IDs in `historicalAwards.js` match `leagueInfo.js`
- Verify you're using `getCombinedAwards()` instead of `getAwards()`
- Look for console errors in browser dev tools

### Records Missing
- Ensure data format matches examples in templates
- Check that `getCombinedRecords()` is being used
- Verify historical data structure is correct

### Performance Issues
- Historical data loads instantly (it's static)
- If slow, the issue is likely with Sleeper API calls
- Consider caching combined results

## 🎯 Success Metrics

You'll know it's working when:
- ✅ Historical champions appear on manager award summaries
- ✅ All-time scoring records include pre-Sleeper years  
- ✅ League timeline shows complete history
- ✅ Manager profiles show full career achievements

## 🤝 Getting Help

If you run into issues:
1. Check browser console for errors
2. Verify data format matches templates
3. Test with minimal data first
4. Ask league members for missing historical info

Remember: Even partial historical data is better than none! Start with what you know and build from there.
