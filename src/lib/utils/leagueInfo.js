
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
      "bio": "Did your greedy cousin get your dad with dementia to change his will at the last second to cut you out? Call the law offices of William D. Corbin! I may not have a chair that was made in the 21st century, but I can help you get what is rightfully yours. Outside of work, I'm the league's most obnoxious Clemson fan, a carrier of weaponized autism, host of the Corbin Compound, king of random players that will never do anything, and commentator on pretty much anything you ask my opinion on (no guarantee that my thoughts are accurate, though).",
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
        name: "James Figueroa",
        link: null,
        image: "/managers/james-avatar.png",
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
      "favoriteTeam": "sf",
      "mode": null,
      "rival": {
        name: "Chuck Pace",
        link: null,
        image: "/managers/chuck-avatar-2.png",
      },
      "favoritePlayer": "4034",
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
      "bio": "I have been a member of the league since its inception. It has been fun to see all of us grow older. I am the oldest member of the league and there fore I claim the title of the wisest. I have a winning record and have won once and was very close to a second...by a few seconds.  'Congratulations Elliot' are words that still haunt me. I am a dolphin's fan since the 70's and Marino was my last dolphin hero.  Been married for almost 30 years and no grand kids yet...James? YNWA!!",
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
      "bio": "Welcome to the Bull City Bots’ profile, where we’ve learned that being good at fantasy football doesn’t always translate to making the playoffs. In our first season, we finished in the top half of scorers, and in our second season, we were the third highest scoring team—only to miss out on the playoffs thanks to some truly brutal matchup luck. But this year? We're finally going to break through. For the record, I’m a former high school football offensive coordinator—yes, I did know what I was doing, until my twin girls came along and made coaching a lot more complicated. So, I traded the sideline for fantasy football, where the only thing I have to manage is my roster. No more excuses—this is the year the Bull City Bots make their playoff push.",
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
        years: "2011-2014",
        image: "/managers/james-trio.png", // You can replace with actual images
        description: "James Figueroa's legendary run as the inaugural champion, establishing himself as the league's first dynasty. His strategic brilliance and consistent performance set the standard for excellence in G-Vegas Gridiron. When leading a dynasty, it helps to have 6 farm teams you are leading.",
        category: "Championship",
        featuredPlayer: null, // Can reference a player ID from Sleeper API
        managerID: "450350679567888384", // James Figueroa's manager ID
        inductedYear: 2025
    },
    {
        id: 2,
        title: "The Schwauagaahany Date",
        years: "2023",
        image: "/managers/Jose-cardboard.png",
        description: "Jose's punishment in 2023 was taking a cardboard cutout of former league member Schwauaaugahany. He bought it a great meal, enjoyed riveting conversation, and was the talk of Soby's. A legendary league moment",
        category: "Memorable Moment",
        featuredPlayer: null, // Crawlbaby's favorite player
        managerID: "826875538638512128", // Crawlbaby's manager ID
        inductedYear: 2025
    },
    {
        id: 3,
        title: "The Legal Eagle's Triumph",
        years: "2017, 2018",
        image: "/managers/Corbin-Winning-League.png",
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
        image: "/t-shirts/steve-eager-draft.jpg",
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
                story: "During the GVegas olympics, The Golden Reaper victoriously lifted the trophy for the CFB '25 tournament absolutely running circles on the competition with the legendary Texas Longhorns.",
                author: "Golden Reaper"
            },
            {
                text: "CLEAR GLASS HOUSES",
                story: "After a great shooting performance from Ranger Rick, he demonstrated the proper finger gun position for clearing glass houses. If Osama was in a glass house and not a cave watch out!!",
                author: "Cocks on Top"
            },
            {
                text: "I JUST LOVE TRADING",
                story: "Immediately after the draft before any games have been played, Comrade wanted to start trading because he loves it. The only problem is he is on the bad end of some of the worst trades in league history.",
                author: "North Korean Fighting Kims"
            },
            {
                text: "POSITIVITY CZAR",
                story: "Like a golden retriever with anxiety medication, Chuckles injects unwanted optimism into every fantasy disaster. Even when your team burns to the ground, he'll find a way to tell you why it's actually good for your playoff chances.",
                author: "Philly CheeseSteaks"
            },
            {
                text: "WE BELIEVE IN DJ!",
                story: "Following what looked like a disastrous draft for DJ, he asked The Golden Reaper if it was as bad as everyone was saying. The Golden Reaper confirmed it. As DJ started to win, we couldn't help but affirm our undying belief in his great team.",
                author: "Golden Reaper"
            },
            {
                text: "GOD GIVES HIS TOUGHEST BATTLES TO HIS STRONGEST SOLDIERS",
                story: "Libby's words of encouragement to the positivity Czar that his first round pick CMC, was going to IR.",
                author: "Libby McLovin"
            },
            {
                text: "$85 ALLEN LAZARD",
                story: "The classic 'big brain' move: dropping Allen Lazard, immediately panicking, then spending $85 FAAB to get him back. It's like paying premium prices for your own leftovers, but with more public humiliation.",
                author: "Rogue Broncos"
            },
            {
                text: "I REALLY LIKE ICEMAN'S DRAFT",
                story: "When Corbin compliments your draft, start updating your résumé for next season. He's the human equivalent of a reverse uno card - whatever he endorses immediately becomes cursed. Jim Cramer has better fantasy football predictions.",
                author: "North Korean Fighting Kims"
            },
            {
                text: "BETTER TO BE LUCKY THAN GOOD",
                story: "While everyone else whines about 'bad beats' and 'unfair matchups,' Ricky just shrugs and embraces the beautiful chaos. He's the zen master of fantasy football - if he wins, it's because the universe aligned. If he loses, it's because the universe has a sense of humor.",
                author: "Children of the Corn"
            },
            {
                text: "COMEDY CLUB - DON'T TAKE KINDLY",
                story: "After three seasons of spectacular fantasy failures, Chet was ceremoniously kicked out faster than a kicker in the 4th round. The league's version of 'three strikes and you're out,' except the strikes were entire seasons of embarrassment.",
                author: "Don't Take Kindly"
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
                story: "Whenever the group chat goes quiet for more than 5 minutes, Chuckles emerges like a vampire at sunset to declare it dead and point fingers at Corbin. It's his Batman signal for attention, except instead of fighting crime, he's fighting silence.",
                author: "Philly Cheesesteaks"
            },
            {
                text: "MY TEAM SOCKS!",
                story: "In a moment of pure linguistic confusion, Dolphin Death declared his team 'socks' instead of 'sucks.' Given his team's performance, both statements were surprisingly accurate. Sometimes broken English captures the truth better than perfect grammar.",
                author: "Dolphin Death"
            },
            {
                text: "FRIDAY'S ARE NOT GOOD FOR ME",
                story: "Chuck has the social calendar of a Victorian aristocrat - apparently Friday evenings are reserved for very important business that definitely isn't just watching Netflix in his pajamas. The league's most reliable excuse for missing every Friday gathering.",
                author: "Philly Cheesesteaks"
            },
            {
                text: "HATE THAT GUY",
                story: "The moment Big Bad Brad joined the league, BNB's immediate reaction was pure, unfiltered hatred. No introductions needed, no warming up period - just instant rivalry. It was love at first sight, if love meant wanting to destroy someone's fantasy dreams.",
                author: "Bad News Babymamas"
            },
            {
                text: "I LOVE GREENVILLE, SOUTH CAROLINA",
                story: "Steve Eager's love for Greenville, South Carolina burns brighter than a thousand suns. He's basically the city's unofficial tourism board, chamber of commerce, and welcome wagon all rolled into one enthusiastic human being. We get it, Steve. We ALL get it.",
                author: "Steve Eager"
            },
            {
                text: "CHURCHED AND UNCHURCHED POWER RANKINGS",
                story: "A great list helping us monitor the spiritual wellbeing of our fellow brothers in Christ.",
                author: "Maverick"
            },
            {
                text: "THE LAW OFFICES OF WILLIAM D CORBIN",
                story: "The Legal Elite of saying \"It Depends\"",
                author: "North Korean Fighting Kims"
            },
            {
                text: "SUNDEEP AND COOPER ARE HERE!",
                story: "The marking of the the birth of future league members.",
                author: "Philly Cheesesteaks"
            },
            {
                text: "DUKE 28 CLEMSON 7",
                story: "The lost bet that lead to a rigged setup and maybe an engagment in due time.",
                author: "Libby McLovin"
            },
            {
                text: "NOEL JANUSZEWSKI GOES 14-1",
                story: "Noel went 14-1 in the regular season like he was playing on rookie mode, then immediately crumbled in the playoffs like a stale cookie. It was the most spectacular collapse since the Hindenburg, but with more fantasy football tears.",
                author: "North Korean Fighting Kims"
            },
            {
                text: "SD GIRL AND HER CHRISTMAS GIFTS",
                story: "When asked about gifts for Corbin and SD first christmas a classic response of \" Already got her flowers last Monday\".",
                author: "North Korean Fighting Kims"
            },
            {
                text: "BEST.WEEKEND.EVER.",
                story: "In rememberance of another awesome draft weekend!",
                author: ""
            },
            {
                text: "GVEGAS GOT TALENT: BILLY BUCK - BACK TO BACK CHAMP",
                story: "Not one but two punsihments. A great rendition of the legendary Steve Eager song \"Greenville\"",
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
                story: "Chuck went back-to-back like Jordan in the 90s, if Jordan also complained about his schedule and couldn't make Friday practices. Still managed to dominate the league while maintaining his mysterious Friday night commitments.",
                author: "Philly Cheesesteaks"
            },
            {
                text: "TREY LANCE TOP 5 FANTASY QB",
                story: "A classic Corbin pick that went so spectacularly wrong it earned him the coveted Mostert Award. When your QB prediction is so bad it becomes legendary, you know you've achieved something special.",
                author: "North Korean Fighting Kims"
            },
            {
                text: "BLAH BLAH BLAH...SEEN IT BEFORE...NEXT!",
                story: "When the Positivity Czar tried to argue with a commissioner ruling, he got hit with the fantasy football equivalent of 'talk to the hand.' Some conversations end with compromise; this one ended with 'NEXT!'",
                author: "GOLDEN REAPER"
            },
            {
                text: "#CORRUPTCOMMISH",
                story: "When nepotism meets fantasy football, the hashtag was born. Nothing says 'fair and balanced' like keeping it in the family.",
                author: "Suspicious League Members"
            },
            {
                text: "I REALLY LIKE WHERE MY TEAM IS AT",
                story: "Famous last words from the Oracle of Bad Takes. Like a meteorologist predicting sunshine right before a hurricane, Corbin's confidence is usually the first sign that everything is about to go spectacularly wrong.",
                author: "North Korean Fighting Kims"
            },
            {
                text: "WHO IS CARLOS?",
                story: "The mysterious phantom manager who was allegedly 'too busy with school' to reveal his true identity. James pulled the ultimate fantasy football catfish by creating Carlos, then immediately abandoning him like a bad Tinder date.",
                author: "Carlos"
            },
            {
                text: "GG1.0 LIVE Q&A",
                story: "Sarah coming into the lions den (or at least we think we are lions) to take on our questions. A legendary moment for James and her relationship - nothing says 'true love' like subjecting your girlfriend to fantasy football interrogation.",
                author: "James and Sarah"
            },
            {
                text: "I SHOULDN'T HAVE TRADED KELCE",
                story: "**Seconds befoer disaster**- a classicconfident Corbin quote",
                author: "North Korean Fighting Kims"
            },
            {
                text: "KING OF THE PRESSER",
                story: "Children of the Corn takes the crown for his press conferences, except when he is in an airport. Ricky's media mastery knows no bounds, unless there's a departure gate involved - then all bets are off.",
                author: "Children of the Corn"
            },
            {
                text: "LIBBY BLACK MAGIC",
                story: "Libby's supernatural ability to pull victory from the jaws of defeat using what can only be described as dark arts. When logic fails and statistics crumble, Libby's black magic takes over.",
                author: "Libby McLovin"
            },
            {
                text: "JAMES...MASSIVE CLEMSON FAN",
                story: "This closeted Clemson fan used USC as a beard for so long, but we all know where the true fandom lives. James finally came out of the orange and purple closet - no more hiding behind Gamecock feathers.",
                author: "James Figueroa"
            },
            {
                text: "GREAT JOB...BUDDY",
                story: "The passive-aggressive pat on the back that says everything and nothing at the same time. 'Great job...buddy' - the fantasy football equivalent of 'bless your heart.'",
                author: ""
            },
            {
                text: "MIKE BOONE!",
                story: "The most enthusiastic celebration of a mediocre running back in fantasy football history. BNB screaming 'BOONE!' with the passion of a World Cup goal, despite Mike Boone averaging 2.3 yards per carry.",
                author: "Bad News Babymamas"
            },
            {
                text: "THIS LEAGUE WAS THE BRIGHT LIGHT WHEN THINGS GOT DARK AND SNOWY",
                story: "The good part of this league where we are more than a bunch of toxic dicks. Sometimes, beneath all the trash talk and savage roasts, there's actually genuine friendship and support. Who knew?",
                author: "Rogue Broncos"
            },
            {
                text: "RISE",
                story: "RISE",
                author: "Maverick"
            },
            {
                text: "SCHWAUGHNNN DATE: BILLY BUCK",
                story: "A nice date with an ever nicer cutout",
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
                story: "Jon made a Faustian bargain with the fantasy football gods, trading his eternal soul for one championship ring. The devil probably got the better deal, but Jon got the trophy, so who's really winning here?",
                author: "Plaxico's Gun n Run"
            },
            {
                text: "RORY GOT MIXXED",
                story: "Jimmy Johns tastes the best in Saginaw, MI. Rory's passionate declaration about the superior quality of submarine sandwiches in a specific Michigan city became instant league legend.",
                author: "Rogue Broncos"
            },
            {
                text: "BRODIE'S SUNROOF",
                story: "The moment when Brodie discovered his sunroof had been giving him an unwanted shower all season. Mystery solved: it wasn't tears of fantasy football joy, it was just good old-fashioned precipitation.",
                author: "Struggling"
            },
            {
                text: "KICKERGATE",
                story: "",
                author: "ALPHA MALE SEAN"
            },
            {
                text: "LINEUPGATE",
                story: "",
                author: "North Korean Fighting Kims"
            },
            {
                text: "THE BET",
                story: "The wager that changed league history forever. Alpha Male bet his spot in the league, lost spectacularly, and got booted while Chuck got sentenced to buying everyone t-shirts. One man's exile became everyone else's free merch.",
                author: "Philly Cheesesteaks"
            },
            {
                text: "GODSPEED TIMBO",
                story: "",
                author: "ALPHA MALE SEAN"
            },
            {
                text: "LITTLE BEAR",
                story: "",
                author: ""
            },
            {
                text: "STROKEGATE",
                story: "",
                author: "ALPHA MALE SEAN"
            },
            {
                text: "400 HUNDO",
                story: "",
                author: "Philly Cheesesteaks"
            },
            {
                text: "MONDAY NIGHT MIRACLE 2.0",
                story: "",
                author: "GOLDEN REAPER"
            },
            {
                text: "COOPERGATE",
                story: "",
                author: "ALPHA MALE SEAN"
            },
            {
                text: "6:30 MILE",
                story: "Timbo turned down $1,000 to run a 6:30 mile in front of everyone, claiming he didn't need to prove anything. Then Strava immediately snitched on him with GPS evidence that he could absolutely do it. Technology: 1, Timbo's Humility: 0.",
                author: ""
            },
            {
                text: "GME 100K EOY",
                story: "Alpha Male's bold prediction that GameStop would hit $100K by end of year. The only question was which year - 2021? 2031? 2121? Still waiting for that moon landing, but his diamond hands remain unshaken.",
                author: "ALPHA MALE SEAN"
            },
            {
                text: "DUNLAP YOU FAT POS",
                story: "Sometimes the most brutal truths come wrapped in the simplest packages. Chuck delivered this roast with the efficiency of a surgical strike and the accuracy of a GPS missile. Dunlap never recovered.",
                author: "Philly Cheesesteaks"
            },
            {
                text: "STATGATE",
                story: "",
                author: "Maverick"
            },
            {
                text: "NUKEGATE",
                story: "",
                author: "ALPHA MALE SEAN"
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
    
