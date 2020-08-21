import { StyleSheet } from "react-native";

export default StyleSheet.create({

  titulo: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20,
  },

  smallCaps: {
    fontVariant: ["small-caps"],
  },

  formulario: {
    bottom: 0,
    width: "100%",
    backgroundColor: "lightgray",
    paddingTop: 5,
  },

  novo: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 8,
  },

  input: {
    textAlign: "center",
    borderColor: "#222",
    borderWidth: 1,
    width: 150,
    backgroundColor: "white",
  },

  cards: {
    alignItems: "center",
    marginBottom: 80,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
    width: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  tarefa: {
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 12,
    marginBottom: 12,
    justifyContent: "space-around",
  },

  acoes: {
    alignItems: "center",
    alignContent: "center"
  },

  excluir: {
    color: "red",
  },

  concluida: {
    backgroundColor: "#ddd",
  },
});