/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import {
  getDocs,
  query,
  collection,
  where,
  getDoc,
  doc,
  orderBy,
} from "firebase/firestore";
import { db } from "../utils/firebase";
import { PostProps } from "../types/posts.types";
import { toast } from "react-toastify";
import { UserProps } from "../types/user.types";

export const fetchCompleteUserData = async (userId: string) => {
  if (!userId) return;

  let finalUser: any;

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

export const fetchUsersForLeaderboard = async (
  queryKey?: string,
  queryValue?: string
) => {
  let allUsers: UserProps[] = [];

  let usersSnapshot;
  if (queryKey && queryValue) {
    usersSnapshot = await getDocs(
      query(
        collection(db, "Users"),
        where(queryKey, "==", queryValue),
        orderBy("points", "desc")
      )
    );
  } else {
    usersSnapshot = await getDocs(
      query(collection(db, "Users"), orderBy("points", "desc"))
    );
  }

  usersSnapshot.forEach((item) => {
    allUsers.push(item.data() as any);
  });

  return allUsers;
};
