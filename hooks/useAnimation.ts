import { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";

export const useSlideAnimation = (visible: boolean) => {
    const slideAnim = useRef(new Animated.Value(300)).current;

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: visible ? 0 : 300,
            duration: visible ? 300 : 200,
            easing: visible ? Easing.out(Easing.ease) : Easing.in(Easing.ease),
            useNativeDriver: true,
        }).start();
    }, [visible]);

    return slideAnim;
};
