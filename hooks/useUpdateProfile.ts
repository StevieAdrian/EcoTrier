import { doc, updateDoc } from "firebase/firestore";
import { firestore, auth } from "@/constants/firebaseConfig";

type ProfileData = {
    name: string;
    country: string;
    profileImage?: string;
};

export function useUpdateProfile() {
    async function updateProfile(updatedData: ProfileData, onSuccess?: () => void) {
        try {
            if (!auth.currentUser) {
                console.error("No user is logged in");
                return;
            }

            const cleanedData = Object.fromEntries(
                Object.entries(updatedData).filter(([_, v]) => v !== undefined)
            );

            const userRef = doc(firestore, "users", auth.currentUser.uid);
            await updateDoc(userRef, cleanedData);
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    }

    return { updateProfile };
}