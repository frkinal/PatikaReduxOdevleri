import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import {useSelector} from 'react-redux';

import {quotesSelector} from '../../Redux/quotesSlice';

import styles from './QuoteDetails.styles';

const QuoteDetails = ({route}) => {
  const items = useSelector(quotesSelector);

  const quote = items?.find(item => item.quote_id === Number(route.params.id));

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.boldText0}>{quote.quote}</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.boldText}>
          Author: <Text style={styles.text}>{quote.author}</Text>
        </Text>
        <Text style={styles.boldText}>
          Series: <Text style={styles.text}>{quote.series}</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default QuoteDetails;
