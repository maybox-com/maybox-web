const admin = require('./serviceAccountKey'); // This should import serviceAccountKey.js, not the JSON directly

const db = admin.firestore();

module.exports = { admin, db };
