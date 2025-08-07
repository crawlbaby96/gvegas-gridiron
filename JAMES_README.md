# James - League Page Setup Instructions

## 🏈 Welcome to Gvegas Gridiron League Page Setup!

Hey James! This README will walk you through updating the league page with all the details for Gvegas Gridiron. You'll need to edit the `src/lib/utils/leagueInfo.js` file.

---

## 📝 STEP 1: Update Front Page Content (Lines 8-17)

**File to edit:** `src/lib/utils/leagueInfo.js`

**Current location:** Lines 8-17 (look for `homepageText`)

### What to do:
Replace the placeholder text with your league's actual information. The content needs to be in **HTML format**.

### Example:
```javascript
export const homepageText = `
  <h2>G-Vegas Gridiron</h2>
  <p>Established in 2015 by our corrupt commissioner James Figo, aka the Golden Reaper.</p>
  <p>We're a 16-team dynasty league with epic draft weekends and legendary rivalries.</p>
  <p>Championship winners include Chuckles (2x) and our in-house legal counsel William Corncob Corbin.</p>
  <p>League dues: $10 per season</p>
  <p>Draft format: Live auction draft</p>
  <p>Playoffs: 8 teams, weeks 15-17</p>
`;
```

### HTML Tags you can use: (Or just use chatgpt like me)
- `<h1>`, `<h2>`, `<h3>` - Headers
- `<p>` - Paragraphs
- `<strong>` or `<b>` - Bold text
- `<em>` or `<i>` - Italic text
- `<ul>` and `<li>` - Bullet lists
- `<br>` - Line breaks

---

## 👥 STEP 2: Update Manager Information (Starting Line 30)

**File to edit:** `src/lib/utils/leagueInfo.js`

**Current location:** Lines 30+ (look for `export const managers = [`)

### What you need to update for each manager:

