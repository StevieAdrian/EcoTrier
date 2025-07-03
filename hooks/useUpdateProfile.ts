import { doc, updateDoc } from "firebase/firestore";
import { firestore, auth } from "@/constants/firebaseConfig";

export function useUpdateProfile() {
    async function updateProfile(updatedData: { name: string; country: string }, onSuccess?: () => void) {
        try {
            if (!auth.currentUser) {
                console.error("No user is logged in");
                return;
            }

            const userRef = doc(firestore, "users", auth.currentUser.uid);
            await updateDoc(userRef, updatedData);
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    }

    return { updateProfile };
}