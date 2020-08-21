import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button } from 'react-native';
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
import { faNewspaper, faTasks } from '@fortawesome/free-solid-svg-icons'

const store = createStore(
  combineReducers({
    TarefasReducer,
    NoticiasReducer
  })
);

// function Noticias() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Noticias!</Text>
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

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
        initialParams={{
          headerTitle: "Noticias",
        }} />
      <NoticiasStack.Screen name="Favoritos" component={Noticias}
        initialParams={{
          headerTitle: "Favoritas",
        }} />
    </NoticiasStack.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.body}>
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: 'black',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name="Noticias" component={NoticiasStackScreen} />
            <Tab.Screen name="Tarefas" component={TarefasStackScreen} />
          </Tab.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
  );
}