import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Input from './SearchBar.styled';
import { useVideo } from '../../providers/Video/provider';

const SearchBar = () => {
  const { searchItem, setSearchItem, fetchVideos } = useVideo();
  const history = useHistory();

  const handleOnChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleOnKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchVideos(searchItem);
      history.push('/');
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
