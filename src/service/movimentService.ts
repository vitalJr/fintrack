import { addDoc, collection, getDocs, where, query } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import db from "../data/firebase";
import { DocumentType } from "../model/Modal";
import { Moviment } from "../type/moviment";

export default {
  async addMoviment(moviment: Moviment) {
    return await addDoc(collection(db.db, DocumentType.Moviment), moviment);
  },

  async getMoviments() {
    const user = getAuth().currentUser;
    const movimentCollection = collection(db.db, DocumentType.Moviment);
    const userQuery = query(
      movimentCollection,
      where("userReference", "==", user?.uid)
    );

    return await getDocs(userQuery);
  },
};
