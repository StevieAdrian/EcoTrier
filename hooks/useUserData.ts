import { useEffect, useState } from "react";
import { auth, db } from "@/constants/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export default function useUserData() {
    const [userData, setUserData] = useState<{ name: string; email: string; dob: string; country: string } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;
            if (user) {
                const userDocRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(userDocRef);
                if (userDoc.exists()) {
                    const data = userDoc.data();

                    const dob = data.dob?.seconds
                    ? new Date(data.dob.seconds * 1000).toISOString().split("T")[0] 
                    : "";

                    setUserData({
                        name: data.username || "Unknown",
                        email: data.email || "",
                        dob,
                        country: data.country || "",
                    });
                }
            }
            setLoading(false);
        };

        fetchUserData();
    }, []);

    return { userData, loading };
}
