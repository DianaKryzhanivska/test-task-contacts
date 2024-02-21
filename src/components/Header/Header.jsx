import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AddBtn, HeaderContainer } from './Header.styled';
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
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <AddBtn onClick={openModal}>
          <IoIosAddCircleOutline style={{ fontSize: '24px' }} />
        </AddBtn>
      </HeaderContainer>
      <Modal isOpen={isModalOpen} onClose={() => closeModal()} />
    </>
  );
};

export default Header;
