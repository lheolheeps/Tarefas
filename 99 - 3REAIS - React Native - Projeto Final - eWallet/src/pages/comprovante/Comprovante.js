import React from 'react';
import { View, Image, Share } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Text from '../../Components/Text';
import Button from '../../Components/Button';
import foto from '../../img/perfil.png';
import styles from './style.js';
import Header from '../../Components/header/voltar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBarcode, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';


const Comprovante = (props) => {
    const route = useRoute();
    const transacao = route.params.transacao;
    return (
        <View style={styles.container}>
            <Header titulo="Comprovante" />
            <View style={styles.card}>
                <View style={styles.icone}>
                    {
                        (transacao.tipo === 2) ?
                            <FontAwesomeIcon icon={faBarcode} color='#353B3A' size={55} />
                            : (transacao.tipo === 1) ?
                                <FontAwesomeIcon icon={faArrowAltCircleDown} color='#353B3A' size={70} />
                                :
                                <Image style={styles.imagem} source={foto} />
                    }
                </View>
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
            <Button
                onPress={() =>
                    Share.share({
                        message:
                            'https://3reais.com.br/comprovante?id=123cvn3219rns92d29c3d8 - Este é o comprovante da transação feita no 3REAIS',
                    })
                }>Compartilhar</Button>
            <Button background="#D60F0B"
                onPress={() =>
                    Share.share({
                        message:
                            'Use o 3REAIS para pagar Amigos, boletos e muito mais. Ao criar sua conta insira o codigo 3R-FEAS e ganha de volta os primeiros R$ 10,00 gastos. Baixe Agora https://3reais.com.br/convite?cod=3R-FEAS',
                    })
                }>Indique e Ganhe</Button>
        </View>
    );

};

export default Comprovante;