import React from 'react';
import {View, Text} from 'react-native';

const ContactCards = ({item}) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.number}</Text>
    </View>
  );
};
export default ContactCards;
