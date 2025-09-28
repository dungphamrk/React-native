import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Calculator from "../components/Calculator";

const Bt8 = () => {
  return (
    <View>
      <Text style={style.title}>Bài 8:</Text>
      <Calculator />
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Bt8;
