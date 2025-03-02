import { auth, db } from "@/constants/firebaseConfig";
import { ScanHistoryProp } from "@/constants/types";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useFetch() {
    const [history, setHistory] = useState<ScanHistoryProp[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHistory = async () => {
            if (!auth.currentUser){
                setLoading(false);
                return;
            }

            const uid = auth.currentUser.uid;
            const qry = query(
                collection(db, "scanhistory"),
                orderBy("createdAt", "desc")
            )

            try {
                const snapshot = await getDocs(qry);
                const props: ScanHistoryProp[] = [];

                snapshot.forEach((doc) => {
                    const data = doc.data();

                    if (data.uid === uid){
                        props.push({
                            id: doc.id,
                            createdAt: data.createdAt.toDate(),
                            imageUrl: data.imageUrl,
                            kategoriSampah: data.kategoriSampah,
                            sumberSampah: data.sumberSampah,
                            berbahaya: data.berbahaya,
                            waktuTerurai: data.waktuTerurai,
                            jenisBahan: data.jenisBahan,
                            dampakLingkungan: data.dampakLingkungan,
                            daurUlang: data.daurUlang,
                            solusiPengelolaan: data.solusiPengelolaan,
                            uid: data.uid,
                        });
                    }
                })
                
                setHistory(props);
            } catch (error) {
                setError("Failed to fetch history");
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        
        fetchHistory();
    }, []);

    return { history, loading, error }
}