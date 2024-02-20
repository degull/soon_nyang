

import React, { useState, useEffect } from 'react';
import * as S from './Main.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

export default function Main() {

  return (
    <S.Wrapper>
      <Header />

      <Menu />
    </S.Wrapper>
  );
}
