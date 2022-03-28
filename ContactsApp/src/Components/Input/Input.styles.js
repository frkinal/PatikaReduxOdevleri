import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        width: width/1.3,
        height: height / 11,
        padding: 13,
        flexDirection: 'row', justifyContent: 'space-around'
    },
    number: {
        width:width/1.3,
        color: '#fff',
        fontSize: 30,
    },
    button: {
    }
})