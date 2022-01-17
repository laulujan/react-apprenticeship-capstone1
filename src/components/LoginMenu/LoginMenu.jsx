import React, { useState, useRef, useEffect } from 'react';
import { LoginMenuButton, Avatar } from './LoginMenu.styled';
import Dropdown from '../Dropdown/Dropdown';
import { useAuth } from '../../providers/Auth/Auth.provider';

const LoginMenu = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { isLoggedIn, logout, user } = useAuth();
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
    if (isLoggedIn) {
      logout();
    }

    setIsDropDownOpen(false);
  };
  const list = () => {
    let dropdownList = isLoggedIn
      ? [{ label: 'Logout', path: '/' }]
      : [{ label: 'Login', path: '/login' }];

    return dropdownList;
  };
  return (
    <div ref={ref}>
      <LoginMenuButton onClick={handleClick}>
        <Avatar
          alt="avatar"
          src={
            user?.avatarUrl ||
            'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png'
          }
        />
      </LoginMenuButton>
      {isDropDownOpen && (
        <Dropdown
          list={list}
          pos={{ right: 0 }}
          onClick={handleClick}
          onSelect={onSelect}
        />
      )}
    </div>
  );
};

export default LoginMenu;
