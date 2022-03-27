import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import Form from '../../Components/Form';
import styles from './AddContact.styles';

const AddContact = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Form />
    </SafeAreaView>
  );
};

export default AddContact;
