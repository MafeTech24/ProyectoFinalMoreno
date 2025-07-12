import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCZ5Vdk_WQmWTckGtGnrdP0LCnGTZ2_k7c",
  authDomain: "pixelymoda-db.firebaseapp.com",
  projectId: "pixelymoda-db",
  storageBucket: "pixelymoda-db.firebasestorage.app",
  messagingSenderId: "658155534357",
  appId: "1:658155534357:web:81b58298e997fe25f1b61c"
};

export const app = initializeApp(firebaseConfig);
