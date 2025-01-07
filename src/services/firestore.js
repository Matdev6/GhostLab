import { db } from "./firebase-config"
import { collection, addDoc, getDoc } from "firebase/firestore"

export const addUser = async (user) => {
    try {
        await addDoc(collection(db, "users"), user);
    } catch (error) {
        throw new Error(error.message);
    }
};

export const fetchUsers = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data( )}));
    } catch (error) {
        throw new Error(error.message);
    }
};