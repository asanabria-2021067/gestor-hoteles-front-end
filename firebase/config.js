
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBEwpITt9zP0V63topo1RzUBbphjfeCrmE",
    authDomain: "gestor-hoteles-in6bm.firebaseapp.com",
    projectId: "gestor-hoteles-in6bm",
    storageBucket: "gestor-hoteles-in6bm.appspot.com",
    messagingSenderId: "478559637422",
    appId: "1:478559637422:web:f45d0d40eb195da415023f",
    measurementId: "G-XE2EPKCPH8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);

export async function uploadFiles(file) {
    const storageRef = ref(storage, v4());
    console.log(storageRef);
    const results = await uploadBytes(storageRef, file)
    console.log(results); 
    const url = await getDownloadURL(storageRef)
    return url
}

export const firestore = getFirestore(app);