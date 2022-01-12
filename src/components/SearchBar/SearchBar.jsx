import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Input from './SearchBar.styled';
import { useVideo } from '../../providers/Video/Video.provider';

const SearchBar = () => {
  const { searchItem, setSearchItem, fetchVideos } = useVideo();
  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    setSearchItem(e.target.value);
    if (location.pathname !== '/') {
      history.push('/');
    }
  };

  const handleOnKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchVideos(searchItem);
    }
  };

  useEffect(() => {
    fetchVideos(searchItem);
  }, []);

  return (
    <div>
      <Input
        type="text"
        placeholder="Search"
        value={searchItem}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      />
    </div>
  );
};

export default SearchBar;
