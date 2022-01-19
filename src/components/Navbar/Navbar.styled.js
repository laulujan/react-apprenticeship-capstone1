import styled, { css } from 'styled-components';
import { Flex as flexBase } from 'rebass/styled-components';

export const Flex = styled(flexBase)`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    position: fixed;
    top: 0;
    width: 100%;
  `}
`;
