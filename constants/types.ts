import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Home: undefined;
    AllCategories: undefined;
    ScanPage: undefined;
    CameraScreen: undefined;
    ProfilePage: undefined;
    ScanHistory: undefined;
    AccountProfile: undefined;
    EditProfile: undefined;
    ProfileForm: undefined;
    ForgotPassword: undefined;
    NearbyStationMap: {
        userLocation: {
            latitude: number;
            longitude: number;
            latitudeDelta: number;
            longitudeDelta: number;
        };
        recycleStations: Array<{
            id: number;
            name: string;
            latitude: number;
            longitude: number;
        }>;
    };
    SignPage: undefined;
    SignIn: undefined;
    SignUp: undefined;
    ResultScreen: {
        visible: boolean;
        onClose: () => void;
        image: any;
        loading: boolean;
        response: any;
        error: any;
    };
};

export interface WasteCategory {
    id: string;
    name: string;
    icon: any;
    description: string;
}

export interface ScanHistoryProp {
    id: string;
    createdAt: Date;
    imageUrl: string;
    kategoriSampah: string;
    sumberSampah: string;
    berbahaya: string;
    waktuTerurai: string;
    jenisBahan: string;
    dampakLingkungan: string;
    daurUlang: string;
    solusiPengelolaan: string;
    uid: string;
}

export type NavigationProp = StackNavigationProp<RootStackParamList>;
