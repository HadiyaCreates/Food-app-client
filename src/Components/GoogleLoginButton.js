// // src/components/GoogleLoginButton.js
// import React from 'react';
// import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from '../firebase';

// const GoogleLoginButton = ({ onLogin }) => {
//   const handleGoogleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;

//       // Optional: Pass user data to parent or save in context/localStorage
//       onLogin(user); // call parent callback
//     } catch (error) {
//       console.error("Google login failed:", error.message);
//     }
//   };

//   return (
//     <button
//       onClick={handleGoogleLogin}
//       className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//     >
//       Sign in with Google
//     </button>
//   );
// };

// export default GoogleLoginButton;
