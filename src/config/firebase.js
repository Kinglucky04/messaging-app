// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMYP5X6-tGhVNH5JQAu9V9FjZWOsRktTg",
  authDomain: "voxiq-64895.firebaseapp.com",
  projectId: "voxiq-64895",
  storageBucket: "voxiq-64895.firebasestorage.app",
  messagingSenderId: "188224374531",
  appId: "1:188224374531:web:8409aaa88dde19298f0b36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
export const signUp = async (fullName, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      fullName,
      email,
      name: "",
      pfp: "",
      bio: "here there, i am using voxiq talks",
      lastSeen: Date.now(),
    });
    await setDoc(doc(db, "userChats", user.uid), {
      chatData: [],
    });
    toast.success("Account created successfully");
    return true;
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    return false;
  }
};

export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

    return true;
  } catch (error) {
    console.log(error);
    toast.error(error.message);
    return false;
  }
};
