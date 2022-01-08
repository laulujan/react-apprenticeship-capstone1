import styled, { css } from 'styled-components';

const Input = styled.input`
  ${({ theme }) => css`
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background: ${theme.colors.light};
    border: none;
    border-radius: 20px;
    ::placeholder {
      color: ${theme.colors.text};
    }
  `}
`;

export default Input;
