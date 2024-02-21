import React, { useCallback, useEffect } from 'react';
import { CloseBtn, ModalContent, ModalOverlay } from './Modal.styled';
import { IoIosClose } from 'react-icons/io';
import AddForm from 'components/AddForm/AddForm';

const Modal = ({ isOpen, onClose }) => {
  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, handleKeyDown]);
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <ModalOverlay onClick={onClose}>
        <ModalContent>
          <CloseBtn onClick={onClose}>
            <IoIosClose />
          </CloseBtn>
          <AddForm />
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default Modal;
