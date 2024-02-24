/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { UserProps } from "../../types/user.types";
import { getDocs, query, collection, where } from "firebase/firestore";
import { db } from "../../utils/firebase";

export const loginUser = (
  email: string,
  password: string,
  callback: (user?: UserProps) => void
) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      console.log(user);
      const querySnapshot = await getDocs(
        query(collection(db, "Users"), where("email", "==", email))
      );

      let docs: UserProps[] = [];
      querySnapshot.forEach((item) => {
        docs.push(item.data() as any);
      });

      if (callback) callback(docs[0]);
    })
    .catch((error) => {
      const errorMessage = error.message;
      toast(errorMessage);
      callback();
    });
};

export const forgotPassword = async (email: string) => {
  try {
    const auth = getAuth();

    await sendPasswordResetEmail(auth, email);

    toast("Please check your inbox for mail!");
  } catch (err: any) {
    toast(err?.message ?? "Some error occured while forgetting password");
  }
};