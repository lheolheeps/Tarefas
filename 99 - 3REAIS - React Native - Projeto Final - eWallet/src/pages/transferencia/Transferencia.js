import React from 'react';
import { View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Text from '../../Components/Text';
import Button from '../../Components/Button';
import styles from './style.js';
import Header from '../../Components/header/voltar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Transferencia = (props) => {
    return (
        <>
            <Header titulo="Transferencias" />
            <View style={styles.container}>
                <Text style={styles.texto}>Me diz o numero de telefone</Text>
                <TextInput style={styles.input} keyboardType='numeric' />
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faSearch} size={25} style={{ marginTop: 10 }} />
                </TouchableOpacity>
                <Button style={{ marginTop: 30 }} onPress={() => {
                    Alert.alert(
                        "Confirmação",
                        'Esse é o momento de ver se ta tudo certinho com os dados da pessoa que vai receber a transferencia.',
                        [
                            { text: "Cancelar" },
                            {
                                text: "Confirmar", onPress: () => props.navigation.navigate('Comprovante', {
                                    transacao: {
                                        tipo: 4,
                                        nome: "Transferencia Enviada",
                                        origem: "Erilane Silva dos Santos",
                                        valor: "20,00",
                                        data: "20/20/2020"
                                    }
                                })
                            }
                        ],
                        { cancelable: true }
                    )
                }}>Fazer Transferencia</Button>
            </View>
        </>
    );

};

export default Transferencia;