import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBnIlAuuSk8JPxyXWOtCFpapbR50MP0tM0",
  authDomain: "media-bank-c0652.firebaseapp.com",
  databaseURL: "https://media-bank-c0652.firebaseio.com",
  projectId: "media-bank-c0652",
  storageBucket: "media-bank-c0652.appspot.com",
  messagingSenderId: "81249399631",
  appId: "1:81249399631:web:f59b205540584a74790b3a",
  measurementId: "G-X3JH01VX0G"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true });

//export firestore

export default firebaseApp.firestore();
