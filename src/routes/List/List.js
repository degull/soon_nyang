import React from 'react';
import * as S from './List.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

const List = () => {
    return (
        <S.Wrapper>
            <Header />
                <h1>고앵이 리스트</h1>
            <Menu />
        </S.Wrapper>
    );
};

export default List;