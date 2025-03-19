import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDgwsnVBMjDGMnMEBG8z2BUco1dQoZ4WD48",
    authDomain: "e-siparis1.firebaseapp.com",
    projectId: "e-siparis1",
    storageBucket: "e-siparis1.firebasestorage.app",
    messagingSenderId: "145972138811",
    appId: "1:145972138811:web:a7a774c81ce0f75b8edd1e",
};

// Firebase başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };