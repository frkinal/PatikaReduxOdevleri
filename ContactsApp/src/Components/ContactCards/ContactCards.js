import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Modal, TextInput } from 'react-native';

import UpdateIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import DelIcon from 'react-native-vector-icons/AntDesign'

import styles from './ContactCards.styles'

import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../Redux/contactSlice'

const ContactCards = ({ item }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState(item.name);
  const [surname, setSurname] = useState(item.surname);
  const [phoneNumber, setPhoneNumber] = useState(item.phoneNumber);

  const dispatch = useDispatch();


  const Delete = (id) => {
    dispatch(deleteContact(id))
  }

  const handleDelete = () => {
    Alert.alert('Contact', 'Bu kisiyi silmek istediginize emin misiniz?', [
      {
        text: 'Sil',
        onPress: () => Delete(item.id)
      },
      {
        text: 'İptal',
      }
    ])

  }

  const saveEdit = () => {
    setIsModalVisible(true);
    if (name != null && surname != null && phoneNumber.length == 10) {
      dispatch(updateContact({
        id: item.id,
        changes: {
          name, surname, phoneNumber
        }
      }))
      Alert.alert('Contact', 'Bilgiler başarıyla düzenlendi.', [
        {
          text: 'Kapat',
        }
      ])
      console.log(item.phoneNumber.length)
      setIsModalVisible(false);
    } else {
      Alert.alert('Contact', 'Bilgiler eksik tekrar deneyiniz.', [
        {
          text: 'Kapat',
        }
      ])
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{item.name} {item.surname}</Text>
        <Text style={styles.number}>{item.phoneNumber}</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setIsModalVisible(true)}>
          <UpdateIcon style={{ margin: 5 }} name='account-edit-outline' size={30} color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDelete}>
          <DelIcon style={{ margin: 5 }} name='deleteuser' size={30} color='white' />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalView}>
          <View style={styles.modalView2}>
            <View style={styles.editView}>
              <View style={styles.modalTextView}>
                <Text style={styles.modalText}>Kişi Düzenle</Text>
              </View>
              <Text style={styles.modalText2}>Adı</Text>
              <TextInput
                placeholder='Adini Giriniz'
                style={styles.modalTextInput}
                value={name}
                onChangeText={(value) => setName(value)}
                editable={true}
                selectionColor='white'
              />
              <Text style={styles.modalText2}>Soyadı</Text>
              <TextInput
                placeholder='Soyadini Giriniz'
                style={styles.modalTextInput}
                value={surname}
                onChangeText={(value) => setSurname(value)}
                editable={true}
              />
              <Text style={styles.modalText2}>Telefon Numarası</Text>
              <TextInput
                placeholder='Soyadini Giriniz'
                style={styles.modalTextInput}
                value={phoneNumber}
                keyboardType='phone-pad'
                onChangeText={(value) => setPhoneNumber(value)}
                editable={true}
              />
            </View>
            <TouchableOpacity
              onPress={saveEdit}
              style={styles.saveEdit}>
              <Text style={styles.saveText}>Kaydet</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default ContactCards;
