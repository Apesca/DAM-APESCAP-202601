import { StyleSheet } from "react-native";

import { colors, sizes } from "../../../themes";

export const styles = StyleSheet.create({

  container: {
    flex: 1,

    justifyContent: "center",
  },

  footerContainer: {
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",

    marginTop: sizes.lg,
  },

  footerText: {
    fontSize: sizes.md,
  },

  loginText: {
    marginLeft: sizes.xs,

    color: colors.secondary,

    fontSize: sizes.md,
    fontWeight: "600",
  },
});