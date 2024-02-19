import React from 'react';
import * as S from  './Header.styled';

const Header = () => {
    return (
        <S.Wrapper>
            <S.HeaderContainer>
            <S.Title>순냥이 길들이기</S.Title>
            <S.Food src='/img/Food.png' />
            <S.Map src='/img/Map.png' />
        </S.HeaderContainer>

      </S.Wrapper>
    );
};

export default Header;