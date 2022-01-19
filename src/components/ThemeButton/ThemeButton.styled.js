import styled, { css } from 'styled-components';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';

export const ThemeButton = styled.button`
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

export const LightIcon = styled(BsSunFill)`
  font-size: 28px;
`;

export const DarkIcon = styled(BsFillMoonStarsFill)`
  font-size: 28px;
`;
