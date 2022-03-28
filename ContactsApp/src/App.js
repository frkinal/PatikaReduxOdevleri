import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { store } from './Redux/store';
import AddContact from './Screens/AddContact';
import ListContact from './Screens/ListContact';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'AddContact') {
                iconName = focused ? 'account-star' : 'account-star-outline';
              } else if (route.name === 'ListContact') {
                iconName = focused
                  ? 'format-quote-close'
                  : 'format-quote-close-outline';
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarStyle: { backgroundColor: '#102027' },
            headerShown: false,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="AddContact" component={AddContact} />
          <Tab.Screen name="ListContact" component={ListContact} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
