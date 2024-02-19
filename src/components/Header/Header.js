import React from 'react';
import * as S from  './Header.styled';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <S.Wrapper>
            <S.HeaderContainer>
            <Link to="/">
            <S.Title>순냥이 길들이기</S.Title>
            </Link>
            
            <Link to="/Food/Food">
            <S.Food src='/img/Food.png' />
            </Link>

            <Link to="/Map/Map">
                <S.Map src='/img/Map.png' />
            </Link>
        </S.HeaderContainer>

      </S.Wrapper>
    );
};

export default Header;