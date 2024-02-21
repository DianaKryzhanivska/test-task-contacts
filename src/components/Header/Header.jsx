import React from 'react';
import { NavLink } from 'react-router-dom';
import { AddBtn, HeaderContainer } from './Header.styled';
import { IoIosAddCircleOutline } from 'react-icons/io';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <AddBtn>
          <IoIosAddCircleOutline style={{ fontSize: '24px' }} />
        </AddBtn>
      </HeaderContainer>
    </>
  );
};

export default Header;
