import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDFguPEErcw6G3w1hXizvKTyufNfvBVK8Q",
  authDomain: "whatsapp-clone-87476.firebaseapp.com",
  projectId: "whatsapp-clone-87476",
  storageBucket: "whatsapp-clone-87476.appspot.com",
  messagingSenderId: "482803002119",
  appId: "1:482803002119:web:ebd07a747f5a61bc5c73a2",
  measurementId: "G-EFR95YZQ6Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
