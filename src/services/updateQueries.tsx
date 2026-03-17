import { db } from "@/firebase/firebase";
import { CustomerQuery } from "@/lib/types";
import {
  collection,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

interface NewQuery {
  name: string;
  email: string;
  subject: string;
  status: "New" | "In Progress" | "Closed";
  date: string;
}

interface uploadNewQueryProps {
  queryData: NewQuery;
}

export async function getQueries(): Promise<CustomerQuery[]> {
  const snapshot = await getDocs(collection(db, "customQueries"));
  return snapshot.docs.map((d) => d.data() as CustomerQuery);
}

export const uploadNewQuery = ({ queryData }: uploadNewQueryProps) => {
  const queryCollectionRef = collection(db, "customQueries");
  const newDocRef = doc(queryCollectionRef);
  const generatedId = newDocRef.id;

  return setDoc(newDocRef, {
    ...queryData,
    id: generatedId,
  })
    .then(() => {
      return { success: true };
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
      throw error;
    });
};
