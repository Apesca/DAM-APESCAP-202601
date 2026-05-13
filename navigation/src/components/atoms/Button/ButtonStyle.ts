import { StyleSheet } from "react-native";

import { colors, sizes } from "../../../themes";

export const styles = StyleSheet.create({

  container: {

    width: "90%",

    height: sizes.buttonHeight,

    backgroundColor: colors.primary,

    justifyContent: "center",
    alignItems: "center",

    alignSelf: "center",


    marginTop: sizes.md,
    paddingHorizontal: sizes.md,

    borderRadius: sizes.radiusMd,

    borderWidth: 2,
    borderColor: colors.secondary,
  },


  text: {
    color: colors.white,
    fontSize: sizes.lg,
    fontWeight: "700",
  },
});