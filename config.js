import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAbKCIhuNQjfGlLInqCZiP24sRuG7rIgys",
    authDomain: "booksanta-1c16d.firebaseapp.com",
    databaseURL: "https://booksanta-1c16d.firebaseio.com",
    projectId: "booksanta-1c16d",
    storageBucket: "booksanta-1c16d.appspot.com",
    messagingSenderId: "636952664909",
    appId: "1:636952664909:web:a7ab050853c6841cfa3504",
    measurementId: "G-2H42R7QHTF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();