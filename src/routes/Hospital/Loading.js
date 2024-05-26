import React from 'react';
import styled from 'styled-components';

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const LoadingContent = styled.div`
  text-align: center;
  color: white;
`;

const LoadingImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const LoadingText = styled.p`
  font-size: 18px;
  margin: 0;
`;

const Loading = () => (
  <LoadingOverlay>
    <LoadingContent>
      <LoadingImage src="/img/cat.png" alt="Loading" />
      <LoadingText>진단중...</LoadingText>
    </LoadingContent>
  </LoadingOverlay>
);

export default Loading;
