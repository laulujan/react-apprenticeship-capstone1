import styled, { css } from 'styled-components';

export const RelatedContent = styled.div`
  width: 30%;
  height: 100%;
  margin: 1rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const VideoItem = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border-bottom: 1px solid gray;
    display: flex;
    padding: 10px;
    cursor: pointer;
    align-items: center;
    &:hover {
      box-shadow: 6px 6px 14px -11px ${theme.colors.shadowHover};
    }
  `}
`;

export const Image = styled.img`
  width: 120px;
  height: 90px;
`;

export const Title = styled.p`
  margin: 1rem;
  width: 100%;
  font-size: 1rem;
  line-height: 1.3;
  word-wrap: break-word;
`;
