<script>
    import { leagueName, loadPlayers } from '$lib/utils/helper';
    import { hallOfFame, hallOfFameCategories, managers } from '$lib/utils/leagueInfo';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    let selectedCategory = $state("All");
    let searchTerm = $state("");
    let selectedInductee = $state(null);
    let showModal = $state(false);
    let players = $state(null);
    let loading = $state(true);

    onMount(async () => {
        const playersData = await loadPlayers(null);
        players = playersData.players;
        loading = false;
    });

    // Filter inductees based on category and search
    let filteredInductees = $derived(hallOfFame.filter(inductee => {
        const matchesCategory = selectedCategory === "All" || inductee.category === selectedCategory;
        const matchesSearch = inductee.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             inductee.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             inductee.years.includes(searchTerm);
        return matchesCategory && matchesSearch;
    }));

    // Get manager info for inductee
    function getManagerInfo(managerID) {
        if (!managerID) return null;
        return managers.find(manager => manager.managerID === managerID);
    }

    // Get player info for featured player
    function getPlayerInfo(playerID) {
        if (!playerID || !players) return null;
        return players[playerID];
    }

    // Open inductee modal
    function openInductee(inductee) {
        selectedInductee = inductee;
        showModal = true;
    }

    // Close modal
    function closeModal() {
        showModal = false;
        selectedInductee = null;
    }

    // Navigate to manager page
    function goToManager(managerID) {
        if (managerID) {
            goto(`/manager?managerID=${managerID}`);
        }
    }
</script>

<svelte:head>
    <title>{leagueName} - Hall of Fame</title>
</svelte:head>

