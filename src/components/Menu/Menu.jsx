import React, { useState } from 'react';
import { Button, MenuIcon } from './Menu.styled.js';
import MenuDropdown from '../MenuDropdown/MenuDropdown';

const Menu = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleClick = () => {
    setIsDropDownOpen(!isDropDownOpen);
    console.log('open dropdown');
  };

  return (
    <div>
      <Button onClick={handleClick}>
        <MenuIcon />
      </Button>
      {isDropDownOpen && <MenuDropdown />}
    </div>
  );
};

export default Menu;
