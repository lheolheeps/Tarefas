import 'react-native-gesture-handler';
import React from 'react';
import { View, Image } from 'react-native';
import imgCalc from "./src/img/calculadora.png";
import styles from "./Styles";
import Tarefas from "./src/pages/tarefas/Tarefas";
import Noticias from "./src/pages/noticias/Noticias";
import TarefasReducer from './src/pages/tarefas/reducer';
import NoticiasReducer from './src/pages/noticias/reducer';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faNewspaper, faTasks, faCalculator } from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'teste2s',
  storage: AsyncStorage
}
const rootReducers = combineReducers({ TarefasReducer, NoticiasReducer })
const persistedReducer = persistReducer(persistConfig, rootReducers)
const store = createStore(persistedReducer);
const persistor = persistStore(store);

const TarefasStack = createStackNavigator();
function TarefasStackScreen() {
  return (
    <TarefasStack.Navigator
      initialRouteName="Tarefas"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#353B3A',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: "#fff",
        },
      }}>
      <TarefasStack.Screen name="Tarefas" component={Tarefas}
        options={{
          headerTitle: "Lista de Tarefas",
        }} />
    </TarefasStack.Navigator>
  )
}

const NoticiasStack = createStackNavigator();
function NoticiasStackScreen() {
  return (
    <NoticiasStack.Navigator
      initialRouteName="Noticias"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#353B3A',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: "#fff",
        },
      }}>
      <NoticiasStack.Screen name="Noticias" component={Noticias}
        options={{
          headerTitle: "Noticias por Pais",
        }} />
    </NoticiasStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <View style={styles.body}>
            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'gray',
              }}
            >
              <Tab.Screen name="Noticias" component={NoticiasStackScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon icon={faNewspaper} color={color} size={size} />
                  ),
                }} />
              <Tab.Screen name="Tarefas" component={TarefasStackScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon icon={faTasks} color={color} size={size} />
                  ),
                }} />
            </Tab.Navigator>
          </View>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}