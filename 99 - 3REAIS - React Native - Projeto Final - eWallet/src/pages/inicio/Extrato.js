import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Text from '../../Components/Text';
import styles from './style.js';
import foto from '../../img/perfil.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowAltCircleDown, faBarcode, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Extrato = (props) => {
    const cor = (props.transacao.tipo === 1 || props.transacao.tipo === 3) ? 'green' : '#D60F0B';
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: 'row' }}>
                {
                    (props.transacao.tipo === 1) ?
                        <FontAwesomeIcon icon={faArrowAltCircleDown} color='#353B3A' size={70} />
                        : (props.transacao.tipo === 2) ?
                            <FontAwesomeIcon icon={faBarcode} color='#353B3A' size={70} />
                            :
                            <Image style={styles.imagem} source={foto} />
                }
                <View style={{ marginLeft: 10, maxWidth: '78%' }}>
                    <Text style={{ fontSize: 20 }}>{props.transacao.nome}</Text>
                    <Text style={{ fontSize: 17 }}>{props.transacao.origem}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.valor, { color: cor }]}>R$ {props.transacao.valor} </Text>
                        <Text>| {props.transacao.data}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('Comprovante', { transacao: props.transacao })}>
                <FontAwesomeIcon icon={faFileAlt} color='#353B3A' size={20} />
            </TouchableOpacity>
        </View>
    );
};

export default Extrato;