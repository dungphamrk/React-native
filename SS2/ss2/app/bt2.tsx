import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Bt2() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{count}</Text>

      <View style={styles.buttonContainer}>
        <Button title="GIẢM" color="red" onPress={() => setCount(count - 1)} />
        <Button title="TĂNG" color="green" onPress={() => setCount(count + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#f5f5f5",
  },
  number: {
    fontSize: 80,
    fontWeight: "bold",
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: "row", 
    gap: 20,
  },
});
