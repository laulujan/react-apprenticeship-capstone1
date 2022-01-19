import styled, { css } from 'styled-components';

export const MyDropdown = styled.div.attrs((props) => ({
  className: props.className,
}))`
  ${({ theme }) => css`
    position: absolute;
    background-color: ${theme.body};
    min-width: 160px;
    border-radius: 5px;
    border: 1px solid gray;
    z-index: 1;
  `}
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: center;
`;

export const ListItem = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    display: block;
    &:hover {
      background-color: gray;
      color: white;
    }
  `}
`;
