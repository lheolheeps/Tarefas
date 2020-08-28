import React from 'react';
import { View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Text from '../../Components/Text';
import Button from '../../Components/Button';
import foto from '../../img/perfil.png';
import styles from './style.js';
import Header from '../../Components/header/voltar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBarcode } from '@fortawesome/free-solid-svg-icons';


const Comprovante = (props) => {
    const route = useRoute();
    const transacao = route.params.transacao;
    return (
        <View style={styles.container}>
            <Header titulo="Comprovante" />
            <View style={styles.card}>
                {
                    (transacao.tipo === 2) ?
                        <View style={styles.icone}><FontAwesomeIcon icon={faBarcode} color='#353B3A' size={55} /></View>
                        :
                        <View style={styles.icone}><Image style={styles.imagem} source={foto} /></View>
                }
                <View style={{ marginLeft: 10, maxWidth: '78%' }}>
                    <Text style={{ fontSize: 20 }}>{transacao.nome}</Text>
                    <Text style={{ fontSize: 17 }}>{transacao.origem}</Text>
                </View>
            </View>
            <View style={styles.dados}>
                <Text style={styles.texto}>Valor:</Text>
                <Text style={styles.valor}>{transacao.valor}</Text>
                <Text style={styles.texto}>Realizado em:</Text>
                <Text style={styles.valor}>{transacao.data}</Text>
                <Text style={styles.texto}>Forma de Pagamento:</Text>
                <Text style={styles.valor}>Saldo</Text>
            </View>
            <Button>Compartilhar</Button>
            <Button background="#D60F0B">Indique e Ganhe</Button>
        </View>
    );

};

export default Comprovante;