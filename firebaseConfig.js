import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
import { getDatabase } from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDgtd5LR3jv4Q1vWaKz5tqfQBFCJoMv3HY',
  authDomain: 'first-project-cfef1.firebaseapp.com',
  databaseURL: 'https://first-project-cfef1-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'first-project-cfef1',
  storageBucket: 'first-project-cfef1.appspot.com',
  messagingSenderId: "387073065986",
  appId: "1:387073065986:web:69fcb41cfebbbcef3dd31b"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
// Initialize Firebase Database
const db = getDatabase(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export { auth, db, app };