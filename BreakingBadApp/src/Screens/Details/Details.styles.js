import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,
  },
  image: {
    height: height / 1.3,
    resizeMode: 'cover',
  },

  boldText: {
    color: 'tomato',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
});
