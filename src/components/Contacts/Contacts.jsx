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
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModaLOpen] = useState(false);
  const [modalContact, setModalContact] = useState(null);

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
                    <CiEdit
                      style={{ fontSize: '24px' }}
                      onClick={() => openModal(contact)}
                    />
                    <TiDelete
                      style={{ fontSize: '26px' }}
                      onClick={() => openConfirmModal(contact)}
                    />
                  </IconsBox>
                </ContactItem>
              ))}
            </ContactList>
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
