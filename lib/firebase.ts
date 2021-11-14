import firebase, { FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC23Dy9xoPW_LtQ52c00beKLmIEHAcVeR0",
  authDomain: "wlf-blog.firebaseapp.com",
  projectId: "wlf-blog",
  storageBucket: "wlf-blog.appspot.com",
  messagingSenderId: "15256714126",
  appId: "1:15256714126:web:6e9b1917d122c846c982df",
  measurementId: "G-F9HLMQ1FW3"
};

let app: FirebaseApp;
if (!firebase.getApps().length) {
  app = firebase.initializeApp(firebaseConfig);
}

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
