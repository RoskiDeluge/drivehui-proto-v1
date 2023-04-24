import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBIDj_-fmRrt43J3V4mOafYK9NWxNIcqVg",
    authDomain: "drive-hui-v1.firebaseapp.com",
    projectId: "drive-hui-v1",
    storageBucket: "drive-hui-v1.appspot.com",
    messagingSenderId: "1029133429548",
    appId: "1:1029133429548:web:9905551e0361a0a970da89"
  };

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };