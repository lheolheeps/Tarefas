import React from 'react';
import { connect } from 'react-redux';
import { FlatList, RefreshControl, View, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './style.js';
import Header from '../../Components/header/inicio';
import Extrato from './Extrato';
import Comprovante from "../comprovante";
import { TouchableOpacity } from 'react-native-gesture-handler';


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
    const [showCalendario, setShowCalendario] = React.useState(false);
    return (
        <>
            <Header saldo={props.usuario.saldo} />
            <View style={styles.filtro}>
                <View style={styles.touch}>
                    <TouchableOpacity onPress={() => props.dispatch({ type: 'extrato/Filtrar', filtro: "Anterior" })}>
                        <Text style={styles.busca} >Mes Anterior</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.touch}>
                    <TouchableOpacity onPress={() => props.dispatch({ type: 'extrato/Filtrar', filtro: "Tudo" })}>
                        <Text style={styles.busca} >Tudo</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.touch}>
                    <TouchableOpacity onPress={() => setShowCalendario(true)}>
                        <Text style={styles.busca} >Demais Peridos</Text>
                    </TouchableOpacity>
                </View>
                {showCalendario && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={new Date()}
                        mode={'date'}
                        is24Hour={true}
                        display="spinner"
                        onChange={(event, selectedDate) => {
                            setShowCalendario(false);
                            if (selectedDate) {
                                props.dispatch({ type: 'extrato/Filtrar', filtro: selectedDate.getMonth() + 1 })
                            }
                        }}
                    />
                )}
            </View >
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
    console.log(state.filtro)
    return {
        usuario: state.usuario,
        transacoes: (state.filtro) ? state.filtro : state.transacoes,
    } 
};

const InicioConectado = connect(mapStateToProps)(Inicio)

export default StackScreen;