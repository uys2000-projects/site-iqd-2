import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDpvZHTK0_z8dPnTq_y1F-xBYOk8i87Pgc",
  authDomain: "iqd-test.firebaseapp.com",
  projectId: "iqd-test",
  storageBucket: "iqd-test.appspot.com",
  messagingSenderId: "121329247771",
  appId: "1:121329247771:web:40f11ca1f1cbe0b7b0babe"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const createuser = function() {
    createUserWithEmailAndPassword(auth, "admin@admin.com", "123456")
}