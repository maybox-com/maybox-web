// testFirestore.js
const admin = require('firebase-admin');
const serviceAccount = require('./mayboxdb-62da6-firebase-adminsdk-q0ndm-65b732fd84.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function addTestPreferences() {
  try {
    const docRef = await db.collection('preferences').add({
      user_id: 'test_user_id',
      beauty_preferences: 'Natural products',
      wellness_preferences: 'Yoga, Meditation',
      selfcare_preferences: 'Daily skincare routine',
      updated_at: admin.firestore.FieldValue.serverTimestamp(),
    });

    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
}

addTestPreferences();
