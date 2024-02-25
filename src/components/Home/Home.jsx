import React from 'react';
import {
  Item,
  ActionList,
  HomeContainer,
  SubTitle,
  Title,
  NavLinkStyled,
  ListWrapper,
  LinkWrapper,
} from './Home.styled';
import { IoPersonAddOutline } from 'react-icons/io5';
import { FaDeleteLeft } from 'react-icons/fa6';
import { FaRegEdit } from 'react-icons/fa';
import { LuSearchCheck } from 'react-icons/lu';

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Title>
          Welcome to <span>Contacts</span> App
        </Title>
        <ListWrapper>
          <SubTitle>Here you can:</SubTitle>
          <ActionList>
            <Item>
              <IoPersonAddOutline />
              <p>add contacts</p>
            </Item>
            <Item>
              <FaDeleteLeft />
              <p>delete contacts</p>
            </Item>
            <Item>
              <FaRegEdit />
              <p>edit name, email and phone number </p>
            </Item>
            <Item>
              <LuSearchCheck />
              <p>search for a contact by name and email </p>
            </Item>
          </ActionList>
          <LinkWrapper>
            <NavLinkStyled to="/contacts">Start now</NavLinkStyled>
          </LinkWrapper>
        </ListWrapper>
      </HomeContainer>
    </>
  );
};

export default Home;
