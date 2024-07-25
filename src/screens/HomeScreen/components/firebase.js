import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; 
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAO0MgospWm_qWWLGnC2L5o-4jFcc3fWew",
  authDomain: "netflix-clone-90dbf.firebaseapp.com",
  projectId: "netflix-clone-90dbf",
  storageBucket: "netflix-clone-90dbf.appspot.com",
  messagingSenderId: "797189419300",
  appId: "1:797189419300:web:3f2d520af3ccf36ad203b1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

