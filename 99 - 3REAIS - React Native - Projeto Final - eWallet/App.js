import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faArrowAltCircleDown, faDollarSign, faCreditCard, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from "./style";
import Inicio from './src/pages/inicio';
import Deposito from './src/pages/deposito';
import Pagamento from './src/pages/pagamento';
import Cartoes from './src/pages/cartoes';
import Perfil from './src/pages/perfil';

const Tab = createBottomTabNavigator();
export default function App() {
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
