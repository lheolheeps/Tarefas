import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header1: {
    height: "60px",
    width: "100%",
    backgroundColor: "#353B3A",
    // position: "fixed",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },

  logo: {
    padding: "0.5rem",
    alignItems: "center",
  },

  logoImg: {
    width: "40px",
    height: "40px",
  },

  item: {
    padding: "0.5rem",
    color: "white",
  },

  menu: {
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  },

  smallCaps: {
      fontVariant: ["small-caps"],
  },
})