import React from 'react';
import { connect } from 'react-redux';
import { View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Text from '../../Components/Text';
import Button from '../../Components/Button';
import styles from './style.js';
import Header from '../../Components/header/simples';


const Login = (props) => {
    const [login, setLogin] = React.useState();
    const [senha, setSenha] = React.useState();
    React.useEffect(() => {
        if (props.falha) {
            Alert.alert('Dados Incorretos', "Ops, não encontramos essa combinação de Numero e Senha.")
            props.dispatch({ type: "falha/Reset" });
            setSenha('');
        }
    })
    return (
        <>
            <Header titulo="Login" />
            <View style={styles.container}>
                <Text style={styles.texto}>Me diz o numero do seu telefone</Text>
                <TextInputMask style={styles.input} placeholder="(99) 99999-9999" value={login}
                    type={'cel-phone'}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) '
                    }}
                    onChangeText={(text) => {
                        setLogin(text);
                    }}
                />
                <Text style={styles.texto}>Agora é só digitar a senha </Text>
                <TextInput style={styles.input} placeholder="********" value={senha} secureTextEntry={true}
                    onChangeText={(text) => {
                        setSenha(text);
                    }} />
                <TouchableOpacity>
                    <Text>Esqueceu a Senha?</Text>
                </TouchableOpacity>
                <Button style={{ marginTop: 20 }}
                    onPress={() => {
                        if (login !== '' && senha !== '') {
                            props.dispatch({ type: "login/Logar", login: login, senha: senha });
                        } else {
                            Alert.alert('Dados Incompletos', "Precisamos que você informe o Numero e a Senha.");
                        }
                    }}>
                    Quero Entrar
                </Button>
                <Button background="#D60F0B">Ainda não tenho cadastro</Button>
            </View>
        </>
    );

};

const mapStateToProps = (state) => {
    return {
        falha: state.falha,
    }
};

export default connect(mapStateToProps)(Login);