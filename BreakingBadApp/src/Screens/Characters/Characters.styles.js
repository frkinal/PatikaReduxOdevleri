import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {},
  cardConatiner: {
  },
  name: {
    textAlign:'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    margin:15
  },
  image: {
    height: height/1.3,
    resizeMode: 'cover',
  },
  button: {
    alignItems: 'center',
    padding: 15,
    textAlign: 'center',
  },
});
