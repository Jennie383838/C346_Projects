//Exercise 3B
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'column', // stack vertically
    backgroundColor: '#F5FCFF',
    borderColor: '#0099AA',
    borderWidth: 5,
    flex: 1,
  },
  child: {
    flex: 1, // each child takes equal height
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 24,
    textAlignVertical: 'center',
  },
});

const Exercise3B = () => {
  return (
    <View style={styles.parent}>
      <Text style={[styles.child, { backgroundColor: 'powderblue' }]}>
        Child One
      </Text>
      <Text style={[styles.child, { backgroundColor: 'skyblue' }]}>
        Child Two
      </Text>
      <Text style={[styles.child, { backgroundColor: 'steelblue' }]}>
        Child Three
      </Text>
    </View>
  );
};

export default Exercise3B;
