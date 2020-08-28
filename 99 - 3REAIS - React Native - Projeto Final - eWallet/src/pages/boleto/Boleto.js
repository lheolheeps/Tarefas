import React from 'react';
import { View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Text from '../../Components/Text';
import Button from '../../Components/Button';
import styles from './style.js';
import Header from '../../Components/header/voltar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';


const Boleto = (props) => {
    return (
        <>
            <Header titulo="Pagamento de Boletos" />
            <View style={styles.container}>
                <Text style={styles.texto}>Me diz o código de barras</Text>
                <TextInput style={styles.input} keyboardType='numeric' />
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faCamera} size={25} style={{ marginTop: 10 }} />
                </TouchableOpacity>
                <Button style={{ marginTop: 30 }} onPress={() => {
                    Alert.alert(
                        "Confirmação",
                        'Esse é o momento de ver se ta tudo certinho com os dados do pagamento.',
                        [
                            { text: "Cancelar" },
                            {
                                text: "Confirmar", onPress: () => props.navigation.navigate('Comprovante', {
                                    transacao: {
                                        tipo: 2,
                                        nome: "Pagamento de Boletos",
                                        origem: "Celesc DIstribuidora",
                                        valor: "2,00",
                                        data: "20/20/2020"
                                    }
                                })
                            }
                        ],
                        { cancelable: true }
                    )
                }}>Pagar Boleto</Button>
            </View>
        </>
    );

};

export default Boleto;