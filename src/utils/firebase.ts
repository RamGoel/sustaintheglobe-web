/* eslint-disable @typescript-eslint/no-explicit-any */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCS5MpMkzyQ3fE-OM0RVtvzgRTkDuXoyWg",
  authDomain: "sustaintheglobe-db1b9.firebaseapp.com",
  projectId: "sustaintheglobe-db1b9",
  storageBucket: "sustaintheglobe-db1b9.appspot.com",
  messagingSenderId: "609215970977",
  appId: "1:609215970977:web:9ca180d51e4fe18d583ae0",
};

export let app: any, db: any;

export const initFirebaseApp = () => {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
};
