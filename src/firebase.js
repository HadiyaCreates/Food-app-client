// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDC6AI7wSb2YuTZkwuQrnoqGJY1_ZkUE1w",
//   authDomain: "foodapp-auth-20435.firebaseapp.com",
//   projectId: "foodapp-auth-20435",
//   storageBucket: "foodapp-auth-20435.firebasestorage.app",
//   messagingSenderId: "770368851254",
//   appId: "1:770368851254:web:4aa8f000a7558ee1943797",
//   measurementId: "G-BPSTSKFJXJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDC6AI7wSb2YuTZkwuQrnoqGJY1_ZkUE1w",
  authDomain: "foodapp-auth-20435.firebaseapp.com",
  projectId: "foodapp-auth-20435",
  storageBucket: "foodapp-auth-20435.firebasestorage.app",
  messagingSenderId: "770368851254",
  appId: "1:770368851254:web:4aa8f000a7558ee1943797",
  measurementId: "G-BPSTSKFJXJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Add these exports:
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();