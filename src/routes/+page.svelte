<script>

  import { homepageText, getNews, enableBlog, getBlogPosts, getLeagueTeamManagers, getLeagueMatchups, loadPlayers, waitForAll } from '$lib/utils/helper';
  import { onMount } from 'svelte';
  import News from '$lib/News/index.svelte';
  import HomePost from '$lib/BlogPosts/HomePost.svelte';
  import Matchup from '$lib/Matchups/Matchup.svelte';
  import LinearProgress from '@smui/linear-progress';

  // League page data
  let newsData = null;
  let blogData = null;
  let leagueTeamManagersData = null;
  let matchupsData = null;
  let playersData = null;
  let players = null;
  let matchupWeeks = null;
  let year = null;
  let week = null;
  let regularSeasonLength = null;
  let currentMatchups = [];
  let loading = true;

  onMount(async () => {
    try {
      // Load data for league page
      const promises = [
        getNews(null),
        getLeagueTeamManagers(),
        getLeagueMatchups(),
        loadPlayers(null)
      ];
      
      if (enableBlog) {
        promises.push(getBlogPosts(null));
      }
      
      const results = await waitForAll(...promises);
      newsData = results[0];
      leagueTeamManagersData = results[1];
      matchupsData = results[2];
      playersData = results[3];
      
      if (enableBlog) {
        blogData = results[4];
      }
      
      // Process matchups data
      if (matchupsData) {
        matchupWeeks = matchupsData.matchupWeeks;
        year = matchupsData.year;
        week = matchupsData.week;
        regularSeasonLength = matchupsData.regularSeasonLength;
        
        // Extract current week's matchups
        if (matchupWeeks && week && matchupWeeks[week - 1]) {
          const currentWeekData = matchupWeeks[week - 1];
          currentMatchups = [];
          for (const key in currentWeekData.matchups) {
            currentMatchups.push(currentWeekData.matchups[key]);
          }
        }
      }
      
      // Process players data
      if (playersData) {
        players = playersData.players;
      }
      
      loading = false;
    } catch (error) {
      console.error('Error loading homepage data:', error);
      // Set loading to false even if there's an error so the page can still display
      loading = false;
      // Set empty defaults
      newsData = { articles: [] };
      if (enableBlog) {
        blogData = { posts: [] };
      }
      leagueTeamManagersData = {};
      matchupsData = null;
      playersData = null;
    }
  });
</script>

<svelte:head>
  <title>G-Vegas Gridiron Fantasy Football League</title>
  <meta name="description" content="Official website of the G-Vegas Gridiron Fantasy Football League" />
</svelte:head>

<!-- LEAGUE PAGE -->
  <style>
    .pageBody {
      position: relative;
      z-index: 1;
      margin-bottom: 60px;
    }

    .homepageContent {
      display: grid;
      grid-template-columns: 1fr 350px;
      gap: 30px;
      width: 95%;
      max-width: 1200px;
      margin: 0 auto;
    }

    .mainContent {
      min-width: 0; /* Allows grid item to shrink below content size */
    }

    .sideContent {
      min-width: 0;
    }

    .homepageText {
      width: 85%;
      max-width: 800px;
      line-height: 1.6;
      margin: 0 auto 30px auto;
      text-align: center;
    }

    .homepageText h1,
    .homepageText h2,
    .homepageText h3 {
      margin-top: 1.5em;
      margin-bottom: 0.5em;
    }

    .homepageText p {
      margin-bottom: 1em;
    }

    .loading {
      display: block;
      width: 85%;
      max-width: 500px;
      margin: 80px auto;
    }

    .matchupsSection {
      background: var(--fff);
      border-radius: 12px;
      box-shadow: 0px 3px 3px -2px var(--boxShadowOne), 0px 3px 4px 0px var(--boxShadowTwo), 0px 1px 8px 0px var(--boxShadowThree);
      padding: 20px;
      margin-bottom: 20px;
    }

    .matchupsSection h3 {
      margin: 0 0 15px 0;
      color: var(--g000);
      text-align: center;
    }

    @media (max-width: 1000px) {
      .homepageContent {
        grid-template-columns: 1fr;
        gap: 20px;
      }
      
      .sideContent {
        order: -1; /* Show matchups above content on mobile */
      }
    }

    @media (max-width: 768px) {
      .homepageContent {
        width: 95%;
      }
      
      .homepageText {
        width: 100%;
      }
    }
  </style>

  <div class="pageBody">
    <!-- League homepage text -->
    <div class="homepageText">
      {@html homepageText}
    </div>

    {#if loading}
      <div class="loading">
        <p>Loading league content...</p>
        <LinearProgress indeterminate />
      </div>
    {:else}
      <div class="homepageContent">
        <!-- Main content area -->
        <div class="mainContent">
          <!-- News section -->
          {#if newsData && newsData.articles && newsData.articles.length > 0}
            <News news={newsData} />
          {:else if newsData}
            <div style="text-align: center; padding: 40px; color: var(--g555);">
              <p>No news articles available at the moment.</p>
            </div>
          {/if}

          <!-- Blog section (if enabled) -->
          {#if enableBlog && blogData && blogData.posts && blogData.posts.length > 0}
            <HomePost postsData={blogData} leagueTeamManagersData={leagueTeamManagersData} />
          {/if}
        </div>

        <!-- Side content area -->
        <div class="sideContent">
          <!-- Current Week Matchups -->
          {#if currentMatchups.length > 0 && players && leagueTeamManagersData && week}
            <div class="matchupsSection">
              <h3>Week {week} Matchups</h3>
              {#each currentMatchups as matchup, ix}
                <Matchup 
                  {matchup} 
                  {players} 
                  displayWeek={week}
                  active={null}
                  {ix}
                  leagueTeamManagers={leagueTeamManagersData}
                  {year}
                />
              {/each}
            </div>
          {:else if week}
            <div class="matchupsSection">
              <h3>Week {week} Matchups</h3>
              <p style="text-align: center; color: var(--g555); padding: 20px;">
                Matchups loading...
              </p>
            </div>
          {/if}
        </div>
      </div>
    {/if}
  </div>