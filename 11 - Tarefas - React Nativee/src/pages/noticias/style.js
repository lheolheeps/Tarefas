import { StyleSheet } from "react-native";

export default StyleSheet.create({

  noticias: {
    alignItems: "center",
  },

  opcoes: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },

  linkOpcoes: {
    marginRight: 5,
    marginLeft: 5,
  },

  noticia: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 50,
    width: 300,
  },

  noticiaImg: {
    width: "100%",
    height: 250,
  },

  corpo: {
    padding: 15,
  },

  corpoH3: {
    marginTop: 2,
    marginBottom: 12,
    fontSize: 100,
  },

  corpoP: {
    marginTop: 2,
  },

  corpoSpan: {
    textTransform: "uppercase",
    fontSize: 10,
  },

  acoes: {
    display: "flex",
    justifyContent: "space-evenly",
  },
})