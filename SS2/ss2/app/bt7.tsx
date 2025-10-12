import React, { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context'

import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";

export default function Bt7() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Chào cậu, cậu khỏe không?", sender: "other" },
    { id: 2, text: "Tớ khỏe, cảm ơn cậu. Còn cậu thì sao?", sender: "me" },
    { id: 3, text: "Tớ cũng ổn. Đang làm gì đó?", sender: "other" },
    {
      id: 4,
      text: "Tớ đang học React Native, khá là thú vị đó!",
      sender: "me",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim().length === 0) return;
    setMessages([...messages, { id: Date.now(), text: input, sender: "me" }]);
    setInput("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={80}
      >
        <ScrollView style={styles.messages} contentContainerStyle={{ padding: 10 }}>
          {messages.map((msg) => (
            <View
              key={msg.id}
              style={[
                styles.messageBubble,
                msg.sender === "me" ? styles.myMessage : styles.otherMessage,
              ]}
            >
              <Text style={{ color: msg.sender === "me" ? "#fff" : "#000" }}>
                {msg.text}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Ô nhập tin nhắn */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nhắn tin..."
            value={input}
            onChangeText={setInput}
          />
          <TouchableOpacity onPress={handleSend}>
            <Text style={styles.sendBtn}>Gửi</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  messages: {
    flex: 1,
  },
  messageBubble: {
    maxWidth: "70%",
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
  myMessage: {
    backgroundColor: "#007AFF",
    alignSelf: "flex-end",
    borderTopRightRadius: 0,
  },
  otherMessage: {
    backgroundColor: "#e6e6e6",
    alignSelf: "flex-start",
    borderTopLeftRadius: 0,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    marginRight: 10,
  },
  sendBtn: {
    color: "#007AFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
