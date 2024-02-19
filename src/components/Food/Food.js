import React from 'react';
import * as S from './Food.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

export default function Food(){
   return (
      <S.Wrapper>
         <Header />
            <h1>급식소</h1>
         <Menu />
      </S.Wrapper>
   );
};

