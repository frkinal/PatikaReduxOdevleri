import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

import axios from 'axios';

import styles from './Details.styles';

const Details = ({route}) => {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`https://www.breakingbadapi.com/api/characters/${route.params.id}`)
      .then(res => res.data)
      .then(data => setChar(data[0]))
      .finally(() => setLoading(false));
  }, [route.params.id]);

  return (
    <React.Fragment>
      {loading && (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
      {char && (
        <ScrollView key={char.char_id}>
          <View style={styles.container} >
            <Text style={styles.name}>
              {char.name} ({char.nickname})
            </Text>
            <Image style={styles.image} source={{uri: char.img}} />
          </View>
          <View>
            <Text style={styles.boldText}>
              Portrayed: <Text style={styles.text}>{char.portrayed}</Text>
            </Text>
            <Text style={styles.boldText}>
              Birthday: <Text style={styles.text}>{char.birthday}</Text>
            </Text>
            <Text style={styles.boldText}>
              Status: <Text style={styles.text}>{char.status}</Text>
            </Text>
              <Text style={styles.boldText}>
                Occupation:{' '}
                {char.occupation?.map(i => (
                  <Text style={styles.text}>{i}, </Text>
                ))}{' '}
              </Text>
          </View>
        </ScrollView>
      )}
    </React.Fragment>
  );
};

export default Details;
