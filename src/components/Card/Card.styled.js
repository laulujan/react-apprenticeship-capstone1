import styled, { css } from 'styled-components';
import { Image } from 'rebass';

export const MyCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 20rem;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
  &:hover {
    box-shadow: 0 0 11px rgba(34, 34, 34, 0.4);
  }
  @media (max-width: 920px) {
    width: 15rem;
  }
  @media (max-width: 820px) {
    width: 100%;
  }
`;

export const CardContent = styled.div`
  padding: 2px 16px;
`;

export const CardImage = styled(Image)`
  width: 100%;
`;

export const CardTitle = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.text};
  `}
`;

export const CardDescription = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    word-wrap: break-word;
  `}
`;
