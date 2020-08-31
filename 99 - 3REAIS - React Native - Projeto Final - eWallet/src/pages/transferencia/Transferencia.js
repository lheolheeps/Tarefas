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
                <Text style={styles.texto}>Qual o telefone dele(a)</Text>
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
                    if (numero !== '') {
                        props.pessoas.forEach(pessoa => {
                            if (numero === pessoa.telefone) {
                                setAmigo(pessoa.nome);
                            }
                        });
                    }
                }}>
                    <FontAwesomeIcon icon={faSearch} size={25} style={{ marginTop: 10 }} />
                </TouchableOpacity>
                <Text style={styles.texto}>{amigo}</Text>
                <Button style={{ marginTop: 20 }} onPress={() => {
                    if (valor !== '0' && valor !== 'R$ 0,00' && numero !== '') {
                        Alert.alert(
                            "Confirmação",
                            'Esse é o momento de ver se ta tudo certinho com os dados da pessoa que vai receber a transferencia. ' + { valor } + ' para ' + { amigo },
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
                    }
                }}>Fazer Transferencia</Button>
            </View>
        </>
    );

};


const mapStateToProps = (state) => {
    return {
        pessoas: state.pessoas,
    }
};

export default connect(mapStateToProps)(Transferencia);