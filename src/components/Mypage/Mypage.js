import React, { useState, useRef } from 'react';
import * as S from './Mypage.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import axios from 'axios';

const Mypage = ({ nickname, introduction }) => {
   return (
      <S.Wrapper>
         <Header />

               <S.Title>마이페이지</S.Title>
                <S.Nickname>집사 이름: {nickname}</S.Nickname>
                <S.Introduction>간단한 소개: {introduction}</S.Introduction>
         <Menu />
      </S.Wrapper>
   );
};

export default Mypage;