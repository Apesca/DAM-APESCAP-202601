import { StyleSheet } from "react-native";

import { colors, sizes } from "../../../themes";

export const styles = StyleSheet.create({

  container: {
    flex: 1,

    justifyContent: "center",
  },

  forgotPassword: {
    width: "90%",

    alignSelf: "center",
    textAlign: "right",

    marginTop: sizes.xxs,

    color: colors.primary,

    fontSize: sizes.md,
    fontWeight: "600",
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

  signUpText: {
    marginLeft: sizes.xs,

    color: colors.secondary,

    fontSize: sizes.md,
    fontWeight: "600",
  },
});