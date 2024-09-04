import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB3WN_Pd6dLwd8chio7O4U0Jx-9lxkTiOo",
  authDomain: "mayboxdb-users.firebaseapp.com",
  projectId: "mayboxdb-users",
  storageBucket: "mayboxdb-users.appspot.com",
  messagingSenderId: "1072722536318",
  appId: "1:1072722536318:web:1d24132e1a11983d90f52f"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export { app, analytics, auth };