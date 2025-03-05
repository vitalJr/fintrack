import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import db from "../data/firebase";
import { Register } from "../type/register";
import { DocumentType } from "../model/Modal";

export default {
  async addRegister(register: Register) {
    return await addDoc(collection(db.db, DocumentType.Register), register);
  },
};