{#if loading}
    <div class="loading-container">
        <div class="loading">
            <p>Loading Hall of Fame...</p>
            <div class="spinner"></div>
        </div>
    </div>
{:else}
    <div class="container">
        <div class="header">
            <h1>🏆 Hall of Fame</h1>
            <p>Celebrating the legends, moments, and achievements that define {leagueName}</p>
        </div>

    <div class="controls">
        <div class="search-section">
            <input 
                type="text" 
                placeholder="Search inductees..." 
                bind:value={searchTerm}
                class="search-input"
            />
        </div>
        
        <div class="filter-section">
            <select bind:value={selectedCategory} class="category-select">
                {#each hallOfFameCategories as category}
                    <option value={category}>{category}</option>
                {/each}
            </select>
        </div>
    </div>

    <div class="inductees-grid">
        {#each filteredInductees as inductee}
            <div class="inductee-card" onclick={() => openInductee(inductee)}>
                <div class="inductee-image">
                    <img src={inductee.image} alt={inductee.title} />
                    <div class="inductee-overlay">
                        <span class="material-icons">visibility</span>
                    </div>
                </div>
                
                <div class="inductee-content">
                    <div class="inductee-header">
                        <h3>{inductee.title}</h3>
                        <span class="inductee-years">{inductee.years}</span>
                    </div>
                    
                    <div class="inductee-category">
                        <span class="category-badge">{inductee.category}</span>
                    </div>
                    
                    <p class="inductee-description">
                        {inductee.description.length > 150 
                            ? inductee.description.substring(0, 150) + '...' 
                            : inductee.description}
                    </p>
                    
                    <div class="inductee-footer">
                        <span class="inducted-year">Inducted {inductee.inductedYear}</span>
                        {#if inductee.managerID}
                            {@const manager = getManagerInfo(inductee.managerID)}
                            {#if manager}
                                <span class="manager-name" onclick={(e) => { e.stopPropagation(); goToManager(inductee.managerID); }}>
                                    {manager.name}
                                </span>
                            {/if}
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>

    {#if filteredInductees.length === 0}
        <div class="no-results">
            <span class="material-icons">search_off</span>
            <h3>No inductees found</h3>
            <p>Try adjusting your search or filter criteria</p>
        </div>
    {/if}
    </div>
{/if}

<!-- Inductee Modal -->
{#if showModal && selectedInductee}
    <div class="modal-overlay" onclick={closeModal}>
        <div class="modal-content" onclick={(e) => e.stopPropagation()}>
            <div class="modal-header">
                <h2>{selectedInductee.title}</h2>
                <button class="close-button" onclick={closeModal}>
                    <span class="material-icons">close</span>
                </button>
            </div>
            
            <div class="modal-body">
                <div class="modal-image">
                    <img src={selectedInductee.image} alt={selectedInductee.title} />
                </div>
                
                <div class="modal-info">
                    <div class="info-row">
                        <span class="info-label">Years:</span>
                        <span class="info-value">{selectedInductee.years}</span>
                    </div>
                    
                    <div class="info-row">
                        <span class="info-label">Category:</span>
                        <span class="info-value">
                            <span class="category-badge">{selectedInductee.category}</span>
                        </span>
                    </div>
                    
                    <div class="info-row">
                        <span class="info-label">Inducted:</span>
                        <span class="info-value">{selectedInductee.inductedYear}</span>
                    </div>
                    
                    {#if selectedInductee.managerID}
                        {@const manager = getManagerInfo(selectedInductee.managerID)}
                        {#if manager}
                            <div class="info-row">
                                <span class="info-label">Manager:</span>
                                <span class="info-value">
                                    <button class="manager-link" onclick={() => goToManager(selectedInductee.managerID)}>
                                        {manager.name}
                                    </button>
                                </span>
                            </div>
                        {/if}
                    {/if}
                    
                    {#if selectedInductee.featuredPlayer}
                        {@const player = getPlayerInfo(selectedInductee.featuredPlayer)}
                        {#if player}
                            <div class="info-row">
                                <span class="info-label">Featured Player:</span>
                                <span class="info-value">
                                    <span class="player-name" style="color: var(--{player.pos})">
                                        {player.first_name} {player.last_name} ({player.pos})
                                    </span>
                                </span>
                            </div>
                        {/if}
                    {/if}
                </div>
                
                <div class="modal-description">
                    <h4>Description</h4>
                    <p>{selectedInductee.description}</p>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    .loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 60vh;
    }

    .loading {
        text-align: center;
        color: var(--g555);
    }

    .loading p {
        margin-bottom: 20px;
        font-size: 1.2rem;
    }

    .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid var(--ddd);
        border-top: 4px solid var(--blueOne);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

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
        display: flex;
        gap: 20px;
        margin-bottom: 30px;
        flex-wrap: wrap;
    }

    .search-section {
        flex: 1;
        min-width: 250px;
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

    .filter-section {
        min-width: 200px;
    }

    .category-select {
        width: 100%;
        padding: 12px 16px;
        border: 2px solid var(--ddd);
        border-radius: 8px;
        background: var(--fff);
        color: var(--g000);
        font-size: 1rem;
        cursor: pointer;
    }

    .inductees-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 25px;
        margin-bottom: 40px;
    }

    .inductee-card {
        background: var(--fff);
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0px 3px 3px -2px var(--boxShadowOne), 0px 3px 4px 0px var(--boxShadowTwo), 0px 1px 8px 0px var(--boxShadowThree);
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .inductee-card:hover {
        transform: translateY(-5px);
        box-shadow: 0px 8px 8px -4px var(--boxShadowOne), 0px 8px 12px 0px var(--boxShadowTwo), 0px 4px 16px 0px var(--boxShadowThree);
    }

    .inductee-image {
        position: relative;
        height: 200px;
        overflow: hidden;
    }

    .inductee-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center 30%;
    }

    .inductee-overlay {
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

    .inductee-card:hover .inductee-overlay {
        opacity: 1;
    }

    .inductee-overlay .material-icons {
        color: white;
        font-size: 2rem;
    }

    .inductee-content {
        padding: 20px;
    }

    .inductee-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 10px;
    }

    .inductee-header h3 {
        font-size: 1.3rem;
        color: var(--g000);
        margin: 0;
        flex: 1;
    }

    .inductee-years {
        font-size: 0.9rem;
        color: var(--g555);
        font-weight: 600;
        background: var(--f8f8f8);
        padding: 4px 8px;
        border-radius: 4px;
    }

    .inductee-category {
        margin-bottom: 15px;
    }

    .category-badge {
        background: var(--blueOne);
        color: white;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
    }

    .inductee-description {
        color: var(--g555);
        line-height: 1.5;
        margin-bottom: 15px;
    }

    .inductee-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.9rem;
    }

    .inducted-year {
        color: var(--g999);
    }

    .manager-name {
        color: var(--blueOne);
        cursor: pointer;
        text-decoration: underline;
    }

    .manager-name:hover {
        color: var(--blueTwo);
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
        max-width: 800px;
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

    .manager-link {
        background: none;
        border: none;
        color: var(--blueOne);
        text-decoration: underline;
        cursor: pointer;
        padding: 0;
        font-size: inherit;
    }

    .manager-link:hover {
        color: var(--blueTwo);
    }

    .player-name {
        font-weight: 600;
    }

    .modal-description h4 {
        color: var(--g000);
        margin-bottom: 15px;
    }

    .modal-description p {
        color: var(--g555);
        line-height: 1.6;
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

        .controls {
            flex-direction: column;
        }

        .inductees-grid {
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
    }
</style> 