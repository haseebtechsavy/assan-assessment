import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
const firebaseConfig = { 
 
    apiKey: "AIzaSyAH425Y8p9kffocG8Q3XJyAtglWwUqxwiw",
    authDomain: "asaan-assessment.firebaseapp.com",
    databaseURL: "https://asaan-assessment-default-rtdb.firebaseio.com",
    projectId: "asaan-assessment",
    storageBucket: "asaan-assessment.appspot.com",
    messagingSenderId: "951429100222",
    appId: "1:951429100222:web:7c10e293e74b847fcbe4ef"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the Firebase Realtime Database
  const db = firebase.database();

  export default db;