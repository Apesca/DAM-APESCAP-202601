import { StyleSheet } from "react-native";

import { colors, sizes } from "../../../themes";

export const styles = StyleSheet.create({

  container: {

    width: "100%",

    marginTop: sizes.sm,
  },

  label: {

    marginLeft: "5%",
    marginBottom: sizes.sm,

    color: colors.black,

    fontSize: sizes.md,
    fontWeight: "600",
  },
});