#### Required Fields:
- `managerID` - Already set (don't change)
- `name` - Manager's display name
- `bio` - Team name or personal bio

#### Optional Fields (set to `null` if not using):
- `location` - City/state where they live
- `photo` - Path to their photo (see photo instructions below)
- `fantasyStart` - Year they started playing fantasy football
- `favoriteTeam` - NFL team (use lowercase: `nyj`, `sea`, `mia`, etc.)
- `mode` - `"Win Now"`, `"Dynasty"`, or `"Rebuild"`
- `favoritePlayer` - Sleeper player ID (optional)
- `valuePosition` - Favorite position (`"QB"`, `"RB"`, `"WR"`, `"TE"`, etc.)
- `rookieOrVets` - `"Rookies"` or `"Vets"`
- `philosophy` - Their fantasy philosophy
- `tradingScale` - 1-10 rating
- `preferredContact` - `"Text"`, `"WhatsApp"`, `"Sleeper"`, `"Email"`, `"Phone"`, `"Discord"`, or `"Carrier Pigeon"`

#### Rival Section:
```javascript
"rival": {
  name: "Rival Name", // Their rival's name
  link: 5, // Manager array number (0-15) or null
  image: "/managers/rival.jpg", // Photo path
}
```

---

## 📸 STEP 3: Adding Manager Photos

### Photo Requirements:
- **Format:** JPG or PNG
- **Size:** Square ratio recommended (no larger than 500x500px)
- **Location:** Save in `static/managers/` folder

### How to add photos:

1. **Save photos** in the `static/managers/` folder
2. **Name them** descriptively (e.g., `james-figo.jpg`, `crawlbaby.png`)
3. **Update the photo path** in `leagueInfo.js`:
   ```javascript
   "photo": "/managers/james-figo.jpg"
   ```

### Photo options:
- Use individual photos: `"/managers/james-figo.jpg"`
- Use default: `"/managers/everyone.png"`
- Use question mark: `"/managers/question.png"`

---

## 🏆 STEP 4: Example Manager Entry

Here's a complete example for one manager:

```javascript
{
  "managerID": "450350679567888384",
  "name": "James Figo",
  "location": "G-Vegas, NC",
  "bio": "THE GOLDEN REAPER - League Commissioner since 2015. Known for questionable trades and even more questionable draft picks.",
  "photo": "/managers/james-figo.jpg",
  "fantasyStart": 2010,
  "favoriteTeam": "car",
  "mode": "Win Now",
  "rival": {
    name: "Crawlbaby",
    link: 5, // Crawlbaby's position in the array
    image: "/managers/crawlbaby.jpg",
  },
  "favoritePlayer": 1426, // Sleeper player ID
  "valuePosition": "QB",
  "rookieOrVets": "Vets",
  "philosophy": "Draft QBs early, trade often, win championships",
  "tradingScale": 8,
  "preferredContact": "Sleeper",
}
```

---

## 🔧 STEP 5: Testing Your Changes

1. **Save the file** (`Cmd + S`)
2. **Check the dev server** is running (`npm run dev`)
3. **Visit** `http://localhost:5173`
4. **Check the homepage** for your updated text
5. **Visit** `http://localhost:5173/managers` to see manager profiles

---

## 📋 Checklist for James

- [ ] Update homepage text (lines 8-17) with league history
- [ ] Add manager locations
- [ ] Write personal bios for each manager
- [ ] Add manager photos to `static/managers/` folder
- [ ] Update photo paths in `leagueInfo.js`
- [ ] Add fantasy start years
- [ ] Add favorite NFL teams
- [ ] Set manager modes (Win Now/Dynasty/Rebuild)
- [ ] Add rivals and link them properly
- [ ] Add favorite players (optional)
- [ ] Add value positions
- [ ] Add rookie/vet preferences
- [ ] Write fantasy philosophies
- [ ] Set trading scales (1-10)
- [ ] Add preferred contact methods
- [ ] Test all changes locally

---

## 🆘 Need Help?

- **Photo issues:** Make sure photos are in the right folder and paths are correct
- **HTML formatting:** Use simple tags like `<p>`, `<strong>`, `<br>`
- **Manager IDs:** Don't change these - they're already correct
- **Testing:** Always test locally before pushing changes

---

---

## 👕 STEP 6: Updating T-Shirts and Sayings

**File to edit:** `src/lib/utils/leagueInfo.js`

**Current location:** Lines 350+ (look for `export const tShirts = [`)

### What you need to update for each shirt:

#### Required Fields:
- `id` - Unique number for each shirt
- `year` - Year of the shirt
- `title` - Shirt name (e.g., "G-Vegas Gridiron 2023")
- `image` - Path to shirt image (see image instructions below)
- `color` - Shirt color description
- `sayings` - Array of sayings with text, story, and author
- `description` - Overall description of the shirt

#### Sayings Structure:
Each saying needs:
```javascript
{
    text: "THE ACTUAL SAYING IN CAPS",
    story: "The story behind this saying - what happened, who said it, why it's memorable",
    author: "Who said it or who it's about"
}
```

#### Example Shirt Entry:
```javascript
{
    id: 1,
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
        }
        // Add more sayings...
    ],
    description: "The 2023 league shirt featuring the most memorable sayings and catchphrases from our league's colorful cast of characters."
}
```

---

## 📸 STEP 7: Adding T-Shirt Images

### Image Requirements:
- **Format:** JPG or PNG
- **Size:** Recommended 800x600px or similar ratio
- **Location:** Save in `static/t-shirts/` folder

### How to add shirt images:

1. **Save images** in the `static/t-shirts/` folder
2. **Name them** descriptively (e.g., `2023-shirt.jpg`, `2022-shirt.png`)
3. **Update the image path** in `leagueInfo.js`:
   ```javascript
   "image": "/t-shirts/2023-shirt.jpg"
   ```

### Image tips:
- Use high-quality photos of the actual shirts
- Show both front and back if possible
- Make sure text is readable
- Use consistent naming (year-shirt.jpg)

---

## 🔗 STEP 8: Linking Sayings to Managers

If a saying's author matches a manager's name, it will automatically become a clickable link to their profile:

```javascript
{
    text: "THE GOLDEN REAPER - League Commissioner",
    story: "James Figueroa's official title and nickname. As the league's founding commissioner, he's earned the nickname 'The Golden Reaper' for his strategic brilliance and consistent success.",
    author: "jfigueroa17" // This will link to James's manager profile
}
```

### Author naming tips:
- Use exact manager names from the managers array for automatic linking
- Use descriptive names like "League Chat" or "League Member" for general sayings
- Use team names or nicknames for team-specific sayings

---

## 📋 Updated Checklist for James

- [ ] Update homepage text (lines 8-17) with league history
- [ ] Add manager locations
- [ ] Write personal bios for each manager
- [ ] Add manager photos to `static/managers/` folder
- [ ] Update photo paths in `leagueInfo.js`
- [ ] Add fantasy start years
- [ ] Add favorite NFL teams
- [ ] Set manager modes (Win Now/Dynasty/Rebuild)
- [ ] Add rivals and link them properly
- [ ] Add favorite players (optional)
- [ ] Add value positions
- [ ] Add rookie/vet preferences
- [ ] Write fantasy philosophies
- [ ] Set trading scales (1-10)
- [ ] Add preferred contact methods
- [ ] **NEW:** Add T-shirt images to `static/t-shirts/` folder
- [ ] **NEW:** Update T-shirt data with actual sayings and stories
- [ ] **NEW:** Link saying authors to manager profiles where possible
- [ ] **NEW:** Write descriptions for each shirt
- [ ] Test all changes locally

---

## 🆘 Need Help?

- **Photo issues:** Make sure photos are in the right folder and paths are correct
- **HTML formatting:** Use simple tags like `<p>`, `<strong>`, `<br>`
- **Manager IDs:** Don't change these - they're already correct
- **T-Shirt images:** Save in `static/t-shirts/` folder with descriptive names
- **Saying stories:** Be creative and capture the league's personality
- **Author linking:** Use exact manager names for automatic profile links
- **Testing:** Always test locally before pushing changes

---

**Good luck, Commissioner! 🏈**