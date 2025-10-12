import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Animated, Easing, Platform, StatusBar, StyleSheet, Text, View } from "react-native";

type ToastType = "success" | "error" | "info";

interface ToastContextType {
  show: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<ToastType>("info");
  const [toastHeight, setToastHeight] = useState<number>(0);
  const visible = useRef(false);
  const translateY = useRef(new Animated.Value(-100)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback((msg: string, t: ToastType = "info") => {
    setMessage(msg);
    setType(t);
    // Clear existing hide timer to extend visibility
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
    const animateIn = () => {
      visible.current = true;
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 220,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 180,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]).start();
    };
    if (!visible.current) {
      animateIn();
    }
    hideTimer.current = setTimeout(() => {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: -(toastHeight + 24),
          duration: 220,
          easing: Easing.in(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 200,
          easing: Easing.in(Easing.cubic),
          useNativeDriver: true,
        }),
      ]).start(() => {
        visible.current = false;
        setMessage("");
      });
    }, 1800);
  }, [translateY, toastHeight]);

  useEffect(() => {
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  const value = useMemo(() => ({ show }), [show]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <View pointerEvents="none" style={styles.container}>
        <Animated.View
          onLayout={(e) => setToastHeight(e.nativeEvent.layout.height)}
          style={[styles.toast, styles[type], { transform: [{ translateY }], opacity }]}
        >
          <Text style={styles.text}>{message}</Text>
        </Animated.View>
      </View>
    </ToastContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    paddingTop: (Platform.OS === "android" ? (StatusBar.currentHeight || 0) : 44) + 8,
  },
  toast: {
    minWidth: 200,
    maxWidth: 340,
    marginTop: 8,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  text: { color: "#fff", fontWeight: "600", textAlign: "center" },
  success: { backgroundColor: "#16a34a" },
  error: { backgroundColor: "#dc2626" },
  info: { backgroundColor: "#2563eb" },
});


