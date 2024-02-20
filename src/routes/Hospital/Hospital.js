import React from 'react';
import * as S from './Hospital.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import CameraCapture from '../../components/Camera/CameraCapture';

const Hospital = () => {
  const handleCapture = (imageData) => {
    // 여기에서 이미지 데이터를 어떻게 처리할지 로직 추가
    console.log('캡쳐된 이미지 데이터:', imageData);
  };

  return (
    <S.Wrapper>
      <Header />
      <CameraCapture onCapture={handleCapture} />
      <Menu />
    </S.Wrapper>
  );
};

export default Hospital;
