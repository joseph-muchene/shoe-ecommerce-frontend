import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCCV3fqNlq19K1e_BUn2kO-fpSTZKbmpwk",
  authDomain: "azim-shop.firebaseapp.com",
  projectId: "azim-shop",
  storageBucket: "azim-shop.appspot.com",
  messagingSenderId: "1015152175269",
  appId: "1:1015152175269:web:c2fef3b8946ac3a063854c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
