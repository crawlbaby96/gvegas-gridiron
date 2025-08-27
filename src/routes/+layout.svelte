<!-- __layout.svelte -->
<script>
	import { Nav, Footer } from "$lib/components"
    import { dev } from '$app/environment';
    import { injectAnalytics } from '@vercel/analytics/sveltekit';
    import { page } from '$app/stores';
    import { isProduction } from '$lib/utils/environment';
 
    injectAnalytics({ mode: dev ? 'development' : 'production' });
    
    // Check if we're on the home page AND in production (coming soon page)
    $: isComingSoon = $page.url.pathname === '/' && isProduction();
</script>

<main>
    {#if !isComingSoon}
        <Nav /> <!-- adds the nav (small and large) -->
    {/if}
  
    <slot />

    {#if !isComingSoon}
        <Footer /> <!-- adds the footer -->
    {/if}
</main>