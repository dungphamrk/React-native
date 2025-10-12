import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'

type ButtonProps = {
  title: string;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  onPress?: () => void;
};

const CustomButton = ({ title, variant = "primary", disabled, onPress }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        variant === "primary" && styles.primary,
        variant === "secondary" && styles.secondary,
        variant === "danger" && styles.danger,
        disabled && styles.disabled,
      ]}
    >
      <Text
        style={[
          styles.text,
          variant === "secondary" && { color: "#007AFF" },
          disabled && { color: "#aaa" },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <CustomButton variant="primary" title="Button Primary" />
        <CustomButton variant="secondary" title="Button Secondary" />
        <CustomButton variant="danger" title="Button Danger" />
        <CustomButton disabled title="Button Disabled" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    width: "90%",
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  primary: {
    backgroundColor: "#007AFF",
  },
  secondary: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#007AFF",
  },
  danger: {
    backgroundColor: "#FF3B30",
  },
  disabled: {
    backgroundColor: "#ccc",
  },
});
