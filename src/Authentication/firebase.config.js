// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClpIQyS7GoJBdMQplSe2fm9UXF_QUcpHI",
  authDomain: "contest-hub-49839.firebaseapp.com",
  projectId: "contest-hub-49839",
  storageBucket: "contest-hub-49839.appspot.com",
  messagingSenderId: "82838484697",
  appId: "1:82838484697:web:33cb17a93bf2299b3af0c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;