import React from 'react';
import {SafeAreaView} from 'react-native';

import {useSelector} from 'react-redux';
import ContactCards from '../../Components/ContactCards';
import {contactSelectors} from '../../Redux/contactSlice';

const ListContact = () => {
  const contacts = useSelector(contactSelectors.selectAll);

  return (
    <SafeAreaView>
      {contacts?.map(contact => (
        <ContactCards key={contact.id} item={contact} />
      ))}
    </SafeAreaView>
  );
};

export default ListContact;
