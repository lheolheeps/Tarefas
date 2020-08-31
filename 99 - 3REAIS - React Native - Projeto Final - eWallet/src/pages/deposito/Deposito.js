import React from 'react';
import { connect } from 'react-redux';
import { View, Alert, Clipboard } from 'react-native';
import Text from '../../Components/Text';
import Button from '../../Components/Button';
import styles from './style.js';
import Header from '../../Components/header/simples';
import { TextInputMask } from 'react-native-masked-text';


const Deposito = (props) => {
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
                    if (valor !== '0' && valor !== 'R$ 0,00') {
                        Alert.alert(
                            "Boleto  Gerado",
                            'Mandamos ele por e-mail, mas você pode copiar o código por aqui tambem ;)',
                            [
                                { text: "Copiar o Código", onPress: () => Clipboard.setString('23793381286003754149155000063309283650000002000') },
                                { text: "OK" }
                            ],
                            { cancelable: false }
                        )
                        props.dispatch({ type: 'deposito/Depositar', valor: valor })
                        setValor('0');
                    }else{
                        Alert.alert('Dados Inconpletos', 'Digite algum valor para deposito')
                    }
                }}>Gerar Boleto</Button>
            </View>
        </View>
    );

};


const mapStateToProps = (state) => {
    return {
        usuario: state.usuario,
    }
};

export default connect(mapStateToProps)(Deposito);