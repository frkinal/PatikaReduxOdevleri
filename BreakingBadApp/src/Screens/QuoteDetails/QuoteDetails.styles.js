import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  innerContainer: {
    padding: 20,
    margin: 20,
  },
  image: {
    height: height / 1.2,
    resizeMode: 'contain',
  },
  boldText0: {
    color: '#000',
    textAlign: 'center',
    fontSize: 33,
    fontWeight: 'bold',
  },
  boldText: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
  },
});
