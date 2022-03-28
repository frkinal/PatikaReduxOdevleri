import React from 'react';
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity, Alert, FlatList } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import ContactCards from '../../Components/ContactCards';
import { contactSelectors, removeAllContact } from '../../Redux/contactSlice';

import styles from './ListContact.styles'

const ListContact = ({ onPress }) => {
  const dispatch = useDispatch()

  const contacts = useSelector(contactSelectors.selectAll);
  const total = useSelector(contactSelectors.selectTotal);

  const handleRemoveAll = () => {
    if (total != 0) {
      Alert.alert('Contact', 'Tüm kayıtları silmek istediğinize emin misiniz?', [
        {
          text: 'Sil',
          onPress: () => dispatch(removeAllContact())
        },
        {
          text: 'İptal',
        }
      ])
    } else {
      Alert.alert('Contact', 'Kayitli veri yok!!!', [
        {
          text: 'Kapat',
        },
      ])
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#102027' }}>
      <ScrollView>
        {contacts?.map(contact => (
          <ContactCards key={contact.id} item={contact} onPress={onPress} />
        ))}
      </ScrollView>
      <View style={styles.innerContainer}>
        <Text style={styles.totalText}>Toplam Kisi Sayisi: {total}</Text>
        <TouchableOpacity style={styles.button} onPress={handleRemoveAll}>
          <Text style={styles.buttonText}>Hepsini Sil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ListContact;
