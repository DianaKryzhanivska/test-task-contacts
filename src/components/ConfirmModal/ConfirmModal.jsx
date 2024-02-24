import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import user from '../../images/user.png';
import {
  BtnBox,
  CancelBtn,
  Contact,
  DeleteBtn,
  Title,
} from './ConfirmModal.styled';

const ConfirmModal = ({ contact, onClose }) => {
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteContact(id));
    onClose();
  };
  return (
    <>
      <Title>Are you sure you want to delete this contact?</Title>
      <Contact>
        <img src={user} alt="contact" width="40" height="40" />
        <div>
          <h3>{contact.name}</h3>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div>
      </Contact>
      <BtnBox>
        <DeleteBtn type="button" onClick={() => handleDelete(contact._id)}>
          Delete
        </DeleteBtn>
        <CancelBtn type="button" onClick={() => onClose()}>
          Cancel
        </CancelBtn>
      </BtnBox>
    </>
  );
};

export default ConfirmModal;
