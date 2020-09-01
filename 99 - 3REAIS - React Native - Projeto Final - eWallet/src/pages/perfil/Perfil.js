import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, TouchableOpacity, Alert, Share } from 'react-native';
import Text from '../../Components/Text';
import Button from '../../Components/Button';
import styles from './style.js';
import Header from '../../Components/header/perfil';

const Perfil = (props) => {
    return (
        <>
            <Header nome={props.usuario.nome} foto={props.usuario.foto} />
            <ScrollView style={styles.container}>
                <Button style={{ marginTop: 35 }} background='#D60F0B'
                    onPress={() =>
                        Share.share({
                            message:
                                'Use o 3REAIS para pagar Amigos, boletos e muito mais. Ao criar sua conta insira o codigo 3R-FEAS e ganha de volta os primeiros R$ 10,00 gastos. Baixe Agora https://3reais.com.br/convite?cod=3R-FEAS',
                        })
                    }>Convide e Ganhe</Button>
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
                    <View style={styles.sair}>
                        <TouchableOpacity
                            onPress={() => {
                                Alert.alert("Deslogar", "Tem certeza que deseja Sair? \nAqui você tem 100% do CDI e faz pagamentos com muita facilidade.",
                                    [
                                        { text: "Cancelar" },
                                        { text: "Confirmar", onPress: () => props.dispatch({ type: 'perfil/Deslogar' }) }
                                    ],
                                    { cancelable: true })
                            }}>
                            <Text style={styles.botaoSair}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    );

};

const mapStateToProps = (state) => {
    return {
        usuario: state.usuario,
    }
};

export default connect(mapStateToProps)(Perfil);