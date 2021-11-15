import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyB0h50tudTrxNHQFm22P6uHg1AlmJg4EYw",
  authDomain: "unichat-8390b.firebaseapp.com",
  projectId: "unichat-8390b",
  storageBucket: "unichat-8390b.appspot.com",
  messagingSenderId: "537583530971",
  appId: "1:537583530971:web:749aece1c1388ee7812dfe"
}).auth()
