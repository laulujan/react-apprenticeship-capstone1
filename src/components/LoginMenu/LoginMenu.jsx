import React, { useState } from 'react';

import { LoginMenuButton, Avatar } from './LoginMenu.styled';
import Dropdown from '../Dropdown/Dropdown';

const LoginMenu = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleClick = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  return (
    <div>
      <LoginMenuButton onClick={handleClick}>
        <Avatar src="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png" />
      </LoginMenuButton>
      {isDropDownOpen && <Dropdown list={['Login']} pos={{ right: 0 }} />}
    </div>
  );
};

export default LoginMenu;
