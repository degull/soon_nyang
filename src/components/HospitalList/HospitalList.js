import React, { useEffect, useState } from 'react';
import * as S from './HospitalList.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

const HospitalList = () => {
    return (
        <S.Wrapper>
            <Header />
                 병원정보
            <Menu />
        </S.Wrapper>
    );
};

export default HospitalList;