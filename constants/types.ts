import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Home: undefined;
    AllCategories: undefined;
    ScanPage: undefined;
};

export interface WasteCategory {
    id: string;
    name: string;
    icon: any;
    description: string;
}

export type NavigationProp = StackNavigationProp<RootStackParamList>;
