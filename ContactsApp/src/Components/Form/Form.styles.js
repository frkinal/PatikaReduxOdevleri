import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

import colors from '../Colors/colors';

export default StyleSheet.create({
  container: {
    textAlign: 'center',
    backgroundColor:'red'
  },
  body_container: {
  },
  numberContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 58,
    width: width,
    height: height / 1.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    width: 75,
    height: 75,
    borderRadius: 75,
    margin:13,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontSize: 36,
    color: '#fff',
    letterSpacing: 0,
    textAlign: 'center',
  },
});
