<!-- __layout.svelte -->
<script>
	import { Nav, Footer } from "$lib/components"
    import { dev } from '$app/environment';
    import { injectAnalytics } from '@vercel/analytics/sveltekit';
    import { page } from '$app/stores';
 
    injectAnalytics({ mode: dev ? 'development' : 'production' });
    
    // Check if we're on the home page (coming soon page)
    $: isComingSoon = $page.url.pathname === '/';
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