import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default StyleSheet.create({
    body: {
        margin: 0,
        padding: 0,
        backgroundColor: "lightgray",
        flex:1,
        paddingTop: Constants.statusBarHeight,
    },

    container: {
        paddingTop: 10,
    },
})