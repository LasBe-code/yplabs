import React from 'react';
import {Provider} from 'react-redux';
import store, {persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import Navigation from './src/commons/navigation';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
        <Toast />
      </PersistGate>
    </Provider>
  );
}

export default App;
