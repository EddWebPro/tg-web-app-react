const TelegramBot = require('node-telegram-bot-api');

const token = '7488084544:AAE2cb49874c7I9zhUD0fv90dAA1tD8Hpp4'
const webAppUrl = 'https://main--dulcet-liger-a5df91.netlify.app/'

const bot = new TelegramBot(token, {polling: true});


bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if(text === '/start'){
    await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
        reply_markup: {
            keyboard: [
                [{text: 'Заполни форму', web_app: {url: webAppUrl}}]
            ]
        }
   });

   await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
        reply_markup: {
            inline_keyboard: [
                [{text: 'Заполни форму', web_app: {url: webAppUrl}}]
            ]
        }
   });
  }
});

const tg = Telegram.WebApp;

tg.BackButton.show();

tg.BackButton.isVisible;

const goBack = () => {
};

tg.BackButton.onClick(goBack);

tg.BackButton.offClick(goBack);

tg.BackButton.hide();


