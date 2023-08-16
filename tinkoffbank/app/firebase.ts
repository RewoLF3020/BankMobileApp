import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };

const firebaseConfig = {
	apiKey: "AIzaSyANNKPjtn7K6C5GwROCGE2L3WHXzWGylfk",
	authDomain: "tinkoff-d72e9.firebaseapp.com",
	databaseURL: "https://tinkoff-d72e9-default-rtdb.firebaseio.com",
	projectId: "tinkoff-d72e9",
	storageBucket: "tinkoff-d72e9.appspot.com",
	messagingSenderId: "128563356961",
	appId: "1:128563356961:web:336825af592011347eca60",
	measurementId: "G-8GX9Z5T6D4"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app)

export const register = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore(app);