import React from 'react';
import * as S from './Menu.styled';


const Menu = () => {
    return (
        <S.Wrapper>
            <S.MenuContainer>
            <S.Icon src="/img/home.png" alt="Home" />
            <S.Icon src="/img/list.png" alt="List" />
            <S.Icon src="/img/write.png" alt="Write" />
            <S.Icon src="/img/hospital.png" alt="Hospital" />
            <S.Icon src="/img/user.png" alt="User" />
            </S.MenuContainer>
        </S.Wrapper>
    );
};

export default Menu;