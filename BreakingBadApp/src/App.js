import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Provider} from 'react-redux';
import {store} from './Redux/store';

import Router from './Router';
import Details from './Screens/Details';
import QuoteDetails from './Screens/QuoteDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: 'tomato',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen name="Breaking Bad" component={Router} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="QuoteDetails" component={QuoteDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
