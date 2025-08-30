/*   STEP 1   */
export const leagueID = "1059513476260966400"; // your league ID
export const leagueName = "Gvegas Gridiron"; // your league name
export const dues = 12; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

// HOME PAGE TEXT/
export const homepageText = `
  <p>Congratulations. You've made it to the official website of the Gvegas Gridiron Fantasy Football League - otherwise known as the greatest league in the history of the galaxy.</p>
  <p>The Gvegas Gridiron Fantasy Football League was founded in 2011 in beautiful Greenville, South Carolina, where the spirit of competition meets the charm of the American South. What began as a local gathering of football enthusiasts quickly evolved into a premier league that has become a cornerstone of camaraderie, strategy, and gridiron glory. Since its inception, Gvegas Gridiron has been more than just a game—it’s been a tradition rooted in the vibrant culture of one of the Southeast’s most dynamic cities.</p>
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
      "bio": "In the fields of fantasy football, they harvest wins but hunger for the ultimate prize...The Legend Begins Since the league's very first season, the Children of the Corn, formally La Furia Roja, have been a force to be reckoned with. As one of the founding franchises, this team has deep roots in our league's history and has consistently proven that experience breeds excellence. Through seasons of triumph and heartbreak, the Children have remained a perennial threat. The Sabbatical Years (2015-2021) Like the mysterious disappearance of the Roanoke Colony of 1590, the Children of the Corn vanished from our league without a trace. During this hiatus, legends grew about their inevitable return. Would they ever return to claim their rightful spot atop the league? Return of the Corn The Children of the Corn returned with a vengeance, quickly establishing themselves once again as one of the league's most successful franchises. Boasting one of the best overall records in 2022, they've proven that true fantasy football prowess never truly fades. Their tactical acumen and roster management skills have consistently put them in contention year after year. So Close, Yet So Far Despite their impressive regular season success, the ultimate prize—a league championship—remains tantalizingly out of reach. Like a crop just beyond harvest, that title continues to elude them. But champions aren't made by giving up; they're forged through persistence and determination. Last Season's Promise The 2024-25 season saw the Children make their deepest playoff run since their return, reminding everyone why they're considered championship contenders. That momentum isn't just a memory—it's fuel for the fire that burns within this franchise. 2025: The Year of Reckoning This season, the Children return with renewed purpose. Armed with years of experience, one of the league's best historical records, and the hunger that comes from being so close to glory, they're ready to finally harvest their championship. The fields have been planted, new strategies sown; the time for reaping is at hand.",
      "photo": "/managers/ricky-avatar.png",
      "fantasyStart": "2011",
      "council": true,
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
      "photo": "/managers/corbin-avatar.png",
      "fantasyStart": "2013",
      "favoriteTeam": "car",
      "mode": null,
      "rival": {
        name: "Jon Egan",
        link: null,
        image: "/managers/jon-avatar.png",
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
      "name": "James Figueroa",
      "location": "Taylors, South Carolina",
      "bio": "As the founder and commissioner of this great league, I have been able to witness so many wonderful moments, formed friendships, and created life long memories through being a part of Gvegas. Whether it's singing the Greenville anthem, seeing Jon hose Corbin in a trade, or watching Hollywood Brown pull my team from a 1% chance of victory on Monday night football against Sean - you just never know what each season will bring. I am very blessed to be able to play a part in all this and am always eager to see my team chase the championship until I inevitably lose in week 1 and fall back down to reality. This year will be different though, probably.",
      "photo": "/managers/james-avatar.png",
      "fantasyStart": "2011",
      "council": true,
      "favoriteTeam": "car",
      "mode": null,
      "rival": {
        name: "Chuck Pace",
        link: null,
        image: "/managers/chuck-avatar-2.png",
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
      "photo": "/managers/rory-avatar.png",
      "fantasyStart": "2011",
      "favoriteTeam": "den",
      "mode": null,
      "rival": {
        name: "Jon Egan",
        link: null,
        image: "/managers/jon-avatar.png",
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
      "photo": "/managers/john-avatar.png",
      "fantasyStart": "2016",
      "favoriteTeam": "gb",
      "mode": null,
      "rival": {
        name: "William Corbin",
        link: null,
        image: "/managers/corbin-avatar.png",
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
      "name": "Chris Rawlings",
      "location": "Greer, South Carolina",
      "bio": "As a founding member of the league, my journey has been nothing short of legendary—for all the wrong reasons. After a stretch of brutal seasons, I was actually kicked out, only to make a triumphant return, battle-tested and ready to rock. I may hold the league record for most losses (with the 3rd most games played to prove it), but hey, resilience is my true stat. Along the way, I've managed to snag two division titles and a 3rd-place finish, proving I can still swing with the best of them. My team name history tells the saga best: starting as Team Rawlings, then evolving through the RGIII era—RGIII is a Boss → RGIII is Mediocre → RGIII = Practice Squad—before spiraling into YOU LIKE THAT? YOU LIKE THAT?, I'm in a Kirkfuffle, Monday Night Comeback, a brief detour to 13 Waffles, and finally back to Monday Night Comeback. Speaking of waffles—when the league dished out the infamous Waffle House punishment, I put up a performance for the ages: 13 waffles in 11 hours. It wasn't pretty, but it was gritty. Now, with all that history behind me and my first championship still looming, I'm hungrier than ever—this time for a trophy, not waffles.",
      "photo": "/managers/chris-avatar.png",
      "fantasyStart": 2011,
      "council": true,
      "favoriteTeam": "was",
      "mode": null,
      "rival": {
        name: "Rory Hayes",
        link: null,
        image: "/managers/rory-avatar.png",
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
      "bio": "I’m born and raised Raleigh, NC and am a deeply committed, sometimes delusional, Hurricanes, Broncos, Red Sox, Hornets, Chelsea fan. I have happily been in The GVegas Gridiron for 6-7 years now. From my time being dorm mates with James at Liberty to my current home in Minnesota working for the U of M Golden Gophers, Gvegas has been my deepest and most passionate fantasy football commitment. From two toilet bowl finalist wins to championship runner up and everything in between, I hope to add on to my list of thrills, good times, and exciting games in this league this year in pursuit of the top of the Gvegas mountain.",
      "photo": "/managers/dj-avatar.png",
      "fantasyStart": "2017",
      "favoriteTeam": "den",
      "mode": null,
      "rival": {
        name: "Noel Januszewski",
        link: null,
        image: "/managers/noel-avatar.png",
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
      "bio": "Some of the best moments start off at the beginning with the trade that started my legacy. Ndamukong Suh for Demarco Murray.  I learned a lot after this trade. Then in 2015 or 2016, I had an all-star squad in rookie Saquon Barkley, DeAndre Hopkins, (Odell Beckham junior, and even Rob Gronkowski. Courtesy of John arndt). leading the helm was 35  year Carson \"the oldie but goldie\" palmer. In this amazing roster. I lose in the playoffs to motor City kitty! 🐈 I must have let a black cat walk right in front of me because I unfortunately lost to a lot of people 2nd string players despite all my player setting record high points. I believe I scored over 300 pts and still lost. What a year though!",
      "photo": "/managers/jose-avatar.png",
      "fantasyStart": "2014",
      "favoriteTeam": "ne",
      "mode": null,
      "rival": {
        name: "Elliot Figueroa",
        link: null,
        image: "/managers/elliot-avatar.png",
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
      "bio": "Luke “Maverick” Brooks is a man of many talents, and he is average at every single one of those talents. He once took a top 3 drafted fantasy team and drove them into the bottom 4 where he had to fight for his life to survive this league and also his marriage. When he isn’t making his clients even wealthier, he is praying and fasting, RISE(ing) and running, and spending time with his wife, son, and soon to arrive daughter. If your team comes in the way of Maverick’s success, he’ll just tell you to, “Shut the hell up!”",
      "photo": "/managers/luke-avatar.png",
      "fantasyStart": "2018",
      "favoriteTeam": "atl",
      "mode": null,
      "rival": {
        name: "Chuck Pace",
        link: null,
        image: "/managers/chuck-avatar-2.png",
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
      "bio": "Noel “girl next door not babymama” Januszewski - Manager of THE bad news babymamas. Multi-year gvegas gridiron vet, youngest member at the old age of 25. The definition of mediocrity, never worse than 9th, never better than 4th. Ortho PT off the field but my players can’t stay on the field. William Corbin will forever live in my nightmares.",
      "photo": "/managers/noel-avatar.png",
      "fantasyStart": "2020",
      "favoriteTeam": "ne",
      "mode": null,
      "rival": {
        name: "Brad Reynolds",
        link: null,
        image: "/managers/brad-avatar.png",
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
      "bio": "The new guy.",
      "photo": "/managers/wes-avatar.png",
      "fantasyStart": "2025",
      "favoriteTeam": "gb",
      "mode": null,
      "rival": {
        name: "Luke Brooks",
        link: null,
        image: "/managers/luke-avatar.png",
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
      "photo": "/managers/elliot-avatar.png",
      "fantasyStart": "2011",
      "favoriteTeam": "mia",
      "mode": null,
      "rival": {
        name: "Jon Egan",
        link: null,
        image: "/managers/jon-avatar.png",
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
      "name": "Brad Reynolds",
      "location": "Wilmington, North Carolina",
      "bio": "Toilet Bowl Bots 🚽",
      "photo": "/managers/brad-avatar.png",
      "fantasyStart": "2023",
      "council": true,
      "favoriteTeam": "car",
      "mode": null,
      "rival": {
        name: "Noel Januszewski",
        link: null,
        image: "/managers/noel-avatar.png",
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
      "photo": "/managers/Shawn-Avatar.png",
      "fantasyStart": "2024",
      "favoriteTeam": "phi",
      "mode": null,
      "rival": {
        name: "Chuck Pace",
        link: null,
        image: "/managers/chuck-avatar-2.png",
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
      "bio": "PMy most memorable moment would definitely be the championship game against Elliot. Najee Harris ripping off a 40+yard TD run in the last couple minutes of the game giving me the W after I had said “good game Elliot” put my phone down and turned over in bed. I decided to check my phone 1 last time and saw what Najee had done. ",
      "photo": "/managers/jon-avatar.png",
      "fantasyStart": "2013",
      "council": true,
      "favoriteTeam": "gb",
      "mode": null,
      "rival": {
        name: "William Corbin",
        link: null,
        image: "/managers/corbin-avatar.png",
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
      "bio": "I am PhillyCheeseSteaks…became a member of the greatest league in sports in 2021.  I have won two back to back championships in 22,23 and become an elite member with the likes of Corbin, Timbo and schwaughn.  Always striving to do better, I now have Big Brad Brad in my sights, 3rd best scorer in the league.  Looking forward to the future and more wins to come!",
      "photo": "/managers/chuck-avatar-2.png",
      "fantasyStart": "2021",
      "favoriteTeam": "phi",
      "mode": null,
      "rival": {
        name: "James Figueroa",
        link: null,
        image: "/managers/james-avatar.png",
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
        image: "/managers/james-avatar.png", // You can replace with actual images
        description: "James Figueroa's legendary run as the inaugural champion, establishing himself as the league's first dynasty. His strategic brilliance and consistent performance set the standard for excellence in G-Vegas Gridiron.",
        category: "Championship",
        featuredPlayer: null, // Can reference a player ID from Sleeper API
        managerID: "450350679567888384", // James Figueroa's manager ID
        inductedYear: 2025
    },
    {
        id: 2,
        title: "The Comeback King",
        years: "2018",
        image: "/managers/chris-avatar.png",
        description: "Crawlbaby's miraculous Monday Night Comeback victory that will forever be etched in league lore. Down by 40+ points going into Monday Night Football, he pulled off the greatest comeback in league history.",
        category: "Memorable Moment",
        featuredPlayer: 1102, // Crawlbaby's favorite player
        managerID: "738166858095673344", // Crawlbaby's manager ID
        inductedYear: 2025
    },
    {
        id: 3,
        title: "The Legal Eagle's Triumph",
        years: "2017, 2018",
        image: "/managers/corbin-avatar.png",
        description: "William Corbin's dual championship victories, proving that even the league's legal counsel can dominate on the gridiron. His analytical approach and strategic trading set him apart as one of the league's most respected managers.",
        category: "Championship",
        featuredPlayer: null,
        managerID: null, // Add William Corbin's manager ID if available
        inductedYear: 2025
    },
    {
        id: 4,
        title: "Steve Eager Opens 2023 Draft",
        years: "2023",
        image: "/t-shirts/steve-eager-draft.png",
        description: "Steve was kind enough to record a legendary video to kick off the 2023 fantasy draft and cemented himself as a Gvegas legend.",
        category: "Memorable Moment",
        featuredPlayer: null,
        managerID: null,
        inductedYear: 2025
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
                story: "A reference to a specific auction bid involving Allen Lazard, likely a memorable moment in the draft or a trade that became legendary.",
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
        image: "/t-shirts/2022-shirt.jpg",
        color: "Charcoal Gray",
        sayings: [
            {
                text: "LEAGUE WINNER: PHILLYCHEESESTEAKS",
                story: "Chuck Pace's championship victory in 2022, earning him the title of league winner and a place on the shirt.",
                author: "Chuck Pace"
            },
            {
                text: "THEY LANCE 'EM, I LAMINATE 'EM",
                story: "A memorable quote that became a league catchphrase, possibly related to a specific game or player performance.",
                author: "League Member"
            },
            {
                text: "BLAH BLAH BLAH... DIDN'T BEFORE... MEAT",
                story: "A humorous quote that captured the league's attention, likely from a draft or trade discussion.",
                author: "League Member"
            },
            {
                text: "KUZMA'S KORNER",
                story: "A reference to a specific area or strategy, possibly named after a player or manager.",
                author: "League Member"
            },
            {
                text: "\"I REALLY LIKE WHERE MY TEAM IS AT\"",
                story: "A confident declaration about team status that became memorable in league lore.",
                author: "League Member"
            },
            {
                text: "WHO IS CARLOS?",
                story: "A mysterious question that became an inside joke in the league, possibly about an unknown player or person.",
                author: "League Member"
            },
            {
                text: "DON'T GIVE UP!",
                story: "A motivational message that resonated with league members during challenging times.",
                author: "League Member"
            },
            {
                text: "SHOULDN'T HAVE TRADED KELCE",
                story: "A regretful statement about trading Travis Kelce, highlighting the importance of keeping star players.",
                author: "League Member"
            },
            {
                text: "KING OF THE PREMIER",
                story: "A title given to someone who dominated the premier league or division.",
                author: "League Member"
            },
            {
                text: "LAST PLACE BOWL",
                story: "The annual competition for teams at the bottom of the standings, a league tradition.",
                author: "League Tradition"
            },
            {
                text: "LARRY'S SHERIFFS CLOWNS FAN",
                story: "A reference to Larry's team name and his fandom, becoming a memorable league moment.",
                author: "Larry"
            },
            {
                text: "GREAT JOB, BROOK",
                story: "A compliment to Brook for an impressive performance or achievement.",
                author: "League Member"
            },
            {
                text: "MIKE BOONE",
                story: "A player reference that became significant, possibly due to a key performance or trade.",
                author: "League Member"
            },
            {
                text: "THIS LEAGUE WAS THE BRIGHT LIGHT WHEN THINGS GOT DARK AND GLOOMY",
                story: "A touching sentiment about how the league provided joy and community during difficult times.",
                author: "League Member"
            },
            {
                text: "RIDE",
                story: "A simple but powerful word that became a rallying cry for the league.",
                author: "League Member"
            },
            {
                text: "SCHWARZENEGGER TATE: BILLY BUCK",
                story: "A nickname for Billy Buck that combined Arnold Schwarzenegger with a player name, becoming legendary.",
                author: "Billy Buck"
            }
        ],
        description: "The 2022 shirt featuring Chuck Pace's championship victory and the most memorable sayings and moments from that season."
    },
    {
        id: 4,
        year: 2021,
        title: "G-Vegas Gridiron 2021",
        image: "/t-shirts/2021-shirt.jpg",
        color: "Burgundy Red",
        sayings: [
            {
                text: "LEAGUE WINNER - PLAXICO'S GUN-N-RUN",
                story: "Jon Egan's championship victory in 2021 with his team 'Plaxico's Gun n Run', earning him the league title.",
                author: "Jon Egan"
            },
            {
                text: "RORY GOT MIXXED",
                story: "A memorable moment involving Rory Hayes that became an instant classic in league lore.",
                author: "Rory Hayes"
            },
            {
                text: "BRODIE'S SUNROOF",
                story: "A reference to Brodie's car or a memorable incident involving a sunroof that became legendary.",
                author: "Brodie"
            },
            {
                text: "KICKERGATE",
                story: "A controversy or memorable moment involving kickers that became known as 'Kickergate'.",
                author: "League Scandal"
            },
            {
                text: "LINEUPGATE",
                story: "Another league controversy, this time involving lineup decisions that caused drama.",
                author: "League Scandal"
            },
            {
                text: "THE BET",
                story: "A significant bet or wager made during the season that became memorable.",
                author: "League Members"
            },
            {
                text: "GODSPEED TIMBO",
                story: "A farewell or tribute to Timbo, possibly related to his departure or a significant moment.",
                author: "League Member"
            },
            {
                text: "LITTLE BEAR",
                story: "A nickname or reference that became significant in the league that season.",
                author: "League Member"
            },
            {
                text: "STROKEGATE",
                story: "Another 'gate' controversy, this time involving a stroke-related incident or reference.",
                author: "League Scandal"
            },
            {
                text: "400 HUNDO",
                story: "A reference to $400, possibly from a bet, trade, or league fee that became memorable.",
                author: "League Member"
            },
            {
                text: "MONDAY NIGHT MIRACLE 2.0",
                story: "A second edition of a Monday Night Miracle, likely involving a dramatic comeback or performance.",
                author: "League Member"
            },
            {
                text: "COOPERGATE",
                story: "Another controversy involving someone named Cooper that became part of league lore.",
                author: "League Scandal"
            },
            {
                text: "6:30 MILE",
                story: "A reference to a 6:30 mile time, possibly from a bet or challenge involving running.",
                author: "League Member"
            },
            {
                text: "GME 100K EOY",
                story: "A reference to GameStop stock and a prediction about reaching $100K by end of year.",
                author: "League Member"
            },
            {
                text: "DUNLAP YOU FAT POS",
                story: "A memorable quote directed at Dunlap, possibly from a heated moment or game.",
                author: "League Member"
            },
            {
                text: "STATGATE",
                story: "Another controversy, this time involving statistics or stat corrections.",
                author: "League Scandal"
            },
            {
                text: "NUKEGATE",
                story: "A controversy involving 'Nuke' or DeAndre Hopkins that became memorable.",
                author: "League Scandal"
            }
        ],
        description: "The 2021 edition featuring Jon Egan's championship and the most memorable moments, controversies, and sayings from that season."
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
    
