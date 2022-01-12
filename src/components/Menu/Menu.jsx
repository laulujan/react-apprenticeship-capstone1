import React, { useState } from 'react';
import { Button, MenuIcon } from './Menu.styled.js';
import Dropdown from '../Dropdown/Dropdown';

const Menu = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(true);
  const handleClick = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  const onSelect = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const list = () => {
    let dropdownList = [{ label: 'Home', path: '/' }];
    if (isLogged === true) {
      dropdownList.push({ label: 'Favorites', path: '/favorites' });
      setIsLogged(true);
    }

    return dropdownList;
  };
  return (
    <div>
      <Button onClick={handleClick}>
        <MenuIcon />
      </Button>
      {isDropDownOpen && <Dropdown list={list} onSelect={onSelect} />}
    </div>
  );
};

export default Menu;
