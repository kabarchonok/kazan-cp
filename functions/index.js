const functions = require('firebase-functions');
const admin = require('firebase-admin');
const telegraf = require('telegraf');
admin.initializeApp();
const firestore = admin.firestore();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const CHAT_ID = 426125308;


exports.sendNotifications = functions.auth.user().onCreate(_ => {
	const bot = new telegraf.Telegram(functions.config().bot.token);
	return bot.sendMessage(
		CHAT_ID,
		'Новое мероприятие'
	);
});