// testFirestore.js
const admin = require('firebase-admin');
const serviceAccount = require('./mayboxdb-62da6-firebase-adminsdk-q0ndm-65b732fd84.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore()

async function addSubscription(userId, planType, startDate, endDate, status) {
  try {
    const docRef = await db.collection('subscriptions').add({
      user_id: userId,
      plan_type: planType,
      start_date: admin.firestore.Timestamp.fromDate(new Date(startDate)),
      end_date: admin.firestore.Timestamp.fromDate(new Date(endDate)),
      status: status,
      created_at: admin.firestore.FieldValue.serverTimestamp(),
    });
    console.log('Subscription added with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding subscription: ', error);
  }
}

// Test the addSubscription function
const testUserId = 'test_user_id';
const testPlanType = 'Monthly';
const testStartDate = '2024-07-01T00:00:00Z';
const testEndDate = '2024-08-01T00:00:00Z';
const testStatus = 'Active';

addSubscription(testUserId, testPlanType, testStartDate, testEndDate, testStatus);
