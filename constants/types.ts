import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Home: undefined;
    AllCategories: undefined;
    ScanPage: undefined;
    SignIn: undefined;
    SignUp: undefined;
    ProfilePage: undefined;
    ScanHistory: undefined;
    AccountProfile: undefined;
    EditProfile: undefined;
    CameraScreen: { onPhotoTaken: (photoUri: string) => void };
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
