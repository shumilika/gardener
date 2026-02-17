import { db } from "@/firebase/firebase";
import { Article } from "@/lib/types";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";

interface uploadNewArticleProps {
  articleData: Article;
}

export const uploadNewArticle = ({ articleData }: uploadNewArticleProps) => {
  const articleDocRef = doc(db, "blogPosts", articleData.slug);
  return setDoc(articleDocRef, {
    ...articleData,
    createdDate: serverTimestamp(),
  })
    .then(() => {
      return { success: true, id: articleData.slug };
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
      throw error;
    });
};

export async function getArticles(): Promise<Article[]> {
  const snapshot = await getDocs(collection(db, "blogPosts"));
  return snapshot.docs.map((d) => ({ ...(d.data() as Article), slug: d.id }));
}

export const deleteCurrentArticle = (id: string) => {
  const articleRef = doc(db, "blogPosts", id);

  return deleteDoc(articleRef)
    .then(() => {
      return { success: true };
    })
    .catch((error) => {
      throw error;
    });
};
