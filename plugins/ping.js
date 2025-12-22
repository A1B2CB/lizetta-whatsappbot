/**
 * Ping Command Plugin
 * 
 * A simple plugin to check the bot's status and responsiveness.
 * Responds with a pong message and latency information.
 */

const PLUGIN_NAME = 'ping';
const PLUGIN_VERSION = '1.0.0';
const PLUGIN_DESCRIPTION = 'Check bot status and latency';

/**
 * Initialize the ping plugin
 * @param {Object} bot - Bot instance
 * @param {Object} config - Plugin configuration
 */
function init(bot, config) {
  console.log(`[${PLUGIN_NAME}] Plugin initialized`);
}

/**
 * Handle ping command
 * @param {Object} message - Incoming message object
 * @param {string} command - Command name
 * @param {Array} args - Command arguments
 * @param {Object} bot - Bot instance
 * @returns {Promise<void>}
 */
async function handlePing(message, command, args, bot) {
  try {
    const startTime = Date.now();
    
    // Get bot information
    const botInfo = {
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage(),
      timestamp: new Date().toISOString()
    };
    
    // Calculate latency
    const latency = Date.now() - startTime;
    
    // Prepare response message
    const responseMessage = `
🏓 *Pong!*

*Bot Status:* ✅ Online
*Latency:* ${latency}ms
*Uptime:* ${formatUptime(botInfo.uptime)}
*Timestamp:* ${botInfo.timestamp}
*Memory Usage:* ${(botInfo.memoryUsage.heapUsed / 1024 / 1024).toFixed(2)}MB / ${(botInfo.memoryUsage.heapTotal / 1024 / 1024).toFixed(2)}MB
    `.trim();
    
    // Send response
    await bot.sendMessage(message.from, responseMessage, { 
      quoted: message,
      parseMode: 'Markdown'
    });
    
    console.log(`[${PLUGIN_NAME}] Ping command executed - Latency: ${latency}ms`);
  } catch (error) {
    console.error(`[${PLUGIN_NAME}] Error handling ping command:`, error);
    await bot.sendMessage(message.from, '❌ Error checking bot status. Please try again.', { quoted: message });
  }
}

/**
 * Format uptime in human readable format
 * @param {number} seconds - Uptime in seconds
 * @returns {string} Formatted uptime
 */
function formatUptime(seconds) {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  
  if (days > 0) {
    return `${days}d ${hours}h ${minutes}m ${secs}s`;
  } else if (hours > 0) {
    return `${hours}h ${minutes}m ${secs}s`;
  } else if (minutes > 0) {
    return `${minutes}m ${secs}s`;
  }
  return `${secs}s`;
}

/**
 * Cleanup function (optional)
 */
function cleanup() {
  console.log(`[${PLUGIN_NAME}] Plugin cleanup complete`);
}

/**
 * Plugin metadata
 */
const metadata = {
  name: PLUGIN_NAME,
  version: PLUGIN_VERSION,
  description: PLUGIN_DESCRIPTION,
  commands: [
    {
      name: 'ping',
      description: 'Check bot status and latency',
      usage: '!ping',
      aliases: ['status', 'pong']
    }
  ],
  author: 'Bot Developer',
  license: 'MIT'
};

// Export plugin functions and metadata
module.exports = {
  init,
  handlePing,
  cleanup,
  metadata
};
