import React, { useEffect } from 'react';
import { CiEdit } from 'react-icons/ci';
import { TiDelete } from 'react-icons/ti';
import {
  ContactData,
  ContactItem,
  ContactList,
  ContactsContainer,
  Form,
  IconsBox,
  SearchBtn,
} from './Contacts.styled';
import user from '../../images/user.png';
import { IoSearchOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { fetchAllContacts } from '../../redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);
  return (
    <>
      <ContactsContainer>
        <Form>
          <SearchBtn type="submit">
            <IoSearchOutline />
          </SearchBtn>
          <input />
        </Form>
        <ContactList>
          {contacts?.map(contact => (
            <ContactItem key={contact.name}>
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
                <TiDelete style={{ fontSize: '26px' }} />
              </IconsBox>
            </ContactItem>
          ))}
        </ContactList>
      </ContactsContainer>
    </>
  );
};

export default Contacts;
