import styled, { css } from 'styled-components';
import { MdStar, MdStarOutline } from 'react-icons/md';

export const VideoContainer = styled.div`
  width: 70%;
  @media (max-width: 768px) {
    width: 90%;
  }
  margin: 1rem;
`;

export const VideoContent = styled.div`
  width: 100%;
`;

export const VideoTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    margin: 0;
    line-height: 1.2;
  `}
`;

export const VideoDescription = styled.p`
  color: gray;
  margin: 0;
`;

export const VideoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FavoriteButton = styled.button`
  ${({ theme }) => css`
    border: none;
    border-radius: 100px;
    outline: none;
    background-color: white;
    color: ${theme.colors.secondary};
    cursor: pointer;
    font-size: ${theme.fontSizes.medium};
    height: 52px;
    width: 52px;
    vertical-align: text-top;
    &:hover {
      box-shadow: 0 0 11px rgba(34, 34, 34, 0.4);
    }
  `}
`;

export const FavIcon = styled(MdStar)`
  font-size: 28px;
`;

export const UnFavIcon = styled(MdStarOutline)`
  font-size: 28px;
`;
