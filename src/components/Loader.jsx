import React from "react";
import { Animated, Easing, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';


export default function Loader({ size, color }) {
    const spinValue = new Animated.Value(0);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    Animated.loop(
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true,
        })
    ).start();

    return <Animated.View style={[styles.loader, { transform: [{ rotate: spin }] }]}>
        <Feather name="loader" size={size} color={color} />
    </Animated.View>
}

const styles = StyleSheet.create({
    loader: {
        alignSelf: "center",
        transform: [{ rotate: '45deg' }],
    }
})