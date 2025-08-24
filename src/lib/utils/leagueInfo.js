/*   STEP 1   */
export const leagueID = "1059513476260966400"; // your league ID
export const leagueName = "Gvegas Gridiron"; // your league name
export const dues = 12; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

// HOME PAGE TEXT/
export const homepageText = `
  <p>Congratulations. You've made it to the official website of the Gvegas Gridiron Fantasy Football League - otherwise known as the greatest league in the history of the galaxy.</p>
  <p>The Gvegas Gridiron Fantasy Football League was founded in 2011 in beautiful Greenville, South Carolina, where the spirit of competition meets the charm of the Blue Ridge Mountains. What began as a local gathering of football enthusiasts quickly evolved into a premier league that has become a cornerstone of camaraderie, strategy, and gridiron glory. Since its inception, Gvegas Gridiron has been more than just a game—it’s been a tradition rooted in the vibrant culture of one of the Southeast’s most dynamic cities.</p>
  <p>At the helm of this league stands its most celebrated figure, legendary musician and songwriter Steve Eager, whose influence and passion have helped shape Gvegas into its official, enduring form. Known as much for his musical legacy as his love of Greenville, Eager’s involvement elevated the league into something far greater than a seasonal pastime. His leadership and vision brought a unique blend of artistry and intensity that gave Gvegas Gridiron its identity, and his presence continues to inspire every matchup played under its banner.</p>
  <p>Though more and more of our members hail from around the country, this great league is inseparable from its hometown, Greenville—a city where tradition and modernity coexist in perfect balance. With the Reedy River flowing through the heart of its emerging downtown, Greenville offers a backdrop as lively as the competition on the fantasy field. Surrounded by the natural beauty of the Blue Ridge Mountains and energized by a thriving community, the Gvegas Gridiron Fantasy Football League reflects the character of its city: bold, spirited, and always ready for the next challenge.</p>
  <p>It's a hard league to make, but a great league to be in. Welcome to the brotherhood. May you one day experience the rich joy that comes with being able to see your name on the famed Jeff Betz Memorial Trophy. </p>
  <p> </p>
  <p> </p>
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
      "name": "Ricky Nichols",
      "location": "Sterling, Kansas",
      "bio": "Children of the Corn",
      "photo": "/managers/everyone.png",
      "fantasyStart": "2011",
      "favoriteTeam": "ind",
      "mode": null,
      "rival": {
        name: "Brodie Pace",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": "1111",
      "valuePosition": "TE",
      "rookieOrVets": null,
      "philosophy": "Zero TE is the sensible strategy to win this league",
      "tradingScale": 6,
      "preferredContact": "Discord",
    },
    {
      "managerID": "448551108936200192",
      "name": "William Corbin, J.D.",
      "location": "Tigerville, South Carolina",
      "bio": "DPRK Corn Cob Kims",
      "photo": "/managers/everyone.png",
      "fantasyStart": "2013",
      "favoriteTeam": "car",
      "mode": null,
      "rival": {
        name: "Jon Egan",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": "7610",
      "valuePosition": "RB",
      "rookieOrVets": "Rookies",
      "philosophy": "Draft rookies win never",
      "tradingScale": 9,
      "preferredContact": "Phone",
    },
    {
      "managerID": "450350679567888384",
      "name": "jfigueroa17",
      "location": "Taylors, South Carolina",
      "bio": "THE GOLDEN REAPER - League Commissioner",
      "photo": "/managers/everyone.png",
      "fantasyStart": "2011",
      "favoriteTeam": "car",
      "mode": null,
      "rival": {
        name: "Chuck Pace",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": "954",
      "valuePosition": "QB",
      "rookieOrVets": "Vets",
      "philosophy": "Grim Reaper Bowl or Bust",
      "tradingScale": 6,
      "preferredContact": "Text",
    },
    {
      "managerID": "451533819841867776",
      "name": "Rory Hayes",
      "location": "Murfreesboro, Tennessee",
      "bio": "Rogue Broncos",
      "photo": "/managers/everyone.png",
      "fantasyStart": "2011",
      "favoriteTeam": "den",
      "mode": null,
      "rival": {
        name: "Jon Egan",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": "8162",
      "valuePosition": "LB",
      "rookieOrVets": "Vets",
      "philosophy": "DEFENDING CHAMP BABY",
      "tradingScale": 8,
      "preferredContact": "Text",
    },
    {
      "managerID": "471801039259955200",
      "name": "John A. Kurth",
      "location": "Washington, DC",
      "bio": "CocksOnTop",
      "photo": "/managers/everyone.png",
      "fantasyStart": "2016",
      "favoriteTeam": "gb",
      "mode": null,
      "rival": {
        name: "William Corbin",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": "1149",
      "valuePosition": "WR",
      "rookieOrVets": "rookies",
      "philosophy": "Win in every other league but this one",
      "tradingScale": 5,
      "preferredContact": "Phone",
    },
    {
      "managerID": "738166858095673344",
      "name": "Crawlbaby",
      "location": "Greer, South Carolina",
      "bio": "Monday Night Comeback - You already know bout me",
      "photo": "/managers/everyone.png",
      "fantasyStart": 2011,
      "favoriteTeam": "was",
      "mode": null,
      "rival": {
        name: "Rory Hayes",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": 69,
      "valuePosition": "WR",
      "rookieOrVets": "Rookies",
      "philosophy": "Win the draft, win the league",
      "tradingScale": 6,
      "preferredContact": "Sleeper",
    },
    {
      "managerID": "826875091739602944",
      "name": "DJ Farley",
      "location": "Minneapolis, Minnesota",
      "bio": "Big Mountain ✨BELIEF✨",
      "photo": "/managers/everyone.png",
      "fantasyStart": "2017",
      "favoriteTeam": "den",
      "mode": null,
      "rival": {
        name: "Noel Januszewski",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": "648",
      "valuePosition": "RB",
      "rookieOrVets": "Vets",
      "philosophy": "If you believe it, you can achieve it",
      "tradingScale": 8,
      "preferredContact": "Discord",
    },
    {
      "managerID": "826875538638512128",
      "name": "Jose Vera",
      "location": "Mauldin, South Carolina",
      "bio": "BillyBuck",
      "photo": "/managers/everyone.png",
      "fantasyStart": "2014",
      "favoriteTeam": "ne",
      "mode": null,
      "rival": {
        name: "Elliot Figueroa",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": 167,
      "valuePosition": "LB",
      "rookieOrVets": "Rookies",
      "philosophy": "Avoid the Toilet Bowl at all costs",
      "tradingScale": 4,
      "preferredContact": "Discord",
    },
    {
      "managerID": "826895872460685312",
      "name": "J. Luke Brooks",
      "location": "Birmingham, Alabama",
      "bio": "Maverick",
      "photo": "/managers/everyone.png",
      "fantasyStart": "2018",
      "favoriteTeam": "atl",
      "mode": null,
      "rival": {
        name: "Chuck Pace",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": "85",
      "valuePosition": "DE",
      "rookieOrVets": "Retired",
      "philosophy": "FAAB $ are the key to any investment portfolio",
      "tradingScale": 5,
      "preferredContact": "Text",
    },
    {
      "managerID": "826987993683304448",
      "name": "Noel Januszewski",
      "location": "Raleigh, North Carolina",
      "bio": "Bad News Babymamas",
      "photo": "/managers/everyone.png",
      "fantasyStart": "2020",
      "favoriteTeam": "ne",
      "mode": null,
      "rival": {
        name: "DJ Farley",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": "515",
      "valuePosition": "DB",
      "rookieOrVets": "Vets",
      "philosophy": "Jay is the way",
      "tradingScale": 4,
      "preferredContact": "Text",
    },
    {
      "managerID": "827057314363199488",
      "name": "Wes Gretkowski",
      "location": "Greenville, South Carolina",
      "bio": "Team Wesgret",
      "photo": "/managers/everyone.png",
      "fantasyStart": "2025",
      "favoriteTeam": "gb",
      "mode": null,
      "rival": {
        name: "Luke Brooks",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": 4017,
      "valuePosition": "RB",
      "rookieOrVets": "Rookies",
      "philosophy": "This team is made in the Name, Image, & Likeness of God",
      "tradingScale": 5,
      "preferredContact": "Text",
    },
    {
      "managerID": "827412517738393600",
      "name": "Elliot Figueroa",
      "location": "Greenville, South Carolina",
      "bio": "Dolphin Death",
      "photo": "/managers/everyone.png",
      "fantasyStart": "2011",
      "favoriteTeam": "mia",
      "mode": null,
      "rival": {
        name: "Jon Egan",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": 4046,
      "valuePosition": "QB",
      "rookieOrVets": "Vets",
      "philosophy": "Patty Mahomes in Rd 1 and everything else will fall into place",
      "tradingScale": 6,
      "preferredContact": "Text",
    },
    {
      "managerID": "959954145530691584",
      "name": "Breyno",
      "location": "Wilmington, North Carolina",
      "bio": "Toilet Bowl Bots 🚽",
      "photo": "/managers/everyone.png",
      "fantasyStart": "2023",
      "favoriteTeam": "car",
      "mode": null,
      "rival": {
        name: "Noel Januszewski",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": 5870,
      "valuePosition": "RB",
      "rookieOrVets": "Rookies",
      "philosophy": "If you ignore record, standings, and finish - you're probably third best in the league",
      "tradingScale": 5,
      "preferredContact": "Phone",
    },
    {
      "managerID": "1108533477386948608",
      "name": "Shawn Ghazanfari",
      "location": "Reading, Pennsylvania",
      "bio": "Iceman",
      "photo": "/managers/everyone.png",
      "fantasyStart": "2024",
      "favoriteTeam": "phi",
      "mode": null,
      "rival": {
        name: "Chuck Pace",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": "11533",
      "valuePosition": "K",
      "rookieOrVets": "Vets",
      "philosophy": "Kickers score more points than most skill position players in a season. Why shouldn't they be drafted higher than ADP?",
      "tradingScale": 5,
      "preferredContact": "Text",
    },   
    {
      "managerID": "826858882428141568",
      "name": "Jon Egan",
      "location": "Greenville, South Carolina",
      "bio": "Plaxico's Gun n Run",
      "photo": "/managers/everyone.png",
      "fantasyStart": "2013",
      "favoriteTeam": "gb",
      "mode": null,
      "rival": {
        name: "William Corbin",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": "4035",
      "valuePosition": "RB",
      "rookieOrVets": "Vets",
      "philosophy": "No season is complete without a little bit of black magic in trade negotiations.",
      "tradingScale": 10,
      "preferredContact": "Text",
    },   
    {
      "managerID": "826866295868891136",
      "name": "Chuck Pace",
      "location": "Greenville, South Carolina",
      "bio": "Philly Cheesesteaks",
      "photo": "/managers/everyone.png",
      "fantasyStart": "2021",
      "favoriteTeam": "phi",
      "mode": null,
      "rival": {
        name: "James Figueroa",
        link: null,
        image: "/managers/everyone.png",
      },
      "favoritePlayer": "4866",
      "valuePosition": "RB",
      "rookieOrVets": "Vets",
      "philosophy": "How did you all let Corbin win the league twice? Never again on my watch.",
      "tradingScale": 3,
      "preferredContact": "Carrier Pidgeon",
    }
  ]

// Hall of Fame entries
export const hallOfFame = [
    {
        id: 1,
        title: "The Golden Reaper's Dynasty",
        years: "2011-2015",
        image: "/managers/everyone.png", // You can replace with actual images
        description: "James Figueroa's legendary run as the inaugural champion, establishing himself as the league's first dynasty. His strategic brilliance and consistent performance set the standard for excellence in G-Vegas Gridiron.",
        category: "Championship",
        featuredPlayer: null, // Can reference a player ID from Sleeper API
        managerID: "450350679567888384", // James Figueroa's manager ID
        inductedYear: 2016
    },
    {
        id: 2,
        title: "The Comeback King",
        years: "2018",
        image: "/managers/everyone.png",
        description: "Crawlbaby's miraculous Monday Night Comeback victory that will forever be etched in league lore. Down by 40+ points going into Monday Night Football, he pulled off the greatest comeback in league history.",
        category: "Memorable Moment",
        featuredPlayer: 1102, // Crawlbaby's favorite player
        managerID: "738166858095673344", // Crawlbaby's manager ID
        inductedYear: 2019
    },
    {
        id: 3,
        title: "The Legal Eagle's Triumph",
        years: "2017, 2018",
        image: "/managers/everyone.png",
        description: "William Corbin's dual championship victories, proving that even the league's legal counsel can dominate on the gridiron. His analytical approach and strategic trading set him apart as one of the league's most respected managers.",
        category: "Championship",
        featuredPlayer: null,
        managerID: null, // Add William Corbin's manager ID if available
        inductedYear: 2018
    },
    {
        id: 4,
        title: "The Rookie Sensation",
        years: "2020",
        image: "/managers/everyone.png",
        description: "A rookie manager's incredible first season, defying all odds to reach the championship game. This Cinderella story proved that experience isn't everything in fantasy football.",
        category: "Rookie Achievement",
        featuredPlayer: null,
        managerID: null,
        inductedYear: 2021
    }
];

// Hall of Fame categories for filtering
export const hallOfFameCategories = [
    "All",
    "Championship",
    "Memorable Moment", 
    "Rookie Achievement",
    "Trade Mastery",
    "Draft Excellence",
    "Season Record",
    "Playoff Performance"
];

// T-Shirts data
export const tShirts = [
    {
        id: 1,
        year: 2024,
        title: "G-Vegas Gridiron 2024",
        image: "/t-shirts/2024-shirt.jpg",
        color: "Dark Grey/Charcoal",
        sayings: [
            {
                text: "HOOK'EM",
                story: "A classic Texas Longhorns reference that became a rallying cry in the league, possibly from a manager's college football allegiance or a memorable game.",
                author: "League Member"
            },
            {
                text: "CLEAR GLASS HOUSES",
                story: "A witty reference to the saying 'people in glass houses shouldn't throw stones' - likely used when someone criticized another manager's team or decisions.",
                author: "League Member"
            },
            {
                text: "I JUST LOVE TRADING",
                story: "A declaration of passion for the trading aspect of fantasy football, capturing the excitement and strategy involved in making deals.",
                author: "League Member"
            },
            {
                text: "POSITIVITY CZAR",
                story: "A nickname for someone who always maintains a positive attitude in the league, even during tough losses or bad weeks.",
                author: "League Member"
            },
            {
                text: "WE BELIEVE IN DJ!",
                story: "A show of support for a player named DJ, possibly during a crucial game or playoff situation where faith in the player paid off.",
                author: "League Member"
            },
            {
                text: "GOD GIVES HIS TOUGHEST BATTLES TO HIS STRONGEST SOLDIERS",
                story: "A motivational quote that became relevant during a particularly challenging season or playoff run, inspiring perseverance.",
                author: "League Member"
            },
            {
                text: "$85 ALLEN LAZARD",
                story: "A reference to a specific auction bid or trade involving Allen Lazard, likely a memorable moment in the draft or a trade that became legendary.",
                author: "League Member"
            },
            {
                text: "I REALLY LIKE ICEMAN'S DRAFT",
                story: "A compliment to Iceman's draft strategy, acknowledging his skill in building a competitive roster through the draft process.",
                author: "League Member"
            },
            {
                text: "BETTER TO BE LUCKY THAN GOOD",
                story: "A classic fantasy football philosophy that acknowledges the role of luck in the game, often used when someone wins despite questionable decisions.",
                author: "League Member"
            },
            {
                text: "COMEDY CLUB - DONTTAKEKINDLY",
                story: "A special mention for donttakekindly, possibly for their sense of humor or memorable one-liners that kept the league entertained throughout the season.",
                author: "donttakekindly"
            }
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 2,
        year: 2023,
        title: "G-Vegas Gridiron 2023",
        image: "/t-shirts/2023-shirt.jpg",
        color: "Light Grey/Blue",
        sayings: [
            {
                text: "CHAT IS DEAD... THANKS CORBIN!",
                story: "A memorable moment when the league chat went silent, allegedly due to Corbin's actions. This became an instant classic saying that perfectly captures the league's sense of humor.",
                author: "League Chat"
            },
            {
                text: "MY TEAM SOCKS!",
                story: "A declaration of team pride that became a rallying cry for managers throughout the season. The enthusiasm behind this simple phrase made it unforgettable.",
                author: "League Member"
            },
            {
                text: "FRIDAY'S ARE NOT GOOD FOR ME",
                story: "A relatable sentiment that resonated with many league members, especially during the busy work week leading up to Sunday football.",
                author: "League Member"
            },
            {
                text: "HATE THAT GUY",
                story: "A universal feeling in fantasy football when a rival manager makes a great move or gets lucky. This simple phrase captured the competitive spirit of the league.",
                author: "League Member"
            },
            {
                text: "I LOVE GREENVILLE, SOUTH CAROLINA",
                story: "A random declaration of love for Greenville that became an inside joke in the league. The story behind this one remains a mystery.",
                author: "League Member"
            },
            {
                text: "CHURCHED AND UNCHURCHED POWER RANKINGS",
                story: "A humorous take on power rankings that divided teams into 'churched' and 'unchurched' categories, adding a unique twist to weekly rankings.",
                author: "League Commissioner"
            },
            {
                text: "THE LAW OFFICES OF WILLIAM D CORBIN",
                story: "William Corbin's official title that became a running joke in the league, especially during trade negotiations and rule discussions.",
                author: "William Corbin"
            },
            {
                text: "SUNDEEP AND COOPER ARE HERE!",
                story: "A celebration of league members who made an appearance, becoming a memorable moment that was immortalized on the shirt.",
                author: "League Member"
            },
            {
                text: "DUKE 28 CLEMSON 7",
                story: "A college football score that became significant in the league, possibly related to a bet or a memorable game that affected fantasy outcomes.",
                author: "College Football"
            },
            {
                text: "NOEL JANUSZEWSKI GOES 14-1",
                story: "Noel's incredible regular season record that earned him recognition on the league shirt. A dominant performance that couldn't be ignored.",
                author: "Noel Januszewski"
            },
            {
                text: "SD GIRL AND HER CHRISTMAS GIFTS",
                story: "A memorable story involving Christmas gifts that became a league legend. The details remain part of league lore.",
                author: "SD Girl"
            },
            {
                text: "BEST.WEEKEND.EVER.",
                story: "A declaration that captured the feeling of an amazing league weekend, possibly during the draft or a particularly exciting week of games.",
                author: "League Member"
            },
            {
                text: "GVEGAS GOT TALENT: BILLY BUCK - BACK TO BACK CHAMP",
                story: "Billy Buck's incredible achievement of winning back-to-back championships, earning him a special mention on the league shirt and solidifying his place in league history.",
                author: "Billy Buck"
            }
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        id: 3,
        year: 2022,
        title: "G-Vegas Gridiron 2022",
        image: "/managers/everyone.png",
        color: "Charcoal Gray",
        sayings: [
            {
                text: "Maverick",
                story: "Rookbuke's simple but effective nickname that perfectly describes his independent approach to fantasy football.",
                author: "Rookbuke"
            },
            {
                text: "Bad News Babymamas",
                story: "njanuszewski's team name that became one of the most talked-about in league history. The story involves a draft day incident that's now legendary.",
                author: "njanuszewski"
            },
            {
                text: "DTK",
                story: "donttakekindly's abbreviated team name that stands for 'Don't Take Kindly' - his philosophy on trade negotiations.",
                author: "donttakekindly"
            }
        ],
        description: "The 2022 shirt featuring some of the most memorable team names and catchphrases from that season."
    },
    {
        id: 4,
        year: 2021,
        title: "G-Vegas Gridiron 2021",
        image: "/managers/everyone.png",
        color: "Burgundy Red",
        sayings: [
            {
                text: "Dolphin Death",
                story: "figo88's team name that became a running joke throughout the season, especially during Dolphins games.",
                author: "figo88"
            },
            {
                text: "Toilet Bowl Bots 🚽",
                story: "Breyno's self-deprecating team name that became a badge of honor for teams fighting to avoid the toilet bowl.",
                author: "Breyno"
            },
            {
                text: "Iceman",
                story: "iceman2000af's cool nickname that perfectly describes his calm demeanor during high-pressure fantasy situations.",
                author: "iceman2000af"
            }
        ],
        description: "The 2021 edition featuring the league's growing collection of memorable team names and player nicknames."
    }
];
  
  
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
    
