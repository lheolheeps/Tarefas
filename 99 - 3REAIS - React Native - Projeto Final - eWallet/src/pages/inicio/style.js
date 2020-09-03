import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexGrow: 1,
        // backgroundColor: "lightgray",
    },
    card: {
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        borderBottomWidth: 1,
        alignItems: "center",
        justifyContent: "space-between"
    },
    imagem: {
        borderRadius: 35,
        width: 70,
        height: 70,
    },
    valor: {
        fontSize: 15
    },
    filtro: {
        flexDirection: "row",
    },
    busca: {
        textAlign: "center",
        borderWidth: 1,
        width: "50%",
        height: 40,
        backgroundColor: "white",
    },
})

