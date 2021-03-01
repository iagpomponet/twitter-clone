import firebase from "firebase/app";
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2rxlY1wc3Cv1BI_-GvF1lcD05UM9e2To",
  authDomain: "twitter-clone-aea82.firebaseapp.com",
  projectId: "twitter-clone-aea82",
  storageBucket: "twitter-clone-aea82.appspot.com",
  messagingSenderId: "721444961930",
  appId: "1:721444961930:web:e4f8f0e894e8b41d7cb773"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

export const db = firebase.firestore();
