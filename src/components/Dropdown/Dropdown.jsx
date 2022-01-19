import React from 'react';
import { useHistory } from 'react-router-dom';
import { List, ListItem, MyDropdown } from './Dropdown.styled';

const Dropdown = ({ list, pos, onSelect }) => {
  const history = useHistory();

  const handleClick = (path) => {
    history.push(path);
    onSelect();
  };

  return (
    <MyDropdown style={pos}>
      <List>
        {list &&
          list().map((item) => (
            <ListItem key={item.label} onClick={() => handleClick(item.path)}>
              {item.label}
            </ListItem>
          ))}
      </List>
    </MyDropdown>
  );
};

export default Dropdown;
