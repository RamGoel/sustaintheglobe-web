/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import {
  getDocs,
  query,
  collection,
  where,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../utils/firebase";
import { PostProps } from "../types/posts.types";
import { toast } from "react-toastify";

export const fetchCompleteUserData = async (userId: string) => {
  if (!userId) return;

  let finalUser;

  const userSnapshot = await getDoc(doc(db, "Users", userId));

  if (userSnapshot.exists()) {
    finalUser = userSnapshot.data();
  } else {
    toast("User not found!");
    return;
  }

  const userPostSnapshot = await getDocs(
    query(collection(db, "Posts"), where("userID", "==", userId))
  );
  const userPostDocs: PostProps[] = [];

  userPostSnapshot.forEach((item) => {
    userPostDocs.push({
      ...item.data(),
      user: finalUser,
    } as any);
  });

  finalUser.posts = userPostDocs;

  return finalUser;
};
