import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCS5MpMkzyQ3fE-OM0RVtvzgRTkDuXoyWg",
  authDomain: "sustaintheglobe-db1b9.firebaseapp.com",
  projectId: "sustaintheglobe-db1b9",
  storageBucket: "sustaintheglobe-db1b9.appspot.com",
  messagingSenderId: "609215970977",
  appId: "1:609215970977:web:9ca180d51e4fe18d583ae0",
};

export const initFirebaseApp = () => {
  const app = initializeApp(firebaseConfig);
  return app;
};
