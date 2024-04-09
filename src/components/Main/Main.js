import React, { useState, useEffect } from 'react';
import * as S from './Main.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

export default function Main() {
  // 임시 데이터
  const cats = [
    {
      id: 1,
      image: '/img/lulu.jpg',
      name: '루루',
      owner: '데굴데굴',
      files: '/img/zzon.jpg',
      likes: 110,
      content: '루루 우리집가자',
    },
    {
      id: 2,
      image: 'cat2.jpg',
      name: '야옹이2',
      owner: '사용자2',
      likes: 7,
      content: '사용자2가 등록한 고양이2의 글입니다.',
    },
    // 추가적인 고양이 데이터는 필요에 따라 계속해서 추가할 수 있습니다.
  ];

  return (
    <S.Wrapper>
      <Header />
      {/* 고양이 목록 출력 */}
      {cats.map((cat, index) => (
        <div key={index}>
          {/* 고양이 이미지 */}
          <div>
            <img src={cat.image} alt={cat.name} style={{ width: '45px', height: '45px', borderRadius: '50%' }} />
          </div>
          {/* 고양이 이름 */}
          <div>{cat.name}</div>
          {/* 사용자 닉네임 */}
          <div>{cat.owner}</div>

          <div>
          <img src={cat.files} style={{ width: '300px', height: '300px'}}/>
          </div>

          
          {/* 좋아요 개수 */}
          <div>좋아요 {cat.likes}개</div>
          {/* 사용자가 등록한 글 내용 */}
          <div>{cat.content}</div>
        </div>
      ))}
      <Menu />
    </S.Wrapper>
  );
}
