import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Bt2() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{count}</Text>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f9ff",
  },
  number: {
    fontSize: 60,
    fontWeight: "bold",
    marginBottom: 30,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 20, 
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2196F3",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
});
