import styled, { css } from 'styled-components';
import { Image } from 'rebass';

export const MyCard = styled.div`
${({ theme }) => css`
  box-shadow: 0 4px 8px 0 ${theme.colors.shadow};
  width: 20rem;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 11px ${theme.colors.shadowHover};
  }
  @media (max-width: 920px) {
    width: 15rem;
  }
  @media (max-width: 820px) {
    width: 100%;
  }
`}}
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
