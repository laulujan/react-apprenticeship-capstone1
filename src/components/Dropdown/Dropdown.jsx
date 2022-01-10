import React from 'react';
import { List, ListItem, MyDropdown } from './Dropdown.styled';

const Dropdown = ({ list, pos }) => {
  return (
    <MyDropdown style={pos}>
      <List>
        {list && list.map((item) => <ListItem key={item}>{item}</ListItem>)}
      </List>
    </MyDropdown>
  );
};

export default Dropdown;
