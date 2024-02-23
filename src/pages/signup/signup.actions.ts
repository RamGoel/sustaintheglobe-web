/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { v4 as uuid } from "uuid";
import { UserProps } from "../../types/user.types";

export const createUser = (userData: any, callback: (_id?: string) => void) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, userData.email, userData.password)
    .then(async () => {
      const docId = uuid();
      const user: UserProps = {
        ...userData,
        userID: docId,
        currentTasks: [],
        completedTasks: [],
        points: 0,
        posts: [],
        followers: [],
        badges: [],
        gender: [],
        location: null,
        streak: "",
        username: "",
        profileComplete: false,
      };
      setDoc(doc(db, "Users", docId), user)
        .then(() => {
          if (callback) callback(docId);
        })
        .catch((err: any) => {
          toast.success(err.message ?? "Error creating account");
          callback();
        });
    })
    .catch((error) => {
      const errorMessage = error.message;
      toast(errorMessage);
      callback();
    });
};
