import React from 'react';
import * as S from './Write.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

const Write = () => {
    return (
        <S.Wrapper>
            <Header />
                <h1>글쓰기</h1>
            <Menu />
        </S.Wrapper>
    );
};

export default Write;