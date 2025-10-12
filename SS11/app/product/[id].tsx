import { Stack, useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useProduct } from "../../context/ProductContext";

export default function ProductDetail() {
  const params = useLocalSearchParams<{ id: string }>();
  const { data } = useProduct();

  const product = useMemo(() => data.find(p => p.id === String(params.id)), [data, params.id]);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: true, title: product ? product.name : "Chi tiết sản phẩm" }} />
      {product ? (
        <View style={styles.card}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.row}>Giá: <Text style={styles.bold}>{product.price.toLocaleString()}đ</Text></Text>
          <Text style={styles.row}>Số lượng: <Text style={styles.bold}>{product.quantity}</Text></Text>
          <Text style={styles.subtle}>Mã sản phẩm: {product.id}</Text>
        </View>
      ) : (
        <Text>Không tìm thấy sản phẩm.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f4f6", padding: 16 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  name: { fontSize: 20, fontWeight: "bold", marginBottom: 12, color: "#111827" },
  row: { fontSize: 16, marginBottom: 8, color: "#374151" },
  bold: { fontWeight: "bold", color: "#111827" },
  subtle: { marginTop: 8, color: "#6b7280" },
});


