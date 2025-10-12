import BottomNav from '@/components/BottomNav';
import React from 'react'
import {  StyleSheet, Text, View } from 'react-native'

export default function Home2() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Đây là màn hình Home</Text>
      <BottomNav />
    </View>
  );
}  
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#f8fafc",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 56,
  },
  title: { fontSize: 16, fontWeight: "600" },
});