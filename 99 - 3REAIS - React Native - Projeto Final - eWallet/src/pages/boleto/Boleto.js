import React from 'react';
import { View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Text from '../../Components/Text';
import Button from '../../Components/Button';
import styles from './style.js';
import Header from '../../Components/header/voltar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';


const Boleto = (props) => {
    const [boleto, setBoleto] = React.useState("");
    return (
        <>
            <Header titulo="Pagamento de Boletos" />
            <View style={styles.container}>
                <Text style={styles.texto}>Me diz o código de barras</Text>
                <TextInput keyboardType='numeric' />
                <TextInputMask style={styles.input} value={boleto}
                    type={'custom'}
                    options={{
                        mask: '99999.99999 99999.999999 99999.999999 9 99999999999999'
                    }}
                    onChangeText={text => {
                        setBoleto(text)
                    }}
                />
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faCamera} size={25} style={{ marginTop: 10 }} />
                </TouchableOpacity>
                <Button style={{ marginTop: 30 }} onPress={() => {
                    if (boleto !== '' && boleto.length >= 50) {
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
                    }else{
                        Alert.alert('Dados Inconpletos', 'Digite o numero do Boleto')
                    }
                }}>Pagar Boleto</Button>
            </View>
        </>
    );

};

export default Boleto;