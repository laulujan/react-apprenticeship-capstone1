import React, { useState, useRef, useEffect } from 'react';
import { Button, MenuIcon } from './Menu.styled.js';
import Dropdown from '../Dropdown/Dropdown';
import { useAuth } from '../../providers/Auth/Auth.provider';

const Menu = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isDropDownOpen && ref.current && !ref.current.contains(e.target)) {
        setIsDropDownOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
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
    if (isLoggedIn === true) {
      dropdownList.push({ label: 'Favorites', path: '/favorites' });
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
