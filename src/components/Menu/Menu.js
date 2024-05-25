/* import React from 'react';
import * as S from './Menu.styled';
import { Link } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Menu = () => {
    return (
        <S.Wrapper>
            <S.MenuContainer>
                <Link to="/" onClick={scrollToTop}> 
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

                <Link to="/User/User"> 
                    <S.Icon src="/img/user.png" alt="User" />
                </Link>
            </S.MenuContainer>
        </S.Wrapper>
    );
};

export default Menu;
 */

import React, { useState } from 'react';
import * as S from './Menu.styled';
import { Link } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Menu = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 사용자가 로그인한 경우
    const handleLogin = () => {
        // 로그인 상태 변경
        setIsLoggedIn(true);
    };

    // 사용자가 로그아웃한 경우
    const handleLogout = () => {
        // 로그인 상태 변경
        setIsLoggedIn(false);
    };

    return (
        <S.Wrapper>
            <S.MenuContainer>
                {/* 홈 아이콘 클릭 시 맨 위로 스크롤 */}
                <Link to="/" onClick={scrollToTop}> 
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

                {/* 로그인한 경우 */}
                {isLoggedIn ? (
                    <Link to="/Mypage"> {/* Mypage로 이동 */}
                        <S.Icon src="/img/mypage.png" alt="Mypage" />
                    </Link>
                ) : (
                    <Link to="/User/User"> {/* User로 이동 */}
                        <S.Icon src="/img/user.png" alt="User" />
                    </Link>
                )}
            </S.MenuContainer>
        </S.Wrapper>
    );
};

export default Menu;
