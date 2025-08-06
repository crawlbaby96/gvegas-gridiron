<script>
    import { leagueName } from '$lib/utils/helper';
    import { tShirts, managers } from '$lib/utils/leagueInfo';
    import { goto } from '$app/navigation';

    let searchTerm = $state("");
    let selectedShirt = $state(null);
    let showModal = $state(false);

    // Filter shirts based on search
    let filteredShirts = $derived(tShirts.filter(shirt => {
        const matchesSearch = shirt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             shirt.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             shirt.year.toString().includes(searchTerm) ||
                             shirt.sayings.some(saying => 
                                 saying.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                 saying.author.toLowerCase().includes(searchTerm.toLowerCase())
                             );
        return matchesSearch;
    }));

    // Get manager info for saying author
    function getManagerInfo(authorName) {
        return managers.find(manager => manager.name === authorName);
    }

    // Open shirt modal
    function openShirt(shirt) {
        selectedShirt = shirt;
        showModal = true;
    }

    // Close modal
    function closeModal() {
        showModal = false;
        selectedShirt = null;
    }

    // Navigate to manager page
    function goToManager(managerID) {
        if (managerID) {
            goto(`/manager?managerID=${managerID}`);
        }
    }
</script>

<svelte:head>
    <title>{leagueName} - T-Shirts</title>
</svelte:head>

