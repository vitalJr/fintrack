import { Login } from "../type/authentication";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";
import db from "../data/firebase";

export default {
  async addLogin(user: Login) {
    return await createUserWithEmailAndPassword(
      db.auth,
      user.email,
      user.password
    );
  },

  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(db.auth, email, password);
  },

  // async loginGoogle() {
  //   await GoogleSignin.hasPlayServices();
  //   const userInfo = await GoogleSignin.signIn();
  //   return userInfo;
  // },
};
