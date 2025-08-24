<script>
  // Set the launch date (you can adjust this)
  const launchDate = new Date('2025-01-15T00:00:00').getTime();
  
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;
    
    if (distance > 0) {
      timeLeft = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }
  
  // Update countdown every second
  setInterval(updateCountdown, 1000);
  updateCountdown();
</script>

<svelte:head>
  <title>G-Vegas Gridiron - Coming Soon</title>
  <meta name="description" content="G-Vegas Gridiron Fantasy Football League - Coming Soon" />
</svelte:head>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    color: white;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .container {
    max-width: 600px;
    padding: 2rem;
  }
  
  .logo {
    width: 120px;
    height: 120px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    margin: 0 auto 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    font-weight: bold;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }
  
  .subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
  
  .description {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 3rem;
    opacity: 0.8;
  }
  
  .countdown {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .countdown-item {
    text-align: center;
  }
  
  .countdown-number {
    font-size: 2.5rem;
    font-weight: bold;
    display: block;
  }
  
  .countdown-label {
    font-size: 0.9rem;
    opacity: 0.8;
  }
  
  .social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  
  .social-link {
    padding: 0.75rem 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 25px;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease;
  }
  
  .social-link:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
  
  .launched {
    font-size: 2rem;
    font-weight: bold;
    margin: 2rem 0;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    
    .subtitle {
      font-size: 1.2rem;
    }
    
    .countdown {
      gap: 1rem;
    }
    
    .countdown-number {
      font-size: 2rem;
    }
  }
</style>

<div class="container">
  <div class="logo">🏈</div>
  <h1>G-Vegas Gridiron</h1>
  <div class="subtitle">Fantasy Football League</div>
  <div class="description">
    Our new league website is under construction. We're working hard to bring you the ultimate fantasy football experience with live stats, team management, and more!
  </div>
  
  {#if timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0}
    <div class="countdown">
      <div class="countdown-item">
        <span class="countdown-number">{timeLeft.days.toString().padStart(2, '0')}</span>
        <span class="countdown-label">Days</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-number">{timeLeft.hours.toString().padStart(2, '0')}</span>
        <span class="countdown-label">Hours</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-number">{timeLeft.minutes.toString().padStart(2, '0')}</span>
        <span class="countdown-label">Minutes</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-number">{timeLeft.seconds.toString().padStart(2, '0')}</span>
        <span class="countdown-label">Seconds</span>
      </div>
    </div>
  {:else}
    <div class="launched">We're Live! 🎉</div>
  {/if}
  
  <div class="social-links">
    <a href="#" class="social-link">Discord</a>
    <a href="#" class="social-link">Sleeper</a>
    <a href="#" class="social-link">Contact</a>
  </div>
</div>