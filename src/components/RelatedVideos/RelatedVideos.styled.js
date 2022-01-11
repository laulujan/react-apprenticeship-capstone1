import styled from 'styled-components';

export const RelatedContent = styled.div`
  width: 30%;
  height: 100%;
  margin: 1rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const VideoItem = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  display: flex;
  padding: 10px;
  cursor: pointer;
  align-items: center;
  &:hover {
    box-shadow: 6px 6px 14px -11px rgba(34, 34, 34, 0.4);
  }
`;

export const Image = styled.img`
  width: 120px;
  height: 90px;
`;

export const Title = styled.h4`
  margin: 1rem;
  width: 100%;
`;
