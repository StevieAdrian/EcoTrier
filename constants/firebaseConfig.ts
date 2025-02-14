import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCFbgXHoiKm0FoIJjVYRDo3o1wOOqdL8QI",
    authDomain: "ecotrier-fe32c.firebaseapp.com",
    projectId: "ecotrier-fe32c",
    storageBucket: "ecotrier-fe32c.firebasestorage.app",
    messagingSenderId: "592845715812",
    appId: "1:592845715812:web:28929ed6a5663131302271",
    measurementId: "G-3165MRFLGD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { firebase };
