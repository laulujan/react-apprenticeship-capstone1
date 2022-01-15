import React, { useState, useRef, useEffect } from 'react';

import { LoginMenuButton, Avatar } from './LoginMenu.styled';
import Dropdown from '../Dropdown/Dropdown';

const LoginMenu = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
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
  const list = () => {
    let dropdownList = [{ label: 'Login', path: '/' }];
    if (isLogged === true) {
      dropdownList.push({ label: 'Logout', path: '/favorites' });
      setIsLogged(true);
    }

    return dropdownList;
  };
  return (
    <div ref={ref}>
      <LoginMenuButton onClick={handleClick}>
        <Avatar src="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png" />
      </LoginMenuButton>
      {isDropDownOpen && <Dropdown list={list} pos={{ right: 0 }} />}
    </div>
  );
};

export default LoginMenu;
