// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZytV4ykGvy6xlhiy3VCrLIu5hKQmFYYA",
  authDomain: "auth-moha-project.firebaseapp.com",
  projectId: "auth-moha-project",
  storageBucket: "auth-moha-project.appspot.com",
  messagingSenderId: "385876245935",
  appId: "1:385876245935:web:c4200d7c1d39d09d37035a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;



// npm install firebase