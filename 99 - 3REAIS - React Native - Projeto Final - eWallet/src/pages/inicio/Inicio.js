import React from 'react';
import { View, ListView } from 'react-native';
import styles from './style.js';
import Header from '../../Components/header/inicio';

const Inicio = (props) => {
    return (
        <View style={styles.container}>
            <Header saldo="0,00" />
        </View>
    );

};

export default Inicio;