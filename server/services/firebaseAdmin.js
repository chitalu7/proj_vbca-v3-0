// Import SDK and initialize project's service account credentials

const admin = require('firebase-admin');


admin.initializeApp({
});

const db = admin.database();

module.exports = db;
