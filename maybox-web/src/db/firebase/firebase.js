import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDtQkWGqHT5DIHkKmk5KuuqN6o93IqA2Yw",
  authDomain: "mayboxdb-62da6.firebaseapp.com",
  projectId: "mayboxdb-62da6",
  storageBucket: "mayboxdb-62da6.appspot.com",
  messagingSenderId: "117943328742",
  appId: "1:117943328742:web:ce37ff7c82d1fd0f8c8027"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export { db };