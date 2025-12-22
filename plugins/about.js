const { MessageType } = require("@adiwajshing/baileys");

module.exports = {
  name: "about",
  alias: ["info", "bot"],
  description: "Display bot information",
  category: "utility",
  
  execute: async (client, message, args) => {
    const botName = "Lizetta WhatsApp Bot";
    const botVersion = "1.0.0";
    const owner = "A1B2CB";
    const description = "A powerful WhatsApp bot with various commands and features";
    
    const aboutText = `
╔════════════════════════════════════╗
║        🤖 BOT INFORMATION 🤖       ║
╚════════════════════════════════════╝

📱 Bot Name: ${botName}
📦 Version: ${botVersion}
👤 Owner: ${owner}

📝 Description:
${description}

✨ Features:
• Command-based system
• Plugin support
• User-friendly interface
• Multiple utilities

🔗 Commands:
Use .help to view all available commands

⏰ Current Time (UTC): ${new Date().toISOString().replace('T', ' ').slice(0, 19)}

═══════════════════════════════════════
`;

    try {
      await client.sendMessage(
        message.from,
        aboutText,
        MessageType.text
      );
    } catch (error) {
      console.error("Error in about command:", error);
      await client.sendMessage(
        message.from,
        "❌ Error: Could not send bot information",
        MessageType.text
      );
    }
  }
};
