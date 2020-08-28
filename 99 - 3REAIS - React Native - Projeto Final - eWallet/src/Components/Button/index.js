import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Text from '../Text';


const Button = (props) => {
    const estilos = {
        backgroundColor: (props.background) ? props.background : '#353B3A',
        color: (props.color) ? props.color : 'white',
        width: (props.width) ? props.width : "65%",
    }
    return (
        <TouchableOpacity style={styles.touchable} onPress={props.onPress}>
            <Text style={[styles.botao, estilos, props.style]}>{props.children}</Text>
        </TouchableOpacity>
    );

};

const styles =  StyleSheet.create({
    touchable: {
        flexDirection: 'row',
        justifyContent: 'center',
        // backgroundColor: 'lightgray',
    },
    botao: {
        textAlign: "center",
        textTransform: "uppercase",
        padding: 8,
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 10,
    },
});

export default Button;