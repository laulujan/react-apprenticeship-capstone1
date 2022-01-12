import React, { useEffect } from 'react';
import Input from './SearchBar.styled';
import { useVideo } from '../../providers/Video/Video.provider';

const SearchBar = () => {
  const { searchItem, setSearchItem, fetchVideos } = useVideo();

  const handleOnChange = (e) => {
    setSearchItem(e.target.value);
    console.log(searchItem);
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
