import React from 'react';
import { List, ListItem, Dropdown } from './MenuDropdown.styled';

const MenuDropdown = () => {
  return (
    <Dropdown>
      <List>
        <ListItem>Home</ListItem>
        <ListItem>Favorites</ListItem>
      </List>
    </Dropdown>
  );
};

export default MenuDropdown;
