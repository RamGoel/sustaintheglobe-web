/* eslint-disable @typescript-eslint/no-explicit-any */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC02EYC6C-cBKu026a0vGVVjuV9Bzw6vi8",
  authDomain: "kalakriti-e95b0.firebaseapp.com",
  databaseURL: "https://kalakriti-e95b0-default-rtdb.firebaseio.com",
  projectId: "kalakriti-e95b0",
  storageBucket: "kalakriti-e95b0.appspot.com",
  messagingSenderId: "1033465116600",
  appId: "1:1033465116600:web:f632d426be315594c8414d",
  measurementId: "G-F7PCD6LD02",
};

export let app: any, db: any;

export const initFirebaseApp = () => {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
};
