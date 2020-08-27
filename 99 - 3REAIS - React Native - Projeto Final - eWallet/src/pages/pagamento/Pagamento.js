import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Text from '../../Components/Text';
import styles from './style.js';
import Header from '../../Components/header/simples';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBarcode, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

const Pagamento = (props) => {
    return (
        <View style={styles.container}>
            <Header titulo="Pagamentos" />
            <View style={styles.botoes}>
                <TouchableOpacity style={styles.botao}>
                    <FontAwesomeIcon icon={faExchangeAlt} color='#353B3A' size={50} />
                    <Text style={{fontSize: 20}}>Pagar um Amigo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao}>
                    <FontAwesomeIcon icon={faBarcode} color='#353B3A' size={50} />
                    <Text style={{fontSize: 20}}>Pagar um Boleto</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

};

export default Pagamento;