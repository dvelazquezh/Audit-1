import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyC0orYyEwmmP-6SootAYIF0Poq0kvs3lJM",
    authDomain: "auditas-3eea6.firebaseapp.com",
    projectId: "auditas-3eea6",
    storageBucket: "auditas-3eea6.appspot.com",
    messagingSenderId: "177831583103",
    appId: "1:177831583103:web:2d81e65aa21254e467ce4a",
    measurementId: "G-DWGG3GRCG0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  export {
      db,
      googleAuthProvider,
      firebase
  }