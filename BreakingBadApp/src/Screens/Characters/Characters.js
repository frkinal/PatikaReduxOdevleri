import React, {useEffect} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import {fetchCharacters} from '../../Redux/charactersSlice';

import styles from './Characters.styles';

const Characters = ({navigation}) => {
  const characters = useSelector(state => state.characters.items);
  const status = useSelector(state => state.characters.status);
  const error = useSelector(state => state.characters.error);
  const nextPage = useSelector(state => state.characters.page);
  const hasNextPage = useSelector(state => state.characters.hasNextPage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCharacters());
    }
  }, [dispatch]);

  const renderCards = () => {};

  if (status === 'failed') {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {characters?.map(character => (
          <View style={styles.cardContainer} key={character.char_id}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Details', {id: character.char_id})
              }
              style={styles.imageButton}>
              <Image style={styles.image} source={{uri: character.img}} />
            <Text style={styles.name}>{character.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
        {status === 'loading' ? (
          <View>
            <Text>Loading...</Text>
          </View>
        ) : (
          hasNextPage && (
            <TouchableOpacity
              onPress={() => {
                dispatch(fetchCharacters(nextPage));
              }}
              style={styles.button}>
              <Text>Daha Fazla ({nextPage})</Text>
            </TouchableOpacity>
          )
        )}
        {!hasNextPage && (
          <View>
            <Text>Yuklenecek Veri kalmadi</Text>
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default Characters;
