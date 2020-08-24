import { StyleSheet } from "react-native";

export default StyleSheet.create({

  noticias: {
    alignItems: "center",
  },

  opcoes: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  linkOpcoes: {
    marginRight: 5,
    marginLeft: 5,
  },

  noticia: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 30,
    width: 340,
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
    fontVariant: ["small-caps"],
    fontSize: 16,
    fontWeight: "bold"
  },

  corpoP: {
    marginTop: 6,
    fontVariant: ["small-caps"],
  },

  corpoSpan: {
    textTransform: "uppercase",
    fontSize: 10,
    fontVariant: ["small-caps"],
  },

  acoes: {
    borderTopColor: "black",
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  acoesLink: {
    padding: 8,
    display: "flex",
    flexDirection: "row",
  },

  botao: {
    width: 110,
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
    padding: 8,
    backgroundColor: "#353B3A",
    fontVariant: ["small-caps"],
  },

  input: {
    backgroundColor: '#eee',
    height: 30,
    width: 150,
    textAlign: "center", 
    fontVariant: ["small-caps"],
  }
})