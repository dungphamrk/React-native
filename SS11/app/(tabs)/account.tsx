import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Account() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c6b0b0ff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
