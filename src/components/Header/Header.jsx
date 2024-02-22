import React, { useState } from 'react';
import { AddBtn, HeaderContainer, NavLinkStyled } from './Header.styled';
import { IoIosAddCircleOutline } from 'react-icons/io';
import Modal from 'components/Modal/Modal';

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
          <IoIosAddCircleOutline style={{ fontSize: '24px' }} />
        </AddBtn>
      </HeaderContainer>
      <Modal isOpen={isModalOpen} onClose={() => closeModal()} />
    </>
  );
};

export default Header;
