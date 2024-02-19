

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import * as S from './Main.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

export default function Main() {
  const navigate = useNavigate();  

  return (
    <S.Wrapper>
      <Header />

      <Menu />
    </S.Wrapper>
  );
}
