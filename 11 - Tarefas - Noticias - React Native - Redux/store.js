import TarefasReducer from './src/pages/tarefas/reducer';
import NoticiasReducer from './src/pages/noticias/reducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

const persistConfig = {
  key: 'teste2s',
  storage: AsyncStorage
}
const rootReducers = combineReducers({ TarefasReducer, NoticiasReducer });
const persistedReducer = persistReducer(persistConfig, rootReducers);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export default () => ({ 
    store, persistor
}) 