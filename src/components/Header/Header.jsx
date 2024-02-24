import React, { useState } from 'react';
import { AddBtn, HeaderContainer, NavLinkStyled } from './Header.styled';
import { IoIosAddCircleOutline } from 'react-icons/io';
import Modal from 'components/Modal/Modal';
import AddForm from 'components/AddForm/AddForm';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <HeaderContainer>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
        <AddBtn onClick={openModal}>
          <IoIosAddCircleOutline />
        </AddBtn>
      </HeaderContainer>
      <Modal isOpen={isModalOpen} onClose={() => closeModal()}>
        <AddForm onClose={closeModal} />
      </Modal>
    </>
  );
};

export default Header;
