<script>

  import { homepageText, getNews, enableBlog, getBlogPosts, getLeagueTeamManagers, waitForAll } from '$lib/utils/helper';
  import { onMount } from 'svelte';
  import News from '$lib/News/index.svelte';
  import HomePost from '$lib/BlogPosts/HomePost.svelte';
  import LinearProgress from '@smui/linear-progress';

  // League page data
  let newsData = null;
  let blogData = null;
  let leagueTeamManagersData = null;
  let loading = true;

  onMount(async () => {
    try {
      // Load data for league page
      const promises = [getNews(null)];
      
      if (enableBlog) {
        promises.push(getBlogPosts(null));
      }
      
      promises.push(getLeagueTeamManagers());
      
      const results = await waitForAll(...promises);
      newsData = results[0];
      
      if (enableBlog) {
        blogData = results[1];
        leagueTeamManagersData = results[2];
      } else {
        leagueTeamManagersData = results[1];
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

    .homepageText {
      width: 85%;
      margin: 0 auto;
      max-width: 800px;
      line-height: 1.6;
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
  </style>

  <div class="pageBody">
    <!-- League homepage text -->
    <div class="homepageText">
      {@html homepageText}
    </div>

    <!-- News section -->
    {#if loading}
      <div class="loading">
        <p>Loading league content...</p>
        <LinearProgress indeterminate />
      </div>
    {:else}
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
    {/if}
  </div>