import styled, { css } from 'styled-components';
import { MdMenu } from 'react-icons/md';

export const Button = styled.button`
  ${({ theme }) => css`
    border: none;
    border-radius: 100px;
    outline: none;
    background: ${theme.colors.primary};
    color: ${theme.colors.bg};
    cursor: pointer;
    font-size: 2em;
    height: 52px;
    width: 52px;
    vertical-align: text-top;
    &:hover {
      box-shadow: 0 0 11px rgba(34, 34, 34, 0.4);
    }
  `}
`;

export const MenuIcon = styled(MdMenu)`
  vertical-align: top;
`;
