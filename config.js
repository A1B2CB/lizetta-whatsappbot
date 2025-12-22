import dotenv from 'dotenv';
dotenv.config();

export const config = {
  whatsappNumber: process.env.WHATSAPP_NUMBER || '628xxx',
  ownerNumber: process.env.OWNER_NUMBER || '628xxx',
  ownerName: process.env.OWNER_NAME || 'Owner',
  botName: process.env.BOT_NAME || 'Lizetta',
  apiKey: process.env.API_KEY || '',
  webHook: process.env.WEB_HOOK || 'http://localhost:3000/webhook',
  premiumOnly: process.env.PREMIUM_ONLY === 'true',
  prefix: process.env.PREFIX || '.',
  debug: process.env.DEBUG === 'true',
  restApi: {
    enabled: true,
    port: 3000,
    host: 'localhost'
  },
  database: {
    type: 'sqlite',
    path: './database/bot.db'
  }
};

export default config;