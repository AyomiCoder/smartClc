// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwjmgYZc2eZicLDwaMBXzn2kwbx-Sx2_4",
  authDomain: "image-gallery-app-70c88.firebaseapp.com",
  projectId: "image-gallery-app-70c88",
  storageBucket: "image-gallery-app-70c88.appspot.com",
  messagingSenderId: "550935158343",
  appId: "1:550935158343:web:706997f7f1c48ca99a9b62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);