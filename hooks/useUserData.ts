import { useEffect, useState } from "react";
import { auth, db } from "@/constants/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export default function useUserData() {
    const [name, setName] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;
            if (user) {
                const userDocRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(userDocRef);
                if (userDoc.exists()) {
                    setName(userDoc.data().username || "Unknown");
                }
            }
            setLoading(false);
        };

        fetchUserData();
    }, []);

    return { name, loading };
}