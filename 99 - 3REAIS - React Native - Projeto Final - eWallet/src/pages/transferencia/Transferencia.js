import React from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, Alert } from 'react-native';
import Text from '../../Components/Text';
import Button from '../../Components/Button';
import { TextInputMask } from 'react-native-masked-text';
import styles from './style.js';
import Header from '../../Components/header/voltar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Transferencia = (props) => {
    const [numero, setNumero] = React.useState('');
    const [valor, setValor] = React.useState('0');
    const [amigo, setAmigo] = React.useState('');

    React.useEffect(() => {
        if (props.falha) {
            Alert.alert('Saldo Insuficiente', "Seu saldo não é suficiente para realizar essa transferencia. Você pode adicionar, sempre que quiser, no menu Depositos. \n\nVale Lembrar que o Saldo rende 100% do CDI. ;)")
            props.dispatch({ type: "falha/Reset" });
        }
        if (props.comprovar)
            props.navigation.navigate('Comprovante', { transacao: props.ultimaTransacao });
    })

    return (
        <>
            <Header titulo="Transferencias" />
            <View style={styles.container}>
                <Text style={styles.texto}>Quanto você quer transferir?</Text>
                <TextInputMask style={styles.input} value={valor}
                    type={'money'}
                    options={{
                        unit: 'R$ ',
                    }}
                    onChangeText={text => {
                        setValor(text)
                    }}
                />
                <Text style={styles.texto}>Qual o telefone da pessoa?</Text>
                <TextInputMask style={styles.input} placeholder="(99) 99999-9999" value={numero}
                    type={'cel-phone'}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) '
                    }}
                    onChangeText={(text) => {
                        setNumero(text);
                    }}
                />
                <TouchableOpacity onPress={() => {
                    if (numero !== '' && numero.length === 15) {
                        let pessoa = props.pessoas.find(pessoa => pessoa.telefone === numero);
                        setAmigo((pessoa) ? pessoa.nome : "Não Encontrado");
                    } else {
                        Alert.alert('Numero Invalido', 'O numero de telefone precisa ter o DDD e os 9 digitos completos. \nAh, não precisa se preocupar com a formatação. A gente faz pra você ;)')
                    }
                }}>
                    <FontAwesomeIcon icon={faSearch} size={25} style={{ marginTop: 10 }} />
                </TouchableOpacity>
                <Text style={styles.texto}>{amigo}</Text>
                <Button style={{ marginTop: 20 }} onPress={() => {
                    if (valor !== '0' && valor !== 'R$ 0,00' && amigo !== '' && amigo !== 'Não Encontrado') {
                        Alert.alert(
                            "Confirmação",
                            'Esse é o momento de ver se ta tudo certinho com os dados da transferencia. \n\nValor: ' + valor + ' \nPara: ' + amigo,
                            [
                                { text: "Cancelar" },
                                {
                                    text: "Confirmar", onPress: () => props.dispatch({ type: 'transferencia/Transferir', valor: valor, amigo: amigo })
                                }
                            ],
                            { cancelable: true }
                        )
                    } else {
                        Alert.alert('Dados Incompletos', 'Precisamos que você nos informe o valor e o numero da Pessoa que quer enviar. Não esquece de apertar na lupinha pra validar o numero. ;)')
                    }
                }}>Fazer Transferencia</Button>
            </View>
        </>
    );

};


const mapStateToProps = (state) => {
    return {
        pessoas: state.pessoas,
        comprovar: state.comprovar,
        falha: state.falha,
        ultimaTransacao: state.transacoes[0],
    }
};

export default connect(mapStateToProps)(Transferencia);