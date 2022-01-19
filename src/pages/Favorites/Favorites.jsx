import React from 'react';
import CardWrapper from '../../components/CardWrapper/CardWrapper';
import { useVideo } from '../../providers/Video/provider';
import { Box } from './Favorites.styled';

const Favorites = () => {
  const { favorites } = useVideo();
  return (
    <>
      {favorites.length > 0 ? (
        <CardWrapper videos={favorites} isFavorites={true} />
      ) : (
        <Box>No Favorite videos Found</Box>
      )}
    </>
  );
};

export default Favorites;
