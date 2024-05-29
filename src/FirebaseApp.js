import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBPVxHK1ae3ibPGY6kgcnqoqWWoqE3ogFU",
  authDomain: "final-potatoleafdesease.firebaseapp.com",
  projectId: "final-potatoleafdesease",
  storageBucket: "final-potatoleafdesease.appspot.com",
  messagingSenderId: "339822122247",
  appId: "1:339822122247:web:352751e6b5dbe735bf21a2"
};

const app = initializeApp(firebaseConfig);
export default app