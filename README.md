# Lizetta WhatsApp Bot

A WhatsApp bot built with Lizetta framework for automated messaging and interactions.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Automated WhatsApp messaging
- Conversation management
- Command handling
- User interaction support
- Extensible architecture

## Installation

To install and set up the Lizetta WhatsApp Bot, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/A1B2CB/lizetta-whatsappbot.git
   cd lizetta-whatsappbot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables (see [Configuration](#configuration) section)

4. Start the bot:
   ```bash
   npm start
   ```

## Configuration

Before running the bot, you need to configure the following environment variables:

- `WHATSAPP_API_KEY`: Your WhatsApp API key
- `BOT_TOKEN`: Bot authentication token
- `DATABASE_URL`: Database connection string (optional)
- `LOG_LEVEL`: Logging level (debug, info, warn, error)

Create a `.env` file in the root directory with your configuration:

```
WHATSAPP_API_KEY=your_api_key_here
BOT_TOKEN=your_bot_token_here
LOG_LEVEL=info
```

## Usage

Once the bot is running, you can interact with it via WhatsApp by sending messages to the configured number.

### Basic Commands

- `/help` - Display available commands
- `/status` - Check bot status
- `/about` - Information about the bot

### Examples

```
User: /help
Bot: Available commands:
- /status - Check bot status
- /about - Information about the bot
- /help - Display this message
```

## Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Last Updated**: 2025-12-22 02:34:34 UTC
