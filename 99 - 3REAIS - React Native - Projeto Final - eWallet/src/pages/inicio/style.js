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
        borderWidth: 1,
        justifyContent: "space-evenly"
    },
    touch:{
        borderRightWidth: 1,
        backgroundColor: "#ccc",
        height: 40,
        width: '33.3%',
        justifyContent: "center",
    },
    busca: {
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: "center",
    },
})

