import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpvZHTK0_z8dPnTq_y1F-xBYOk8i87Pgc",
  authDomain: "iqd-test.firebaseapp.com",
  projectId: "iqd-test",
  storageBucket: "iqd-test.appspot.com",
  messagingSenderId: "121329247771",
  appId: "1:121329247771:web:40f11ca1f1cbe0b7b0babe"
};


const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

storage;
db;

export const sign = function (email, pass) {
  return signInWithEmailAndPassword(auth, email, pass);
};

export const getDocument = function (collection, document) {
  const docRef = doc(db, collection, document);
  return getDoc(docRef);
};

export const setDocument = function (collection, document, data) {
  const docRef = doc(db, collection, document);
  return setDoc(docRef, data);
};
export const delDocument = function (collection, document) {
  const docRef = doc(db, collection, document);
  return deleteDoc(docRef);
};

export const uploadImage = function (
  collectionName,
  docName,
  imageFile,
  extension
) {
  const refImage = ref(
    storage,
    `${collectionName}/${docName}/headerImage.${extension}`
  );
  return uploadBytes(refImage, imageFile);
};

export const getImage = function (imageAdress) {
  if (imageAdress) {
    const refImage = ref(storage, imageAdress);
    return getDownloadURL(refImage);
  }
};
