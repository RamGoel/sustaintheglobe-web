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
  updateDoc,
  arrayRemove,
  arrayUnion,
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

export const followOrUnfollowUser = async (
  thisUserId: string,
  otherUserId: string
) => {
  const document = doc(db, "Users", otherUserId);

  const userSnapshot = await getDoc(document);

  if (userSnapshot.exists()) {
    if (userSnapshot.data().followers.includes(thisUserId)) {
      await updateDoc(document, {
        followers: arrayRemove(thisUserId),
      });
      toast("Followed User");
    } else {
      await updateDoc(document, {
        followers: arrayUnion(thisUserId),
      });
      toast("Unfollowed User");
    }
  } else {
    toast("User not found!");
  }
};
