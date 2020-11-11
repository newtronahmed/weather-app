 import * as firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDfc6AFouBH8Qnn5T1-fnl2dYGjbw_ENm4",
    authDomain: "image-gallery-firebase-4ebcc.firebaseapp.com",
    databaseURL: "https://image-gallery-firebase-4ebcc.firebaseio.com",
    projectId: "image-gallery-firebase-4ebcc",
    storageBucket: "image-gallery-firebase-4ebcc.appspot.com",
    messagingSenderId: "51388944288",
    appId: "1:51388944288:web:d989403286058cd3dd5ec5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  const firestore = firebase.firestore();
  // create a firebase timestamp
  const timestamp =  firebase.firestore.FieldValue.serverTimestamp
  export {storage,firestore,timestamp};