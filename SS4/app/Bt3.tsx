import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Lightbulb, LightbulbOff } from "lucide-react-native";

export default function LightBulbApp() {
  const [isOn, setIsOn] = useState(false);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isOn ? "#fff9e6" : "#333" },
      ]}
    >
      {isOn ? (
        <Lightbulb size={100} color="#FFD700" />
      ) : (
        <LightbulbOff size={100} color="#888" />
      )}

      <TouchableOpacity
        style={[styles.button, { backgroundColor: isOn ? "#FF9800" : "#2196F3" }]}
        onPress={() => setIsOn(!isOn)}
      >
        <Text style={styles.buttonText}>{isOn ? "TẮT ĐÈN" : "BẬT ĐÈN"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
