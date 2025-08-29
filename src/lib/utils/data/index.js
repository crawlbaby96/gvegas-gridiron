/**
 * Historical Data Index
 * 
 * Centralizes all historical data imports for easy access
 */

export { historicalAwards } from './historicalAwards.js';
export { historicalRecords } from './historicalRecords.js';
export { historicalStandings } from './historicalStandings.js';
export { 
    currentManagerIDs, 
    historicalNameMappings, 
    managerHistory,
    getManagerIDFromHistoricalName,
    getHistoricalTeamName 
} from './managerMapping.js';

// Combined data functions
export {
    getCombinedAwards,
    getCombinedRecords, 
    getCombinedStandings,
    getManagerAwardHistory,
    getLeagueTimeline
} from '../helperFunctions/combinedData.js';
