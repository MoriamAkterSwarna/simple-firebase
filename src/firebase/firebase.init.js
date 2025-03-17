// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBob0KXQlOgcKfCuzMeqvxO7ofsscL8zbQ",
  authDomain: "test-3ff21.firebaseapp.com",
  projectId: "test-3ff21",
  storageBucket: "test-3ff21.firebasestorage.app",
  messagingSenderId: "804711583453",
  appId: "1:804711583453:web:6a5b5f860f596eebcdd534"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export default app;