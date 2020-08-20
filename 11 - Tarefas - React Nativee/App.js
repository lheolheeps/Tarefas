import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import styles from "./Styles";
import Header from "./src/pages/header/Header";
import Tarefas from "./src/pages/tarefas/Tarefas";
import TarefasReducer from './src/pages/tarefas/reducer';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { NavigationContainer } from '@react-navigation/native';

const store = createStore(
  combineReducers({
    TarefasReducer
  })
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.body}>
          <Tarefas />
        </View>
      </NavigationContainer>
    </Provider>
  );
}