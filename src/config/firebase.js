import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCMB_C2BpGG7C0AH3kz7L4vl1oLYMO-sn8",
  authDomain: "guarana-todo-app.firebaseapp.com",
  projectId: "guarana-todo-app",
  storageBucket: "guarana-todo-app.appspot.com",
  messagingSenderId: "262167204458",
  appId: "1:262167204458:web:1b6732c312d612ef167013"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);