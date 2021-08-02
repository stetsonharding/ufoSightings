import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain: "ufosightings-8bf2a.firebaseapp.com",
  databaseURL: "https://ufosightings-8bf2a-default-rtdb.firebaseio.com",
  projectId: "ufosightings-8bf2a",
  storageBucket: "ufosightings-8bf2a.appspot.com",
  messagingSenderId: "37894039486",
  appId: "1:37894039486:web:8b281f906286bca12f7bef",
  measurementId: "G-89MW7TVG9P",
};

firebase.initializeApp(config);

export default firebase;
