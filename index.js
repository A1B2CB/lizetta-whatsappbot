import chalk from 'chalk';
import { config } from './config.js';

console.log(chalk.cyan.bold('\n╔════════════════════════════════════╗'));
console.log(chalk.cyan.bold('║'));
console.log(chalk.cyan.bold('║') + chalk.yellow.bold('   Lizetta WhatsApp Bot v1.0.0') + chalk.cyan.bold('║'));
console.log(chalk.cyan.bold('║') + chalk.yellow('   ESM Based WhatsApp Bot Framework') + chalk.cyan.bold('║'));
console.log(chalk.cyan.bold('║'));
console.log(chalk.cyan.bold('╚════════════════════════════════════╝\n'));

console.log(chalk.green('✓ Bot Name: ') + chalk.blue(config.botName));
console.log(chalk.green('✓ Owner Number: ') + chalk.blue(config.ownerNumber));
console.log(chalk.green('✓ Prefix: ') + chalk.blue(config.prefix));
console.log(chalk.green('✓ Debug Mode: ') + chalk.blue(config.debug ? 'ON' : 'OFF'));
console.log(chalk.green('✓ REST API: ') + chalk.blue(config.restApi.enabled ? 'ENABLED' : 'DISABLED'));

if (config.restApi.enabled) {
  console.log(chalk.yellow(`\n📡 REST API Running on http://${config.restApi.host}:${config.restApi.port}\n`));
}

export default config;