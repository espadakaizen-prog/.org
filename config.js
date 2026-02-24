// Discord OAuth Configuration
// Get these values from Discord Developer Portal: https://discord.com/developers/applications

const CONFIG = {
    // Replace with your Discord Application ID
    CLIENT_ID: '1473422909610655927',
    
    // Replace with your Discord Application Secret
    CLIENT_SECRET: 'iFDSu6dqXgenNfByCvBFOEDJ91lS2YRO',
    
    // Redirect URI (must match Discord app settings)
    REDIRECT_URI: 'http://localhost:3000/callback',
    
    // Discord API endpoints
    DISCORD_API_BASE: 'https://discord.com/api/v10',
    DISCORD_OAUTH_URL: 'https://discord.com/api/oauth2/authorize',
    
    // Scopes requested from Discord
    SCOPES: ['identify', 'email'],
    
    // Local storage keys
    STORAGE_KEYS: {
        ACCESS_TOKEN: 'discord_access_token',
        USER_DATA: 'discord_user_data',
        SELECTED_DECORATIONS: 'selected_decorations'
    }
};

// Available decorations in the system
const DECORATIONS = [
    { id: 'snow', icon: '❄️', name: 'Snow' },
    { id: 'stars', icon: '⭐', name: 'Stars' },
    { id: 'hearts', icon: '❤️', name: 'Hearts' },
    { id: 'flowers', icon: '🌸', name: 'Flowers' },
    { id: 'bubbles', icon: '🫧', name: 'Bubbles' },
    { id: 'fireworks', icon: '🎆', name: 'Fireworks' },
    { id: 'rain', icon: '🌧️', name: 'Rain' },
    { id: 'lightning', icon: '⚡', name: 'Lightning' },
    { id: 'confetti', icon: '🎉', name: 'Confetti' },
    { id: 'leaves', icon: '🍂', name: 'Leaves' }
];
