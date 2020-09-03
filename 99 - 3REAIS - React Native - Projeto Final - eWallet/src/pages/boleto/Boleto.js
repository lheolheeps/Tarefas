import React from 'react';
import { connect } from 'react-redux';
import Helper from '../../services/helper';
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

    React.useEffect(() => {
        if (props.falha) {
            Alert.alert('Saldo Insuficiente', "Seu saldo não é suficiente para realizar esse pagamento. Você pode adicionar, sempre que quiser, no menu Depositos. \n\nVale Lembrar que o Saldo rende 100% do CDI. ;)")
            props.dispatch({ type: "falha/Reset" });
        }
        if (props.comprovar)
            props.navigation.navigate('Comprovante', { transacao: props.ultimaTransacao });
    });

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
                    if (boleto !== '' && boleto.length == 54) {
                        let dados = Helper.dadosFromBoleto(boleto)
                        Alert.alert(
                            "Confirmação",
                            'Esse é o momento de ver se ta tudo certinho com os dados do pagamento. \n\nBanco: ' + dados.banco + '\nValor: R$ ' + dados.valor + '\nVencimento: ' + dados.vencimento + '\nCógigo: ' + boleto,
                            [
                                { text: "Cancelar" },
                                { text: "Confirmar", onPress: () => props.dispatch({ type: 'boleto/Pagar', nome: dados.banco, valor: dados.valor }) }
                            ],
                            { cancelable: true }
                        )
                    } else {
                        Alert.alert('Dados Incompletos', 'Precisamos que você informe o numero completo do boleto')
                    }
                }}>Pagar Boleto</Button>
            </View>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        comprovar: state.comprovar,
        falha: state.falha,
        ultimaTransacao: state.transacoes[0],
    }
};

export default connect(mapStateToProps)(Boleto);