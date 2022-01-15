import React, { useState, useRef, useEffect } from 'react';
import { Button, MenuIcon } from './Menu.styled.js';
import Dropdown from '../Dropdown/Dropdown';

const Menu = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(true);
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isDropDownOpen && ref.current && !ref.current.contains(e.target)) {
        setIsDropDownOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isDropDownOpen]);

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
    <div ref={ref}>
      <Button onClick={handleClick}>
        <MenuIcon />
      </Button>
      {isDropDownOpen && <Dropdown list={list} onSelect={onSelect} />}
    </div>
  );
};

export default Menu;
