import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebase.auth();
const firebaseFirestore = firebaseApp.firestore();


const firestoreDB = {
  posts: firebaseFirestore.collection('posts'),
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp
}

const firestoreDB1 = {
  form1: firebaseFirestore.collection('form1'),
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp
}




export { firestoreDB1,firestoreDB, firebaseAuth };
