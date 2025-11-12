// Exercise4
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    parent: {
        backgroundColor: 'whitesmoke',
        marginTop: 30,
        flex: 1,
        flexDirection: 'row',       // arrange children side by side
        justifyContent: 'center',   // center row horizontally
        alignItems: 'center',       // center row vertically
        gap: 20,                    // space between squares (RN 0.71+)
        // If your React Native version doesn't support 'gap',
        // remove it and keep margin in the child style instead.
    },
    child: {
        width: 80,
        height: 80,
        justifyContent: 'space-around',   // center text vertically
        alignItems: 'center',       // center text horizontally
        backgroundColor: 'lightblue',
        borderRadius: 5,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
});

const Exercise4 = () => {
    return (
        <View style={styles.parent}>
            <View style={[styles.child, { backgroundColor: 'powderblue' }]}>
                <Text style={styles.text}>Square 1</Text>
            </View>
            <View style={[styles.child, { backgroundColor: 'aquamarine' }]}>
                <Text style={styles.text}>Square 2</Text>
            </View>
            <View style={[styles.child, { backgroundColor: 'crimson' }]}>
                <Text style={styles.text}>Square 3</Text>
            </View>
        </View>
    );
};

export default Exercise4;
