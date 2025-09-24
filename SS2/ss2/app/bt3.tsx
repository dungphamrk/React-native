import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function bt3() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Họ và tên:</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập tên của bạn..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});
