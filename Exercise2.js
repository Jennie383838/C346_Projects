//Exercise 2
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyApp = () => {
    return (
        <View style={{ marginTop: 40, flex: 1, alignItems: 'center' }}>
            <Text style={styles.title}>Lesson 7 - StyleSheet Example</Text>

            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Who We Are</Text>
            </View>

            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Our People</Text>
            </View>

            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Our Campus</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    greenBox: {
        width: 100,
        height: 100,
        marginTop: 30,
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center', // centers text vertically
        alignItems: 'center',     // centers text horizontally
    },
    boxText: {
        textAlign: 'center',
        color: 'white',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default MyApp;
