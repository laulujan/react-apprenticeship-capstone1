import styled, { css } from 'styled-components';

export const MyDropdown = styled.div.attrs((props) => ({
  className: props.className,
}))`
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
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
