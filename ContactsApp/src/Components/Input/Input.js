import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './Input.styles'

import Icon from 'react-native-vector-icons/Feather'

const Input = ({ number, onPressDelete }) => {
    return (
        <View style={styles.cotainer}>
            <Text style={styles.number}>{number}</Text>
            <TouchableOpacity style={styles.button} onPress={onPressDelete}>
                <Icon name='delete' size={30} />
            </TouchableOpacity>
        </View>
    )
}

export default Input