

import React, { useState, useEffect } from 'react';
import * as S from './Main.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

export default function Main() {

  return (
    <S.Wrapper>
      <Header />
        {/* api 추가 */}

      <Menu />
    </S.Wrapper>
  );
}

/* 
//프로필
고양이 사진 프로필 : catlist에서 가져와야함
사용자 : nickname -> "nickname": "순냥이 집사 호소인"

//글
사용자 등록 이미지 : imageUrl -> "imageUrl": "https://flexible.img.hani.co.kr/flexible/normal/743/478/imgdb/original/2023/0208/8916758411258711.jpg"
사용자 등록 글 : content -> content": "미랩 앞에서 만난 귀여운 루루!"
좋아요 : myEmotion(like) -> "myEmotion": "like"
좋아요 개수 : 
*/