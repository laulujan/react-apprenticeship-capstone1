import React from 'react';
import { Box } from 'rebass/styled-components';
import { Flex } from './Navbar.styled';
import ToggleTheme from '../ThemeButton/ThemeButton';
import SearchBar from '../SearchBar/SearchBar';
import Menu from '../Menu/Menu';
import LoginMenu from '../LoginMenu/LoginMenu';

const Navbar = () => {
  return (
    <Flex px={2} alignItems="center">
      <Menu />
      <Box width={1 / 2}>
        <SearchBar />
      </Box>
      <Box mx="auto" />
      <ToggleTheme />
      <LoginMenu />
    </Flex>
  );
};

export default Navbar;
