import { storage } from "./firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadFile = async (file) => {
    try{
        const storageRef = ref(storage, `uploads/%{file.name}`);
        await uploadBytes(storageRef, file);
        return await getDownloadURL(storageRef);
    } catch (error) {
        throw new Error(error.message);
    }
};