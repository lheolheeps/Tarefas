import React from 'react';
import Routes from './src/services/routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// TO-DO exportar melhor
import Store from "./src/services/store";

export default function App() {
  const { store, persistor } = Store();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider >
  );
} 