<div class="container">
    <div class="header">
        <h1>👕 League T-Shirts</h1>
        <p>Celebrating the annual tradition of {leagueName} shirts and the memorable sayings that define each season</p>
    </div>

    <div class="controls">
        <div class="search-section">
            <input 
                type="text" 
                placeholder="Search shirts, sayings, or years..." 
                bind:value={searchTerm}
                class="search-input"
            />
        </div>
    </div>

    <div class="shirts-grid">
        {#each filteredShirts as shirt}
            <div class="shirt-card" onclick={() => openShirt(shirt)}>
                <div class="shirt-image">
                    <img src={shirt.image} alt={shirt.title} />
                    <div class="shirt-overlay">
                        <span class="material-icons">visibility</span>
                    </div>

                </div>
                
                <div class="shirt-content">
                    <div class="shirt-header">
                        <h3>{shirt.title}</h3>
                    </div>
                    
                    <div class="sayings-preview">
                        <h4>Featured Sayings:</h4>
                        <div class="sayings-list">
                            {#each shirt.sayings.slice(0, 2) as saying}
                                <div class="saying-preview">
                                    <span class="saying-text">"{saying.text}"</span>
                                    <span class="saying-author">- {saying.author}</span>
                                </div>
                            {/each}
                            {#if shirt.sayings.length > 2}
                                <div class="more-sayings">
                                    +{shirt.sayings.length - 2} more sayings...
                                </div>
                            {/if}
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>

    {#if filteredShirts.length === 0}
        <div class="no-results">
            <span class="material-icons">style</span>
            <h3>No shirts found</h3>
            <p>Try adjusting your search criteria</p>
        </div>
    {/if}
</div>

<!-- Shirt Modal -->
{#if showModal && selectedShirt}
    <div class="modal-overlay" onclick={closeModal}>
        <div class="modal-content" onclick={(e) => e.stopPropagation()}>
            <div class="modal-header">
                <h2>{selectedShirt.title}</h2>
                <button class="close-button" onclick={closeModal}>
                    <span class="material-icons">close</span>
                </button>
            </div>
            
            <div class="modal-body">
                <div class="modal-image">
                    <img src={selectedShirt.image} alt={selectedShirt.title} />
                </div>
                

                
                <div class="modal-description">
                    <h4>Description</h4>
                    <p>{selectedShirt.description}</p>
                </div>
                
                <div class="sayings-section">
                    <h4>All Sayings & Stories</h4>
                    <div class="sayings-grid">
                        {#each selectedShirt.sayings as saying}
                            {@const manager = getManagerInfo(saying.author)}
                            <div class="saying-card">
                                <div class="saying-header">
                                    <span class="saying-text">"{saying.text}"</span>
                                    {#if manager}
                                        <button class="author-link" onclick={() => goToManager(manager.managerID)}>
                                            - {saying.author}
                                        </button>
                                    {:else}
                                        <span class="saying-author">- {saying.author}</span>
                                    {/if}
                                </div>
                                <div class="saying-story">
                                    <p>{saying.story}</p>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }

    .header {
        text-align: center;
        margin-bottom: 40px;
        padding: 20px 0;
        border-bottom: 2px solid var(--ddd);
    }

    .header h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
        color: var(--g000);
    }

    .header p {
        font-size: 1.2rem;
        color: var(--g555);
        max-width: 600px;
        margin: 0 auto;
    }

    .controls {
        margin-bottom: 30px;
    }

    .search-section {
        max-width: 400px;
        margin: 0 auto;
    }

    .search-input {
        width: 100%;
        padding: 12px 16px;
        border: 2px solid var(--ddd);
        border-radius: 8px;
        background: var(--fff);
        color: var(--g000);
        font-size: 1rem;
        transition: border-color 0.3s ease;
    }

    .search-input:focus {
        outline: none;
        border-color: var(--blueOne);
    }

    .shirts-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 25px;
        margin-bottom: 40px;
    }

    .shirt-card {
        background: var(--fff);
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0px 3px 3px -2px var(--boxShadowOne), 0px 3px 4px 0px var(--boxShadowTwo), 0px 1px 8px 0px var(--boxShadowThree);
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .shirt-card:hover {
        transform: translateY(-5px);
        box-shadow: 0px 8px 8px -4px var(--boxShadowOne), 0px 8px 12px 0px var(--boxShadowTwo), 0px 4px 16px 0px var(--boxShadowThree);
    }

    .shirt-image {
        position: relative;
        height: 200px;
        overflow: hidden;
    }

    .shirt-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .shirt-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .shirt-card:hover .shirt-overlay {
        opacity: 1;
    }

    .shirt-overlay .material-icons {
        color: white;
        font-size: 2rem;
    }

    .shirt-year {
        position: absolute;
        top: 10px;
        right: 10px;
        background: var(--blueOne);
        color: white;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
    }

    .shirt-content {
        padding: 20px;
    }

    .shirt-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 15px;
    }

    .shirt-header h3 {
        font-size: 1.3rem;
        color: var(--g000);
        margin: 0;
        flex: 1;
    }

    .shirt-color {
        font-size: 0.9rem;
        color: var(--g555);
        font-weight: 600;
        background: var(--f8f8f8);
        padding: 4px 8px;
        border-radius: 4px;
    }

    .shirt-description {
        color: var(--g555);
        line-height: 1.5;
        margin-bottom: 20px;
    }

    .sayings-preview h4 {
        font-size: 1rem;
        color: var(--g000);
        margin-bottom: 10px;
    }

    .sayings-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .saying-preview {
        background: var(--f8f8f8);
        padding: 10px;
        border-radius: 6px;
        border-left: 3px solid var(--blueOne);
    }

    .saying-text {
        font-style: italic;
        color: var(--g000);
        font-weight: 500;
    }

    .saying-author {
        color: var(--g555);
        font-size: 0.9rem;
        margin-left: 5px;
    }

    .more-sayings {
        color: var(--g999);
        font-size: 0.9rem;
        font-style: italic;
        text-align: center;
        padding: 5px;
    }

    .no-results {
        text-align: center;
        padding: 60px 20px;
        color: var(--g555);
    }

    .no-results .material-icons {
        font-size: 4rem;
        margin-bottom: 20px;
        opacity: 0.5;
    }

    /* Modal Styles */
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 20px;
    }

    .modal-content {
        background: var(--fff);
        border-radius: 12px;
        max-width: 900px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 30px;
        border-bottom: 1px solid var(--ddd);
    }

    .modal-header h2 {
        margin: 0;
        color: var(--g000);
    }

    .close-button {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--g555);
        padding: 5px;
    }

    .close-button:hover {
        color: var(--g000);
    }

    .modal-body {
        padding: 30px;
    }

    .modal-image {
        text-align: center;
        margin-bottom: 30px;
    }

    .modal-image img {
        max-width: 100%;
        max-height: 300px;
        border-radius: 8px;
    }

    .modal-info {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
        margin-bottom: 30px;
    }

    .info-row {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .info-label {
        font-weight: 600;
        color: var(--g555);
        font-size: 0.9rem;
    }

    .info-value {
        color: var(--g000);
    }

    .color-badge {
        color: white;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
    }

    .modal-description h4 {
        color: var(--g000);
        margin-bottom: 15px;
    }

    .modal-description p {
        color: var(--g555);
        line-height: 1.6;
        margin-bottom: 30px;
    }

    .sayings-section h4 {
        color: var(--g000);
        margin-bottom: 20px;
        font-size: 1.3rem;
    }

    .sayings-grid {
        display: grid;
        gap: 20px;
    }

    .saying-card {
        background: var(--f8f8f8);
        border-radius: 8px;
        padding: 20px;
        border-left: 4px solid var(--blueOne);
    }

    .saying-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 15px;
        flex-wrap: wrap;
        gap: 10px;
    }

    .saying-text {
        font-style: italic;
        color: var(--g000);
        font-weight: 600;
        font-size: 1.1rem;
        flex: 1;
    }

    .author-link {
        background: none;
        border: none;
        color: var(--blueOne);
        text-decoration: underline;
        cursor: pointer;
        padding: 0;
        font-size: 0.9rem;
        white-space: nowrap;
    }

    .author-link:hover {
        color: var(--blueTwo);
    }

    .saying-author {
        color: var(--g555);
        font-size: 0.9rem;
        white-space: nowrap;
    }

    .saying-story p {
        color: var(--g555);
        line-height: 1.6;
        margin: 0;
    }

    @media (max-width: 768px) {
        .container {
            padding: 15px;
        }

        .header h1 {
            font-size: 2rem;
        }

        .header p {
            font-size: 1rem;
        }

        .shirts-grid {
            grid-template-columns: 1fr;
        }

        .modal-content {
            margin: 10px;
            max-height: 95vh;
        }

        .modal-header,
        .modal-body {
            padding: 20px;
        }

        .modal-info {
            grid-template-columns: 1fr;
        }

        .saying-header {
            flex-direction: column;
            align-items: flex-start;
        }
    }
</style> 