/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export const createUser = (userData: any, callback: () => void) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, userData.email, userData.password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      if (callback) callback();
    })
    .catch((error) => {
      const errorMessage = error.message;
      toast(errorMessage);
    });
};
