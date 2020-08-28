import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: { 
        flexGrow: 1, 
        // backgroundColor: "lightgray",
    },
    dados: {
        flexGrow: 1,
        paddingLeft: 20,
    },
    texto:{
        marginTop: 20,
        fontSize: 18
    },
    valor: {
        fontSize: 15
    },
    card: {
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    imagem: {
        borderRadius: 36,
        width: 72,
        height: 72,
    },
    icone: {
        borderRadius: 40,
        backgroundColor: 'white',
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
    }
})

