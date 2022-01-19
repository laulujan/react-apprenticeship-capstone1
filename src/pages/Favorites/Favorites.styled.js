import styled, { css } from 'styled-components';

export const Box = styled.div`
  ${({ theme }) => css`
    margin: auto;
    margin-top: 10em;
    border-radius: 5px;
    background-color: ${theme.colors.bg2};
    padding: 20px;
    width: 50%;
    text-align: center;
    @media (max-width: 820px) {
      width: 100%;
    }
  `}
`;
