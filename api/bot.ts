import dotenv from 'dotenv';
import { Bot } from 'grammy';

dotenv.config();

const token = process.env.BOT_TOKEN;
if (!token) {
    console.error('❌ BOT_TOKEN не найден в .env');
    process.exit(1);
}

const bot = new Bot(token);

// Команды
bot.command('start', async (ctx) => {
    await ctx.reply('✅ Бот работает на TypeScript!');
});

bot.command('ping', async (ctx) => {
    await ctx.reply('🏓 Pong!');
});

// Эхо
bot.on('message:text', async (ctx) => {
    await ctx.reply(`Вы: ${ctx.message.text}`);
});

// Запуск
bot.start();
console.log('🤖 Бот запущен!');