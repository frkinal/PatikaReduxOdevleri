import React, {useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {
  fetchAllQuotes,
  quotesSelector,
  statusSelector,
  errorSelector,
} from '../../Redux/quotesSlice';

import styles from './Quotes.styles';

const Quotes = ({navigation}) => {
  const dispatch = useDispatch();

  const data = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    dispatch(fetchAllQuotes());
  }, [dispatch]);

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      {status === 'loading' && (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
      {status === 'succeeded' &&
        data?.map(item => (
          <View style={styles.cardContainer} key={item.quote_id}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('QuoteDetails', {id: item.quote_id})
              }>
              <Text style={styles.quote}>{item.quote}</Text>
            </TouchableOpacity>
            <Text style={styles.author}>{item.author}</Text>
          </View>
        ))}
    </ScrollView>
  );
};

export default Quotes;
