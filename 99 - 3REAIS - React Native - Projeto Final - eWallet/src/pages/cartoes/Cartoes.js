import React from 'react';
import { View } from 'react-native';
import Text from '../../Components/Text';
import styles from './style.js';
import Header from '../../Components/header/simples';


const Cartoes = (props) => {
    return (
        <>
            <Header titulo="Cartões" />
            <View style={styles.container}>
                <Text style={{ textAlign: "center", fontSize: 17 }}>Eita, você chegou muito cedo, ainda não terminamos por aqui.</Text>
                <Text style={{ textAlign: "center", fontSize: 17 }}>Mas calma, muito em breve você vai poder pagar suas contas e fazer transferências usando um Cartão de Crédito.</Text>
            </View>
        </>
    );

};

export default Cartoes;