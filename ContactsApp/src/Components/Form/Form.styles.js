import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


export default StyleSheet.create({
  container: {
    paddingTop:50,
    textAlign: 'center',
    backgroundColor: '#102027',
    alignItems:'center',
    flex:1
  },
  numberContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 58,
    width: width/1.2,
    height: height / 1.8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  number: {
    width: 75,
    height: 75,
    borderRadius: 75,
    margin: 13,
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
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#102027',
  },
  modalView2: {
    borderRadius: 20,
    backgroundColor: '#37474F',
  },
  editView: {
    padding: 20,
    justifyContent: 'center',
    borderRadius: 10,
  },
  modalTextInput: {
    width: 300,
    height: 60,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    fontSize: 20,
  },
  saveEdit: {
    backgroundColor: '#808080',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    margin: 5,
    borderRadius: 20,
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  saveText: {
    alignItems: 'flex-end',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
});
