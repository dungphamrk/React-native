import { Stack } from "expo-router";
import "react-native-reanimated";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/query/queryClient";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="product-detail"
            options={{
              presentation: "modal",
              headerShown: false,
            }}
          />
        </Stack>
      </QueryClientProvider>
    </Provider>
  );
}
