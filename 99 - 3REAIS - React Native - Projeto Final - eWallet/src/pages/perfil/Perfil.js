import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import Text from '../../Components/Text';
import Button from '../../Components/Button';
import styles from './style.js';
import Header from '../../Components/header/perfil';

const Perfil = (props) => {
    return (
        <>
            <Header nome="Felipe Assunção" img="https://via.placeholder.com.br/150" />
            <ScrollView style={styles.container}>
                <Button style={{ marginTop: 35 }} background='#D60F0B'>Convide e Ganhe</Button>
                <View style={styles.opcoes}>
                    <Text style={styles.menu}>Minha Conta</Text>
                    <TouchableOpacity>
                        <Text style={styles.subMenu}>Dados Pessoais</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.subMenu}>Endereços</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.subMenu}>Conta Bancaria</Text>
                    </TouchableOpacity>
                    <Text style={styles.menu}>Promoções</Text>
                    <TouchableOpacity>
                        <Text style={styles.subMenu}>Código Promocional</Text>
                    </TouchableOpacity>
                    <Text style={styles.menu}>Configurações</Text>
                    <TouchableOpacity>
                        <Text style={styles.subMenu}>Notificações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.subMenu}>Ajuda</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.subMenu, styles.destacado]}>Desativar a Conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.sair}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );

};

export default Perfil;