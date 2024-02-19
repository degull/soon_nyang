

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import * as S from './Main.styled';
import Footer from '../Footer/Footer';
import Food from '../Food/Food';
import Header from '../Header/Header';

export default function Main() {
  const navigate = useNavigate();  

  return (
    <S.Wrapper>
      <Header />

      <Footer />
    </S.Wrapper>
  );
}
