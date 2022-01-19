import styled, { css } from 'styled-components';
import { Image } from 'rebass';

export const LoginMenuButton = styled.button`
  ${({ theme }) => css`
    border: none;
    border-radius: 100px;
    outline: none;
    background: ${theme.colors.primary};
    color: white;
    cursor: pointer;
    font-size: 2em;
    height: 52px;
    width: 52px;
    &:hover {
      box-shadow: 0 0 11px rgba(34, 34, 34, 0.4);
    }
  `}
`;

export const Avatar = styled(Image)`
  border-radius: 100px;
  vertical-align: text-top;
`;
