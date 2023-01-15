import { db } from "../db";
import { collection, addDoc } from "firebase/firestore/lite";

export const addStudent = async () => {
  try {
    const docRef = await addDoc(collection(db, "students"), {
      first: "romanie",
      last: "de meyer",
      subjects: ["1", "2"],
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const addSubject = async () => {
    try {
      const docRef = await addDoc(collection(db, "subjects"), {
        name: "noël",
        difficulty: "beginner"
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };