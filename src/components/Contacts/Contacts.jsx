import React, { useEffect, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { TiDelete } from 'react-icons/ti';
import {
  ContactData,
  ContactItem,
  ContactList,
  ContactsContainer,
  ContactsWrapper,
  Form,
  IconsBox,
  Message,
  ResetFilterBtn,
  SearchBtn,
} from './Contacts.styled';
import user from '../../images/user.png';
import { IoSearchOutline } from 'react-icons/io5';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import {
  fetchAllContacts,
  getSearchContacts,
} from '../../redux/contacts/operations';
import Modal from 'components/Modal/Modal';
import EditForm from 'components/EditForm/EditForm';
import ConfirmModal from 'components/ConfirmModal/ConfirmModal';
import Loader from 'components/Loader/Loader';

const Contacts = ({ contact, onClose }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isFiltering, setIsFiltering] = useState(false);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModaLOpen] = useState(false);
  const [modalContact, setModalContact] = useState(null);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getSearchContacts(searchTerm));
    setIsFiltering(true);
  };

  const resetFilter = () => {
    setSearchTerm('');
    setIsFiltering(false);
    setFilteredContacts([]);
  };

  const openModal = contact => {
    setIsEditModalOpen(true);
    setModalContact(contact);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const openConfirmModal = contact => {
    setIsConfirmModaLOpen(true);
    setModalContact(contact);
  };

  const closeConfirmModal = () => {
    setIsConfirmModaLOpen(false);
  };

  useEffect(() => {
    if (isFiltering) {
      const results = contacts.filter(
        contact =>
          contact.name.includes(searchTerm) ||
          contact.email.includes(searchTerm)
      );
      setFilteredContacts(results);
    }
  }, [isFiltering, searchTerm, contacts]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ContactsContainer>
          <Form onSubmit={handleSubmit}>
            <SearchBtn type="submit">
              <IoSearchOutline />
            </SearchBtn>
            <input
              type="text"
              placeholder="Find by name or email"
              value={searchTerm}
              onChange={handleChange}
            />
            <ResetFilterBtn type="submit" onClick={resetFilter}>
              <IoIosCloseCircleOutline />
            </ResetFilterBtn>
          </Form>

          <ContactsWrapper>
            {isFiltering && filteredContacts.length === 0 ? (
              <Message>No results for this filter</Message>
            ) : isFiltering ? (
              <ContactList>
                {filteredContacts?.map(contact => (
                  <ContactItem key={contact._id}>
                    <ContactData>
                      <img src={user} alt="contact" />
                      <div>
                        <h3>{contact.name}</h3>
                        <p>{contact.phone}</p>
                        <p>{contact.email}</p>
                      </div>
                    </ContactData>
                    <IconsBox>
                      <CiEdit onClick={() => openModal(contact)} />
                      <TiDelete onClick={() => openConfirmModal(contact)} />
                    </IconsBox>
                  </ContactItem>
                ))}
              </ContactList>
            ) : (
              <ContactList>
                {contacts?.map(contact => (
                  <ContactItem key={contact._id}>
                    <ContactData>
                      <img src={user} alt="contact" />
                      <div>
                        <h3>{contact.name}</h3>
                        <p>{contact.phone}</p>
                        <p>{contact.email}</p>
                      </div>
                    </ContactData>
                    <IconsBox>
                      <CiEdit onClick={() => openModal(contact)} />
                      <TiDelete onClick={() => openConfirmModal(contact)} />
                    </IconsBox>
                  </ContactItem>
                ))}
              </ContactList>
            )}
          </ContactsWrapper>
        </ContactsContainer>
      )}
      <Modal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        contact={modalContact}
      >
        <EditForm contact={modalContact} onClose={closeEditModal} />
      </Modal>
      <Modal
        isOpen={isConfirmModalOpen}
        onClose={closeConfirmModal}
        contact={modalContact}
      >
        <ConfirmModal contact={modalContact} onClose={closeConfirmModal} />
      </Modal>
    </>
  );
};

export default Contacts;
