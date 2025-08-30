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
      {#if newsData}
        <News news={newsData} />
      {/if}

      <!-- Blog section (if enabled) -->
      {#if enableBlog && blogData}
        <HomePost postsData={blogData} leagueTeamManagersData={leagueTeamManagersData} />
      {/if}
    {/if}
  </div>