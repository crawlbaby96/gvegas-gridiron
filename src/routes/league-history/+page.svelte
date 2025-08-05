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
        border-bottom: 2px solid #e0e0e0;
    }

    .header h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
        color: #333;
    }

    .header p {
        font-size: 1.2rem;
        color: #666;
        max-width: 600px;
        margin: 0 auto;
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .history-section {
        background: white;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .history-section h2 {
        font-size: 1.8rem;
        margin-bottom: 20px;
        color: #333;
        border-bottom: 2px solid #007bff;
        padding-bottom: 10px;
    }

    .history-section p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #555;
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
        background: linear-gradient(135deg, #007bff, #0056b3);
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
        background: linear-gradient(135deg, #0056b3, #004085);
    }

    .spreadsheet-button .material-icons {
        font-size: 1.3rem;
    }

    .note {
        font-size: 0.9rem;
        color: #888;
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
        background: #f8f9fa;
        border-radius: 8px;
        border-left: 4px solid #007bff;
    }

    .feature .material-icons {
        font-size: 2.5rem;
        color: #007bff;
        margin-bottom: 15px;
    }

    .feature h3 {
        font-size: 1.3rem;
        margin-bottom: 10px;
        color: #333;
    }

    .feature p {
        font-size: 1rem;
        color: #666;
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
        background: #f8f9fa;
        padding: 15px 20px;
        border-radius: 8px;
        border-left: 4px solid #28a745;
        transition: all 0.3s ease;
    }

    .quick-links li:hover {
        background: #e9ecef;
        transform: translateX(5px);
    }

    .quick-links a {
        color: #007bff;
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