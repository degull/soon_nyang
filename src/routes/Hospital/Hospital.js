import React from 'react';
import * as S from './Hospital.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';


const Hospital = () => {
    return (
        <S.Wrapper>
            <Header />
                <h1>병원정보/질병진단</h1>
            <Menu />
        </S.Wrapper>
    );
};

export default Hospital;