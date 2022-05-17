import { StatusBar } from "expo-status-bar";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import Main from "./screens/home/main";

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar style="auto" />
      <Main />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
