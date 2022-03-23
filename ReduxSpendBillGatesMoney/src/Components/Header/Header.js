import {SafeAreaView, Text, Image} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <SafeAreaView>
      <Image source={{uri: 'https://neal.fun/spend/billgates.jpg'}} />
      <Text>Header</Text>
    </SafeAreaView>
  );
};

export default Header;
