import React from 'react';
import { connect } from 'react-redux';
import { FlatList, RefreshControl } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './style.js';
import Header from '../../Components/header/inicio';
import Extrato from './Extrato';
import Comprovante from "../comprovante";


const Stack = createStackNavigator();
function StackScreen() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Inicio" component={InicioConectado} />
            <Stack.Screen name="Comprovante" component={Comprovante} />
        </Stack.Navigator>
    )
}

const Inicio = (props) => {
    const [refreshing, setRefreshing] = React.useState(false);
    return (
        <>
            <Header saldo={props.usuario.saldo} />
            <FlatList style={styles.container}
                data={props.transacoes}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={() => {
                        setRefreshing(true);
                        setTimeout(() => {
                            setRefreshing(false);
                        }, 1500);
                    }} />
                }
                renderItem={({ item, index }) => {
                    return <Extrato key={item.id} navigation={props.navigation} transacao={item} index={index} />
                }}
            />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        usuario: state.usuario,
        transacoes: state.transacoes,
    }
};

const InicioConectado = connect(mapStateToProps)(Inicio)

export default StackScreen;