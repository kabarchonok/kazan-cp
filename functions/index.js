// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
const telegraf = require('telegraf');
const Extra = require('telegraf/extra')

// admin.initializeApp();
// const firestore = admin.firestore();


// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// - заголовок, 
// - фото,
// - шильдик, 
// - описание 5000 символов,
// - ссылка на источник, 
// - инфо об организаторе мероприятия, контакты организатора
// - прикрепленные СМИ
// - даты проведения, 
// - категорию,
// - тэги,
// - требуемые навыки, 
// - статистику просомтров, количество участников - откликнувшихся
// - поделиться, откликнуться, пожаловаться (если ошибки, непотреб или что-то что выявит пользователь)

const opportunity = {
  title: 'Открытый конкурс для детей с ОВЗ «Овация»',
  posterUrl: 'https://221324.selcdn.ru/prod-media/backend/pictures/a167477f261c49b2a6a81d8e57ed140c.large.jpg',
  description: `28 сентября на базе КВЦ «Губернский» в Костроме пройдёт творческий конкурс для детей с ограниченными возможностями здоровья «Овация». 

  Цели конкурса: 
  
  1. Поддержка одарённых детей; рост исполнительных навыков и творческой активности детей
  
  2. Создание инклюзивного творческого пространства, объединяющего детей с ОВЗ, детей-инвалидов и их здоровых сверстников и способствующего раскрытию их творческого потенциала, развитию талантов, культурной самобытности, подготовке детей к независимой жизни в инклюзивном обществе в духе понимания, терпимости, уважения к различиям
  
  3. Активизация деятельности волонтерский организаций и творческих коллективов, которые оказывают помощь детям-инвалидам и создают условия для их социальной интеграции
  
  4. Объединение социально-ориентированных некоммерческих организаций, органов государственной власти, СМИ, общественных объединений на одной творческой площадке`,
  sourceUrl: 'https://добровольцыроссии.рф/organizations/493?event=%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D0%B9-%D0%BA%D0%BE%D0%BD%D0%BA%D1%83%D1%80%D1%81-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D1%82%D0%B5%D0%B9-%D1%81-%D0%BE%D0%B2%D0%B7-%D0%BE%D0%B2%D0%B0%D1%86%D0%B8%D1%8F',
  organization: {
    name: 'Благотворительный фонд "География Добра"',
    contact: {
      phoneNumber: '8-800-222-24-42'
    }
  },
  period: {
    from: '2019-09-28 14:00',
    to: '2019-09-28 20:30',
  },
  category: 'КУЛЬТУРА И ИСКУССТВО',
  place: {
    name: 'КВЦ «Губернский»',
    address: 'Кострома, ул. Депутатская, 49'
  },
  tags: ['Дети', 'Детидетям', 'География Добра', 'Творчество']
};

const CHAT_ID = 426125308;

const options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Хочу участвовать!', callback_data: '1' }],
      [{ text: 'Не интересно', callback_data: 'data 2' }],
      [{ text: 'Рекомендовать другу', callback_data: 'text 3' }]
    ]
  })
}


const bot = new telegraf.Telegram('856450596:AAErXuqKstul1v6nFxNfKEzUk8-W84iBjEE');
	return bot.sendMessage(
  CHAT_ID,
  '<b>Новое мероприятие</b>',
  Extra.HTML().markup(options),
  
);



// exports.recommendOpportunities = functions.firestore.document("opportunities/{opportunityId}")
// .onCreate((snap, context) => {
//   const bot = new telegraf.Telegram(functions.config().bot.token);
// 	return bot.sendMessage(
// 		CHAT_ID,
// 		'Новое мероприятие'
// 	);
// });

  
