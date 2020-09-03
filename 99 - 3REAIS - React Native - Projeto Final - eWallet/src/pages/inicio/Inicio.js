import React from 'react';
import { connect } from 'react-redux';
import { FlatList, RefreshControl, Picker, View, Button } from 'react-native';
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
    const [mes, setMes] = React.useState('9');
    const [ano, setAno] = React.useState('2020');
    return (
        <>
            <Header saldo={props.usuario.saldo} />
            <View style={styles.filtro}>
                <Picker
                    style={styles.busca}
                    selectedValue={mes}
                    itemStyle={{ textAlign: "center" }}
                    onValueChange={(itemValue) => setMes(itemValue)}>
                    <Picker.Item label="Janeiro" value="1" />
                    <Picker.Item label="Fevereiro" value="2" />
                    <Picker.Item label="Março" value="3" />
                    <Picker.Item label="Abril" value="4" />
                    <Picker.Item label="Maio" value="5" />
                    <Picker.Item label="Junho" value="6" />
                    <Picker.Item label="Julho" value="7" />
                    <Picker.Item label="Agosto" value="8" />
                    <Picker.Item label="Setembro" value="9" />
                    <Picker.Item label="Outubro" value="10" />
                    <Picker.Item label="Novembro" value="11" />
                    <Picker.Item label="Dezembro" value="12" />
                </Picker>
                <Picker
                    style={styles.busca}
                    selectedValue={ano}
                    itemStyle={{ textAlign: "center" }}
                    onValueChange={(itemValue) => setAno(itemValue)}>
                    <Picker.Item label="2020" value="2020" />
                    <Picker.Item label="2019" value="2019" />
                    <Picker.Item label="2018" value="2018" />
                </Picker>
            </View>
            <Button title="Filtrar extrato" color="#bbb" onPress={() => props.dispatch({ type: 'extrato/Filtrar', mes: mes, ano: ano })} />
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