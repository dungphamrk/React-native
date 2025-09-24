import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const Bt5 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trang chủ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        backgroundColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
      },
      android: {
        backgroundColor: '#2196F3', 
        elevation: 4,
        justifyContent: 'center',
        paddingHorizontal: 16,
        height: 56,
      },
    }),
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    ...Platform.select({
      ios: {
        color: '#000',
        textAlign: 'center',
      },
      android: {
        color: '#fff',
        textAlign: 'left',
      },
    }),
  },
});

export default Bt5;
