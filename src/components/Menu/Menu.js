import React from 'react';
import * as S from './Menu.styled';
import { Link } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Menu = ({ isLoggedIn, onLogout }) => {
    return (
        <S.Wrapper>
            <S.MenuContainer>
                <Link to="/Main/Main" onClick={scrollToTop}> 
                    <S.Icon src="/img/home.png" alt="Home" />
                </Link>
                <Link to="/List/List">
                    <S.Icon src="/img/list.png" alt="List" />
                </Link>
                <Link to="/Write/Write"> 
                    <S.Icon src="/img/write.png" alt="Write" />
                </Link>
                <Link to="/Hospital/Hospital"> 
                    <S.Icon src="/img/hospital.png" alt="Hospital" />
                </Link>
                <Link to="/Mypage">
                        <S.Icon src="/img/user.png" alt="Mypage" />
                    </Link>
{/*                 {isLoggedIn && (
                    <Link to="/Mypage">
                        <S.Icon src="/img/user.png" alt="Mypage" />
                    </Link>
                )} */}
            </S.MenuContainer>
        </S.Wrapper>
    );
};

export default Menu;
