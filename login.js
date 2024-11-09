// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi0DW-bs3Uv-zs6uYPjdJ39Uktqj2INK4",
  authDomain: "email-pass-c8254.firebaseapp.com",
  projectId: "email-pass-c8254",
  storageBucket: "email-pass-c8254.firebasestorage.app",
  messagingSenderId: "583395390930",
  appId: "1:583395390930:web:6cb622876156da4b3e040b"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {

  event.preventDefault()

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      
      window.location.href="afterLogin.html";
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert("error")
      // ..
    });
})


