import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {StatusBar} from 'react-native';
import COLOR from './src/Config/color';
import {Provider} from 'react-redux';
import {persistedStore, store} from './src/Store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {navigationRef} from './src/Helper/navigate';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <NavigationContainer ref={navigationRef}>
          <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor={COLOR.Primary}
            translucent={true}
          />
          <Router />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
