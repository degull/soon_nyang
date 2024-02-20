import React from 'react';
import * as S from './User.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

const User = () => {
    return (
        <S.Wrapper>
            <Header />
                <h1>사용자</h1>
            <Menu />
        </S.Wrapper>
    );
};

export default User;