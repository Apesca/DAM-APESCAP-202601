import { StyleSheet } from "react-native";
import { colors } from "./themes";

export const appStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});