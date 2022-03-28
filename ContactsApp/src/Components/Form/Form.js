import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Modal,
  Alert
} from 'react-native';

import { useDispatch } from 'react-redux';
import { addContact } from '../../Redux/contactSlice';

import Button from '../Button';
import styles from './Form.styles';
import { nanoid } from '@reduxjs/toolkit';
import Input from '../Input/Input';

const Form = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [number, setNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(number);

  const [isModalVisible, setIsModalVisible] = useState(false);


  const dispatch = useDispatch();


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
    setPhoneNumber(phoneNumber + number)
    setNumber(phoneNumber)
  };
  const handleDelete = () => {
    setPhoneNumber(phoneNumber?.slice(0, phoneNumber?.length - 1));
  };
  const handleAdd = () => {
    if (phoneNumber.length != 10) {
      console.log('Hatali')
    } else {
      setIsModalVisible(true);
    }
  };
  const saveEdit = () => {
    setIsModalVisible(true);
    phoneNumber.concat()
    if (name != '' & surname != '') {
      const res = dispatch(addContact({ id: nanoid(), name, surname, phoneNumber:phoneNumber }));
      console.log(res)
      //setName('');
      //setSurname('');
      //setPhoneNumber('');
    } else {
      Alert.alert('Contact', 'Bilgiler eksik tekrar deneyiniz.', [
        {
          text: 'Kapat',
        }
      ])
    }
    setIsModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Input number={phoneNumber} onPressDelete={handleDelete} />
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
        <Modal
          animationType="fade"
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}>
          <View style={styles.modalView}>
            <View style={styles.modalView2}>
              <View style={styles.editView}>
                <Text style={styles.modalText}>Kişi Ekle</Text>
                <TextInput
                  placeholder='Adini Giriniz'
                  style={styles.modalTextInput}
                  value={name}
                  onChangeText={(value) => setName(value)}
                  editable={true}
                />
                <TextInput
                  placeholder='Soyadini Giriniz'
                  style={styles.modalTextInput}
                  value={surname}
                  onChangeText={(value) => setSurname(value)}
                  editable={true}
                />
              </View>
              <TouchableOpacity
                onPress={() => saveEdit()}
                style={styles.saveEdit}>
                <Text style={styles.saveText}>Kaydet</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <Button text="Handle" onPress={handleAdd} />
    </SafeAreaView>
  );
};

export default Form;
