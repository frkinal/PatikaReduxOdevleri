import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    width: width / 1.3,
    borderRadius: 20,
    backgroundColor: '#808080',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop:20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },
});
