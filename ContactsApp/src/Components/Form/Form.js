import React from 'react';
import {SafeAreaView, View, TextInput} from 'react-native';

import {Formik} from 'formik';

import Button from '../Button'

import styles from './Form.styles';

const Form = () => {

  const handleAdd = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Formik initialValues={{name: '', number: ''}} onSubmit={handleAdd}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <TextInput
              placeholder="Enter The Name"
              value={values.name}
              onChangeText={handleChange('name')}
            />
            <TextInput
              placeholder="Enter the Phone Number "
              value={values.password}
              onChangeText={handleChange('number')}
            />
            <Button text="Handle" onPress={handleSubmit}  />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Form;
