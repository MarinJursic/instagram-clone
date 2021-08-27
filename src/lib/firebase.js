import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC868daBzUTyTCta0Z0DMbunDhqXa_1lk8",
  authDomain: "instagram-yt-e40a2.firebaseapp.com",
  projectId: "instagram-yt-e40a2",
  storageBucket: "instagram-yt-e40a2.appspot.com",
  messagingSenderId: "311665041675",
  appId: "1:311665041675:web:a59d1e7103396c8b1e020e",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
