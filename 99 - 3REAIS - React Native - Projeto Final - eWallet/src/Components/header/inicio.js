import React from 'react';
import { View } from 'react-native';
import Text from '../Text';
import styles from './style.js';


const Inicio = (props) => {
    return (
        <View style={[styles.header, styles.centralizado, styles.espacosa]}>
            <Text style={styles.titulo}>Saldo</Text>
            <Text style={styles.saldo}>R$ {props.saldo}</Text>
            <Text style={styles.texto}>Seu saldo rende 100% do CDI</Text>
        </View>
    );

};

export default Inicio;