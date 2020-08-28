import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Text from '../../Components/Text';
import styles from './style.js';
import Header from '../../Components/header/simples';
import Boleto from "../boleto";
import Transferencia from "../transferencia";
import Comprovante from "../comprovante";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBarcode, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

const Stack = createStackNavigator();

function StackScreen() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Pagamento" component={Pagamento} />
            <Stack.Screen name="Boleto" component={Boleto} />
            <Stack.Screen name="Transferencia" component={Transferencia} />
            <Stack.Screen name="Comprovante" component={Comprovante} />
        </Stack.Navigator>
    )
}

const Pagamento = (props) => {
    return (
        <View style={styles.container}>
            <Header titulo="Pagamentos" />
            <View style={styles.botoes}>
                <TouchableOpacity style={styles.botao} onPress={() => props.navigation.navigate('Transferencia')}>
                    <FontAwesomeIcon icon={faExchangeAlt} color='#353B3A' size={50} />
                    <Text style={{ fontSize: 20 }}>Pagar um Amigo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => props.navigation.navigate('Boleto')}>
                    <FontAwesomeIcon icon={faBarcode} color='#353B3A' size={50} />
                    <Text style={{ fontSize: 20 }}>Pagar um Boleto</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

};

export default StackScreen;