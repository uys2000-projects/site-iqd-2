import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpvZHTK0_z8dPnTq_y1F-xBYOk8i87Pgc",
  authDomain: "iqd-test.firebaseapp.com",
  projectId: "iqd-test",
  storageBucket: "iqd-test.appspot.com",
  messagingSenderId: "121329247771",
  appId: "1:121329247771:web:40f11ca1f1cbe0b7b0babe"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export const getDocument = function (collectionName, docName) {
  const docRef = doc(db, collectionName, docName);
  return getDoc(docRef);
};

