const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const admin=require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp()
require('dotenv').config()


exports.sendEmail = functions.firestore.document('Messages/{docId}')
.onCreate((snap, ctx) => {
    const data = snap.data();

    let authData = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: (`${process.env.SENDER_EMAIL}`),
            pass: (`${process.env.SENDER_PASSWORD}`)
        }
    });
    authData.sendMail({
        from: `${process.env.RECEIVENG_EMAIL}`,
        to: `${process.env.SENDER_EMAIL}`,
        subject: `${data.subject}`,
        text: `${data.message}`,
        html: `Email: ${data.email}<br />Name: ${data.name}<br />Subject: ${data.subject}<br />Message: ${data.message}`,
    }).then(res => console.log(`Successfully sent`))
    .catch(err => console.log(err));
})
