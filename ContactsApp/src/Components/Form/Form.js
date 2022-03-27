import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

import { useDispatch } from 'react-redux';
import { addContact } from '../../Redux/contactSlice';

import Button from '../Button';
import styles from './Form.styles';
import { nanoid } from '@reduxjs/toolkit';
import Input from '../Input/Input';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleAdd = e => {
    e.preventDefault();
    if (!name || !number) return false;

    dispatch(addContact({ id: nanoid(), name, phoneNumber: number }));

    setName('');
    setNumber('');
  };

  let numbers = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
    { id: '*' },
    { id: '0' },
    { id: '#' },
  ];

  const onPressNumber = num => {
    var number = num.id;
    setNumber(num.id)
    console.log(number)
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body_container}>
        {/*<TextInput
          placeholder="Enter The Name"
          value={name}
          onChangeText={value => setName(value)}
        />*/}
        <TextInput
          placeholder="Enter the Phone Number "
          keyboardType="numeric"
          value={number}
          onChangeText={value => setNumber(value)}
        />
        <TextInput placeholder="Enter the Phone Number " value={number} />
        <Input number={number} />
        <View style={styles.numberContainer}>
          {numbers.map(num => {
            return (
              <TouchableOpacity
                style={styles.number}
                key={num.id}
                onPress={() => onPressNumber(num)}>
                <Text style={styles.numberText}>{num.id}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Button text="Handle" onPress={handleAdd} />
      </View>
    </SafeAreaView>
  );
};

export default Form;
