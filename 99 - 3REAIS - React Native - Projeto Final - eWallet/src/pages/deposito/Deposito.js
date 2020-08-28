import React from 'react';
import { View, Alert } from 'react-native';
import Text from '../../Components/Text';
import Button from '../../Components/Button';
import styles from './style.js';
import Header from '../../Components/header/simples';
import { TextInputMask } from 'react-native-masked-text';


const Cartoes = (props) => {
    const [valor, setValor] = React.useState('0');
    return (
        <View style={styles.container}>
            <Header titulo="Depositos" />
            <View style={styles.deposito}>
                <Text style={styles.texto}>Quanto você quer depositar?</Text>
                <TextInputMask
                    style={styles.valor}
                    options={{
                        unit: 'R$ ',
                    }}
                    type={'money'}
                    value={valor}
                    onChangeText={text => {
                        setValor(text)
                    }}
                />
            </View>
            <View style={styles.gerar}>
                <Text>Fique Ligado!</Text>
                <Text>Seu Saldo rende 100% do CDI</Text>
                <Button onPress={() => {
                    Alert.alert(
                        "Boleto  Gerado",
                        'Mandamos ele por e-mail, mas você pode copiar o código por aqui tambem ;)',
                        [
                            { text: "Copiar o Código" },
                            { text: "OK" }
                        ],
                        { cancelable: false }
                    )}}>Gerar Boleto</Button>
            </View>
        </View>
    );

};

export default Cartoes;