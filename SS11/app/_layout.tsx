import { Stack } from "expo-router";
import React from "react";
import { ToastProvider } from "../components/Toast";
import { ProductProvider } from "../context/ProductContext";

export default function RootLayout() {
  return (
    <ProductProvider>
      <ToastProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </ToastProvider>
    </ProductProvider>
  );
}
