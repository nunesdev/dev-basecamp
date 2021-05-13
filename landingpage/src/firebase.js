import firebase from 'firebase/app';
import 'firebase/firestore'

// firebase init - add your own config here
var firebaseConfig = {
  apiKey: "AIzaSyCDcXxd4nDLWhgeSNanaEAlGDAJ9uvh2LU",
  authDomain: "basecamp-f6a47.firebaseapp.com",
  projectId: "basecamp-f6a47",
  storageBucket: "basecamp-f6a47.appspot.com",
  messagingSenderId: "997614542810",
  appId: "1:997614542810:web:bc1b673e95291f30712ae3",
  measurementId: "G-KX6KYFL1FW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

// utils
const db = firebase.firestore()
// const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')

// export utils/refs
export {
  db,
  // auth,
  usersCollection
}