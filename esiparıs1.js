const admin = require("firebase-admin");
const serviceAccount = require("/Users/basargorgundur/Downloads/e-siparis1-firebase-adminsdk-fbsvc-95c035acc9.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
