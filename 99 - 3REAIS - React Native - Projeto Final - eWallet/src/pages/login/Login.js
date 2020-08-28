import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Text from '../../Components/Text';
import Button from '../../Components/Button'; 
import styles from './style.js';
import Header from '../../Components/header/simples';


const Login = (props) => {
    return (
        <>
            <Header titulo="Login" />
            <View style={styles.container}>
                <Text style={styles.texto}>Me diz o numero do seu telefone</Text>
                <TextInput style={styles.input} keyboardType='numeric' />
                <Text style={styles.texto}>Agora é só digitar a senha </Text>
                <TextInput style={styles.input} secureTextEntry={true} />
                <TouchableOpacity>
                    <Text>Clique aqui caso tenha esquecido a Senha</Text>
                </TouchableOpacity>
                <Button style={{marginTop: 20}}>Quero Entrar</Button>
                <Button background="#D60F0B">Ainda não tenho cadastro</Button>
            </View>
        </>
    );

};

export default Login;