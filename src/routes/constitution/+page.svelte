<script>
    import { dues } from '$lib/utils/helper';

    let one, oneOne, oneOneOne, oneTwo, oneTwoOne, oneTwoTwo, oneTwoThree, oneTwoFour, oneTwoFive, oneThree;
    let two, twoOne, twoTwo, twoThree;
    let three, threeOne;
    let four, fourOne, fourTwo;
    let five, fiveOne;
    let six, sixOne, sixTwo, sixThree;
    let seven, sevenOne, sevenTwo, sevenThree;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ left: 0, top, behavior: 'smooth' });
    }
</script>

<style>
    /* Ensure the entire page is filled with the iframe and it's centered */
    html, body {
        height: 100%;
        margin: 0;
    }

    

    .constitution {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: right;
        width: 100vw;
        height: 90vh;
        margin: 0;
        padding: 0;
    }

    .google-doc-embed {
        width: 100%;
        height: 90%;
    }

    .google-doc-embed iframe {
        width: 100%;
        height: 100%;
        border: 2px solid green;
    }
     
    /* Optional: Add CSS to ensure the embedded doc takes up full space */
    .google-doc-embed iframe {
        zoom: 1.3; /* Adjust the zoom level to ensure it looks full-screen */
        transform: scale(1.0);
        transform-origin: top right;
    }
     .title {
        font-size: 2em;
        text-align: center;
        margin-bottom: 10px;
        font-family: sans-serif;
        color: #00316b;
    }
</style>

<div class="constitution">
    <h1 class="title">G-Vegas Gridiron</h1>

    <div class="google-doc-embed">
        <iframe src="https://docs.google.com/document/d/1QvbwNAI5z6j0ghQEzkZtkdGeN9z0un4L1CHH6TR0hek/pub?embedded=true"></iframe>
    
    
    </div>
</div>















