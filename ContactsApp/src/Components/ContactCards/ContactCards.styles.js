import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    number: {
        color: '#fff'

    },
    iconContainer: {
        flexDirection: 'row'
    }, modalView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#102027',
    },
    modalView2: {
        padding:15,
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
    modalTextView: {
        alignItems: 'center'
    },
    modalText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    modalText2: {
        fontSize: 20,
        color: 'white'
    },
    saveText: {
        alignItems: 'flex-end',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
});
