/*   STEP 1   */
export const leagueID = "1059513476260966400"; // your league ID
export const leagueName = "Gvegas Gridiron"; // your league name
export const dues = 10; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

// HOME PAGE TEXT/
export const homepageText = `
  <p>G-Vegas Gridiron established in xxx year by our corrupt comish James Figo aka the Golden Reaper</p>
  <p>Chuckles has somehow won twice.</p>
  <p>So has our in house legal counsel william corncob corbin</p>
  <p>We have epic draft weekends. .</p>
  <p>TEST OF AUTOMATIC DEPLOYMENT</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
`;

// /Manager Info/
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

// Names are sleeper names, but we can change to actual names or other nicknames

export const managers = [
    {
      "managerID": "419350278400126976",
      "name": "PaidByRicky",
      "location": null,
      "bio": "Children of the Corn",
      "photo": "/managers/everyone.png",
      "fantasyStart": null,
      "favoriteTeam": "ind",
      "mode": "Win Now",
      "rival": {
        name: "Corbin",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": null,
      "valuePosition": null,
      "rookieOrVets": null,
      "philosophy": null,
      "tradingScale": 5,
      "preferredContact": "Carrier Pigeon",
    },
    {
      "managerID": "448551108936200192",
      "name": "tygers",
      "location": null,
      "bio": "DPRK Corn Cob Kims",
      "photo": "/managers/everyone.png",
      "fantasyStart": null,
      "favoriteTeam": "car",
      "mode": "Draft rookies win never",
      "rival": {
        name: "All of them",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": null,
      "valuePosition": null,
      "rookieOrVets": null,
      "philosophy": null,
      "tradingScale": 5,
      "preferredContact": "Carrier Pigeon",
    },
    {
      "managerID": "450350679567888384",
      "name": "jfigueroa17",
      "location": null,
      "bio": "THE GOLDEN REAPER - League Commissioner",
      "photo": "/managers/everyone.png",
      "fantasyStart": null,
      "favoriteTeam": "car",
      "mode": "Win Now",
      "rival": {
        name: "All of them",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": null,
      "valuePosition": null,
      "rookieOrVets": null,
      "philosophy": null,
      "tradingScale": 5,
      "preferredContact": "Carrier Pigeon",
    },
    {
      "managerID": "451533819841867776",
      "name": "Stuuterbutter28",
      "location": null,
      "bio": "Rogue Broncos",
      "photo": "/managers/everyone.png",
      "fantasyStart": null,
      "favoriteTeam": null,
      "mode": "Win Now",
      "rival": {
        name: "All of them",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": null,
      "valuePosition": null,
      "rookieOrVets": null,
      "philosophy": null,
      "tradingScale": 5,
      "preferredContact": "Carrier Pigeon",
    },
    {
      "managerID": "471801039259955200",
      "name": "jkurthjkurth",
      "location": null,
      "bio": "CocksOnTop",
      "photo": "/managers/everyone.png",
      "fantasyStart": null,
      "favoriteTeam": null,
      "mode": "Win Now",
      "rival": {
        name: "All of them",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": null,
      "valuePosition": null,
      "rookieOrVets": null,
      "philosophy": null,
      "tradingScale": 5,
      "preferredContact": "Carrier Pigeon",
    },
    {
      "managerID": "738166858095673344",
      "name": "Crawlbaby",
      "location": "G-Vegas",
      "bio": "Monday Night Comeback - You already know bout me",
      "photo": "/managers/everyone.png",
      "fantasyStart": 2005,
      "favoriteTeam": "was",
      "mode": "Win Now",
      "rival": {
        name: "All of them",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": 1102,
      "valuePosition": "WR",
      "rookieOrVets": "Rookies",
      "philosophy": "Win the draft win the league",
      "tradingScale": 5,
      "preferredContact": "Carrier Pigeon",
    },
    {
      "managerID": "826875091739602944",
      "name": "Big Mountain ✨BELIEF✨",
      "location": null,
      "bio": "Big Mountain ✨BELIEF✨",
      "photo": "/managers/everyone.png",
      "fantasyStart": null,
      "favoriteTeam": null,
      "mode": "Win Now",
      "rival": {
        name: "All of them",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": null,
      "valuePosition": null,
      "rookieOrVets": null,
      "philosophy": null,
      "tradingScale": 5,
      "preferredContact": "Carrier Pigeon",
    },
    {
      "managerID": "826875538638512128",
      "name": "BillyBuck",
      "location": null,
      "bio": "BillyBuck",
      "photo": "/managers/everyone.png",
      "fantasyStart": null,
      "favoriteTeam": null,
      "mode": "Win Now",
      "rival": {
        name: "All of them",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": null,
      "valuePosition": null,
      "rookieOrVets": null,
      "philosophy": null,
      "tradingScale": 5,
      "preferredContact": "Carrier Pigeon",
    },
    {
      "managerID": "826895872460685312",
      "name": "Rookbuke",
      "location": null,
      "bio": "Maverick",
      "photo": "/managers/everyone.png",
      "fantasyStart": null,
      "favoriteTeam": null,
      "mode": "Win Now",
      "rival": {
        name: "All of them",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": null,
      "valuePosition": null,
      "rookieOrVets": null,
      "philosophy": null,
      "tradingScale": 5,
      "preferredContact": "Carrier Pigeon",
    },
    {
      "managerID": "826987993683304448",
      "name": "njanuszewski",
      "location": null,
      "bio": "Bad News Babymamas",
      "photo": "/managers/everyone.png",
      "fantasyStart": null,
      "favoriteTeam": null,
      "mode": "Win Now",
      "rival": {
        name: "All of them",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": null,
      "valuePosition": null,
      "rookieOrVets": null,
      "philosophy": null,
      "tradingScale": 5,
      "preferredContact": "Carrier Pigeon",
    },
    {
      "managerID": "827057314363199488",
      "name": "donttakekindly",
      "location": null,
      "bio": "DTK",
      "photo": "/managers/everyone.png",
      "fantasyStart": null,
      "favoriteTeam": null,
      "mode": "Win Now",
      "rival": {
        name: "All of them",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": null,
      "valuePosition": null,
      "rookieOrVets": null,
      "philosophy": null,
      "tradingScale": 5,
      "preferredContact": "Carrier Pigeon",
    },
    {
      "managerID": "827412517738393600",
      "name": "figo88",
      "location": null,
      "bio": "Dolphin Death",
      "photo": "/managers/everyone.png",
      "fantasyStart": null,
      "favoriteTeam": null,
      "mode": "Win Now",
      "rival": {
        name: "All of them",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": null,
      "valuePosition": null,
      "rookieOrVets": null,
      "philosophy": null,
      "tradingScale": 5,
      "preferredContact": "Carrier Pigeon",
    },
    {
      "managerID": "959954145530691584",
      "name": "Breyno",
      "location": null,
      "bio": "Toilet Bowl Bots 🚽",
      "photo": "/managers/everyone.png",
      "fantasyStart": null,
      "favoriteTeam": null,
      "mode": "Win Now",
      "rival": {
        name: "All of them",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": null,
      "valuePosition": null,
      "rookieOrVets": null,
      "philosophy": null,
      "tradingScale": 5,
      "preferredContact": "Carrier Pigeon",
    },
    {
      "managerID": "1108533477386948608",
      "name": "iceman2000af",
      "location": null,
      "bio": "Iceman",
      "photo": "/managers/everyone.png",
      "fantasyStart": null,
      "favoriteTeam": null,
      "mode": "Win Now",
      "rival": {
        name: "All of them",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": null,
      "valuePosition": null,
      "rookieOrVets": null,
      "philosophy": null,
      "tradingScale": 5,
      "preferredContact": "Carrier Pigeon",
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
