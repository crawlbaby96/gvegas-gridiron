<script>
    import { leagueName } from '$lib/utils/helper';
    import { leagueID } from '$lib/utils/leagueInfo';
</script>

<svelte:head>
    <title>{leagueName} - League History</title>
</svelte:head>

<div class="container">
    <div class="header">
        <h1>League History</h1>
        <p>Explore the rich history of {leagueName} through our comprehensive records and statistics.</p>
    </div>

    <div class="content">
        <div class="history-section">
            <h2>League Records & Statistics</h2>
            <p>
                Our league has been tracking detailed statistics and records since our founding. 
                From season standings to individual manager achievements, you can find it all in our 
                comprehensive league history spreadsheet.
            </p>
            
            <div class="spreadsheet-link">
                <a 
                    href="https://docs.google.com/spreadsheets/d/1Xi1pt_NxaGZK6aJHJvq1WXV56_a8bOcVG1or9mOm-ZQ/edit?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="spreadsheet-button"
                >
                    <span class="material-icons">table_chart</span>
                    View League History Spreadsheet
                </a>
                <p class="note">Opens in a new tab</p>
            </div>
        </div>

        <div class="history-section">
            <h2>What's Included</h2>
            <div class="features-grid">
                <div class="feature">
                    <span class="material-icons">leaderboard</span>
                    <h3>Season Standings</h3>
                    <p>Complete year-by-year standings and playoff results</p>
                </div>
                <div class="feature">
                    <span class="material-icons">emoji_events</span>
                    <h3>Championship History</h3>
                    <p>Track of all league champions and their achievements</p>
                </div>
                <div class="feature">
                    <span class="material-icons">groups</span>
                    <h3>Manager Records</h3>
                    <p>Individual manager statistics and performance history</p>
                </div>
                <div class="feature">
                    <span class="material-icons">military_tech</span>
                    <h3>League Records</h3>
                    <p>All-time records and milestone achievements</p>
                </div>
            </div>
        </div>

        <div class="history-section">
            <h2>Quick Access</h2>
            <p>
                While the spreadsheet contains our complete historical data, you can also explore 
                specific aspects of our league history through the navigation menu:
            </p>
            <ul class="quick-links">
                <li><a href="/awards">🏆 Trophy Room</a> - View championship history and awards</li>
                <li><a href="/records">📊 Records</a> - All-time league records and statistics</li>
                <li><a href="/managers">👥 Managers</a> - Current and past manager information</li>
                <li><a href="/standings">📈 Standings</a> - Current season standings</li>
            </ul>
        </div>
    </div>
</div>

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

    .content {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .history-section {
        background: var(--fff);
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0px 3px 3px -2px var(--boxShadowOne), 0px 3px 4px 0px var(--boxShadowTwo), 0px 1px 8px 0px var(--boxShadowThree);
    }

    .history-section h2 {
        font-size: 1.8rem;
        margin-bottom: 20px;
        color: var(--g000);
        border-bottom: 2px solid var(--blueOne);
        padding-bottom: 10px;
    }

    .history-section p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--g555);
        margin-bottom: 20px;
    }

    .spreadsheet-link {
        text-align: center;
        margin: 30px 0;
    }

    .spreadsheet-button {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        background: linear-gradient(135deg, var(--blueOne), var(--blueTwo));
        color: white;
        padding: 15px 30px;
        border-radius: 8px;
        text-decoration: none;
        font-size: 1.1rem;
        font-weight: 600;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
    }

    .spreadsheet-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
        background: linear-gradient(135deg, var(--blueTwo), var(--blueOne));
    }

    .spreadsheet-button .material-icons {
        font-size: 1.3rem;
    }

    .note {
        font-size: 0.9rem;
        color: var(--g999);
        margin-top: 10px;
        font-style: italic;
    }

    .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }

    .feature {
        text-align: center;
        padding: 20px;
        background: var(--f8f8f8);
        border-radius: 8px;
        border-left: 4px solid var(--blueOne);
    }

    .feature .material-icons {
        font-size: 2.5rem;
        color: var(--blueOne);
        margin-bottom: 15px;
    }

    .feature h3 {
        font-size: 1.3rem;
        margin-bottom: 10px;
        color: var(--g000);
    }

    .feature p {
        font-size: 1rem;
        color: var(--g555);
        line-height: 1.5;
    }

    .quick-links {
        list-style: none;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 15px;
    }

    .quick-links li {
        background: var(--f8f8f8);
        padding: 15px 20px;
        border-radius: 8px;
        border-left: 4px solid var(--blueOne);
        transition: all 0.3s ease;
    }

    .quick-links li:hover {
        background: var(--eee);
        transform: translateX(5px);
    }

    .quick-links a {
        color: var(--blueOne);
        text-decoration: none;
        font-weight: 600;
    }

    .quick-links a:hover {
        text-decoration: underline;
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

        .history-section {
            padding: 20px;
        }

        .features-grid {
            grid-template-columns: 1fr;
        }

        .quick-links {
            grid-template-columns: 1fr;
        }
    }
</style> 