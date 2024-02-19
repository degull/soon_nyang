import React from 'react';
import * as S from './Map.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';


const Map = () => {
    return (
        <S.Wrapper>
            <Header />
            <h1>고앵이 위치</h1>
            <Menu />
        </S.Wrapper>
    );
};

export default Map;