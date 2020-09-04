import Reducer from './reducer';
import { createStore } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'tefddf',
  storage: AsyncStorage
}
const persistedReducer = persistReducer(persistConfig, Reducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export default () => ({ 
    store, persistor
}) 