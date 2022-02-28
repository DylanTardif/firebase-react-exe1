import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZGtZPR8J_NNqPrZEZDeVf4aypPP0EqRA",
  authDomain: "reactfirebaseexercice.firebaseapp.com",
  projectId: "reactfirebaseexercice",
  storageBucket: "reactfirebaseexercice.appspot.com",
  messagingSenderId: "796330994378",
  appId: "1:796330994378:web:f383b46a73c3ac28592233",
};
// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
