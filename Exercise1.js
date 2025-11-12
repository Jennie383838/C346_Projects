//Exercise 1
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const MyApp = () => {
    return (
        <ScrollView style={{ marginTop: 40, flex: 1, padding: 10 }}>
            {/* ===== Exercise 1 ===== */}
            <Text style={{ fontSize: 30, marginBottom: 10 }}>
                Lesson 7 - Exercise 1 (Inline Styling)
            </Text>
            <Text style={{ fontSize: 24 }}>RP Values</Text>
            <Text style={{ color: 'green' }}>Excellence</Text>
            <Text style={{ backgroundColor: 'yellow' }}>Customer-Centric</Text>
            <Text style={{ fontStyle: 'italic' }}>Integrity</Text>
            <Text style={{ textAlign: 'center' }}>Teamwork</Text>
            <Text style={{ backgroundColor: 'black', color: 'white' }}>Enterprising</Text>
        </ScrollView>
    );
};

export default MyApp;
