const axios = require('axios');
const { exec } = require('child_process');

module.exports = {
  name: 'help',
  description: 'Display help menu with all available commands',
  pattern: /^\.help$/i,
  public: true,
  async handle(client, chat, args, { from, quoted, body }) {
    try {
      const helpMenu = `
╔════════════════════════════════════════╗
║        🤖 LIZETTA WHATSAPP BOT 🤖      ║
║          HELP & COMMANDS MENU           ║
╚════════════════════════════════════════╝

📋 *GENERAL COMMANDS*
├─ .help - Display this help menu
├─ .ping - Check bot response time
├─ .about - Get information about the bot
└─ .status - Check current bot status

🎵 *MEDIA COMMANDS*
├─ .play <song> - Play music from YouTube
├─ .ytdl <url> - Download video from YouTube
├─ .img <query> - Search and download images
├─ .gif <keyword> - Search and send GIFs
├─ .sticker <image> - Convert image to sticker
└─ .meme - Get a random meme

📝 *TEXT COMMANDS*
├─ .quote - Get a random quote
├─ .joke - Get a random joke
├─ .lyrics <song> - Get song lyrics
├─ .translate <text> - Translate text (use context)
└─ .tts <text> - Convert text to speech

🔧 *UTILITY COMMANDS*
├─ .weather <city> - Check weather
├─ .time <city> - Check time in city
├─ .calc <expression> - Calculate math expression
├─ .qr <text> - Generate QR code
└─ .short <url> - Shorten long URLs

👥 *GROUP COMMANDS*
├─ .kick @user - Remove user from group
├─ .promote @user - Promote user to admin
├─ .demote @user - Demote admin to user
├─ .mute - Mute group (admins only)
├─ .unmute - Unmute group (admins only)
└─ .groupinfo - Get group information

🎮 *FUN COMMANDS*
├─ .dice - Roll a dice
├─ .coin - Flip a coin
├─ .rock - Play rock, paper, scissors
├─ .trivia - Answer trivia questions
└─ .8ball - Ask magic 8-ball

ℹ️ *INFO COMMANDS*
├─ .botinfo - Get bot detailed information
├─ .owner - Get bot owner contact
├─ .version - Check bot version
└─ .uptime - Check how long bot has been running

💡 *TIPS*
• Use commands with or without prefix (. or !)
• Reply to a message and use commands for context
• Some commands require admin privileges
• Report bugs to the bot owner

╔════════════════════════════════════════╗
║  Need more help? Contact: .owner       ║
╚════════════════════════════════════════╝
      `;

      await client.sendMessage(from, {
        text: helpMenu.trim(),
        mentions: [],
      });

      return true;
    } catch (error) {
      console.error('Help command error:', error);
      await client.sendMessage(from, {
        text: '❌ Error displaying help menu. Please try again.',
      });
      return false;
    }
  }
};
