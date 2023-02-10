import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDo1hTiQ7PuUybZwQSb-SF3x3idAU7bCY4",
    authDomain: "portfolio-fb66e.firebaseapp.com",
    projectId: "portfolio-fb66e",
    storageBucket: "portfolio-fb66e.appspot.com",
    messagingSenderId: "453834885264",
    appId: "1:453834885264:web:c2badeca82cf78a8bc7015"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
