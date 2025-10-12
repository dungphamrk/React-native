import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, StyleSheet, Pressable } from "react-native";
import { Href, Link } from 'expo-router';

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Trang chủ</Text>

      <LinkButton href="/bt1" label="Bài 1" />
      <LinkButton href="/bt2" label="Bài 2" />
      <LinkButton href="/bt3" label="Bài 3" />
      <LinkButton href="/bt4" label="Bài 4" />
      <LinkButton href="/bt5" label="Bài 5" />
      <LinkButton href="/Bt6" label="Bài 6" />
      <LinkButton href="/bt7" label="Bài 7" />
      <LinkButton href="/bt8" label="Bài 8" />
      <LinkButton href="/ProductDetail" label="Chi tiết sản phẩm" />
    </SafeAreaView>
  )
}

function LinkButton({ href, label }: { href: Href, label: string }) {
  return (
    <Link href={href} asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>{label}</Text>
      </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  }
});
