import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBaocon7dpJYwfDw3VI1j-pRRxOvANvPFc",
  authDomain: "eco-echo.firebaseapp.com",
  projectId: "eco-echo",
  storageBucket: "eco-echo.appspot.com",
  messagingSenderId: "601713943219",
  appId: "1:601713943219:web:c3ddaff2ef10b0daa3c6c6",
  measurementId: "G-4ZR83RNW0Q",
};

export const initFirebaseApp = () => {
  const app = initializeApp(firebaseConfig);
  return app;
};
