/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import {
  getDocs,
  query,
  collection,
  where,
  getDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../utils/firebase";
import { PostProps } from "../types/posts.types";
import { toast } from "react-toastify";

export const fetchCompletePostList = async (
  queryKey?: string,
  queryValue?: string
) => {
  console.log(queryKey, queryValue);
  let postSnapshot;
  if (queryKey && queryValue) {
    postSnapshot = await getDocs(
      query(collection(db, "Posts"), where(queryKey, "==", queryValue))
    );
  } else {
    postSnapshot = await getDocs(collection(db, "Posts"));
  }

  let postDocs: PostProps[] = [];
  postSnapshot.forEach((item) => {
    postDocs.push(item.data() as any);
  });

  let postsWithusers: any[] = [];

  for (let i = 0; i < postDocs.length; i++) {
    const userSnapshot = await getDoc(doc(db, "Users", postDocs[i].userID));
    if (userSnapshot.exists()) {
      let data = userSnapshot.data();
      postsWithusers.push({
        ...postDocs[i],
        user: data,
      });
    }
  }

  console.log(postsWithusers);
  return postsWithusers;
};

export const likeOrDislikePost = async (postId: string, userId: string) => {
  const document = doc(db, "Posts", postId);

  const postSnapshot = await getDoc(document);

  if (postSnapshot.exists()) {
    if (postSnapshot.data().likes.includes(userId)) {
      await updateDoc(document, {
        likes: arrayRemove(userId),
      });
      toast("Removed Like from Post");
    } else {
      await updateDoc(document, {
        likes: arrayUnion(userId),
      });
      toast("Liked Post");
    }
  }
};
