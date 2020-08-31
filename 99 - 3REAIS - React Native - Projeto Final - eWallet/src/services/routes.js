import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faArrowAltCircleDown, faDollarSign, faCreditCard, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from "./style";
import Inicio from '../pages/inicio';
import Deposito from '../pages/deposito';
import Pagamento from '../pages/pagamento';
import Cartoes from '../pages/cartoes';
import Perfil from '../pages/perfil';
import Login from '../pages/login';

const Tab = createBottomTabNavigator();
const Routes = (props) => {
    if (!props.logado) {
        return (<View style={styles.body}><Login /></View>);
    } else {
        return (
            <NavigationContainer>
                <View style={styles.body}>
                    <Tab.Navigator tabBarOptions={{ tabStyle: { paddingBottom: 2 }, activeTintColor: 'black', inactiveTintColor: 'gray', }}>
                        <Tab.Screen name="Inicio" component={Inicio}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <FontAwesomeIcon icon={faHome} color={color} size={size} />
                                ),
                            }} />
                        <Tab.Screen name="Deposito" component={Deposito}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <FontAwesomeIcon icon={faArrowAltCircleDown} color={color} size={size} />
                                ),
                            }} />
                        <Tab.Screen name="Pagamento" component={Pagamento}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <FontAwesomeIcon icon={faDollarSign} color={color} size={size} />
                                ),
                            }} />
                        <Tab.Screen name="Cartões" component={Cartoes}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <FontAwesomeIcon icon={faCreditCard} color={color} size={size} />
                                ),
                            }} />
                        <Tab.Screen name="Perfil" component={Perfil}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <FontAwesomeIcon icon={faUser} color={color} size={size} />
                                ),
                            }} />
                    </Tab.Navigator>
                </View>
            </NavigationContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        logado: (state.usuario) ? true : false,
    }
};

export default connect(mapStateToProps)(Routes);
