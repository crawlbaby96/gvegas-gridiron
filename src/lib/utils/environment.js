// Environment configuration for different deployment targets
export const environment = {
  // Detect environment based on environment variables and URL
  isProduction: typeof window !== 'undefined' 
    ? window.location.hostname === 'gvegas-gridiron.com' ||
      window.location.hostname === 'www.gvegas-gridiron.com' ||
      (process.env.NODE_ENV === 'production' && !window.location.hostname.includes('staging') && !window.location.hostname.includes('preview'))
    : process.env.NODE_ENV === 'production',
  
  isStaging: typeof window !== 'undefined'
    ? window.location.hostname.includes('staging') ||
      window.location.hostname.includes('preview') ||
      (window.location.hostname.includes('vercel.app') && !window.location.hostname.includes('gvegas-gridiron.com')) ||
      process.env.NODE_ENV === 'staging'
    : process.env.NODE_ENV === 'staging',
  
  // Environment-specific settings
  settings: {
    production: {
      apiBaseUrl: 'https://api.sleeper.app',
      enableAnalytics: true,
      enableDebug: false,
      siteName: 'Gvegas Gridiron'
    },
    staging: {
      apiBaseUrl: 'https://api.sleeper.app',
      enableAnalytics: false,
      enableDebug: true,
      siteName: 'Gvegas Gridiron (Staging)'
    },
    development: {
      apiBaseUrl: 'https://api.sleeper.app',
      enableAnalytics: false,
      enableDebug: true,
      siteName: 'Gvegas Gridiron (Dev)'
    }
  }
};

// Get current environment settings
export function getCurrentSettings() {
  if (environment.isProduction) {
    return environment.settings.production;
  } else if (environment.isStaging) {
    return environment.settings.staging;
  } else {
    return environment.settings.development;
  }
}

// Helper function to check if we're in production
export function isProduction() {
  return environment.isProduction;
}

// Helper function to check if we're in staging
export function isStaging() {
  return environment.isStaging;
} 