// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC95-1K7ftJ8KRPeYIuIxRnmjogAtuNdZI",
  authDomain: "independent-service-prov-7b7e8.firebaseapp.com",
  projectId: "independent-service-prov-7b7e8",
  storageBucket: "independent-service-prov-7b7e8.appspot.com",
  messagingSenderId: "535568836652",
  appId: "1:535568836652:web:6d60d37f65fe73ba718989"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;