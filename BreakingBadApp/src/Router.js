import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Characters from './Screens/Characters';
import Quotes from './Screens/Quotes';
import {Provider} from 'react-redux';
import {store} from './Redux/store';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Provider store={store}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Characters') {
              iconName = focused ? 'account-star' : 'account-star-outline';
            } else if (route.name === 'Quotes') {
              iconName = focused
                ? 'format-quote-close'
                : 'format-quote-close-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Characters" component={Characters} />
        <Tab.Screen name="Quotes" component={Quotes} />
      </Tab.Navigator>
    </Provider>
  );
};

export default TabNavigator;
