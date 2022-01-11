import React, { useState } from 'react';
import { Button, MenuIcon } from './Menu.styled.js';
import Dropdown from '../Dropdown/Dropdown';

const Menu = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleClick = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  return (
    <div>
      <Button onClick={handleClick}>
        <MenuIcon />
      </Button>
      {isDropDownOpen && <Dropdown list={['Home', 'Favorites']} />}
    </div>
  );
};

export default Menu;
