import React, { useEffect, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { TiDelete } from 'react-icons/ti';
import {
  ContactData,
  ContactItem,
  ContactList,
  ContactsContainer,
  Form,
  IconsBox,
  ResetFilterBtn,
  SearchBtn,
} from './Contacts.styled';
import user from '../../images/user.png';
import { IoSearchOutline } from 'react-icons/io5';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import {
  deleteContact,
  fetchAllContacts,
  getSearchContacts,
} from '../../redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getSearchContacts(searchTerm));
  };

  const resetFilter = () => {
    setSearchTerm('');
  };

  const handleDelete = id => {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this contact?'
    );
    if (isConfirmed) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <>
      <ContactsContainer>
        <Form onSubmit={handleSubmit}>
          <SearchBtn type="submit">
            <IoSearchOutline />
          </SearchBtn>
          <input type="text" value={searchTerm} onChange={handleChange} />
          <ResetFilterBtn type="submit" onClick={resetFilter}>
            <IoIosCloseCircleOutline />
          </ResetFilterBtn>
        </Form>
        <ContactList>
          {contacts?.map(contact => (
            <ContactItem key={contact._id}>
              <ContactData>
                <img src={user} alt="contact" width="40" height="40" />
                <div>
                  <p>{contact.name}</p>
                  <p>{contact.phone}</p>
                  <p>{contact.email}</p>
                </div>
              </ContactData>
              <IconsBox>
                <CiEdit style={{ fontSize: '24px' }} />
                <TiDelete
                  style={{ fontSize: '26px' }}
                  onClick={() => handleDelete(contact._id)}
                />
              </IconsBox>
            </ContactItem>
          ))}
        </ContactList>
      </ContactsContainer>
    </>
  );
};

export default Contacts;
