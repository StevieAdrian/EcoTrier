import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Home: undefined;
    AllCategories: undefined;
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;
