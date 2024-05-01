import React, { useState } from 'react';
import * as S from './User.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import { Link, useParams } from 'react-router-dom';

const User = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { userId } = useParams(); // 사용자 ID를 URL에서 가져옴 (루트 파라미터로 가정)

  const handleLogin = () => {
    // 로그인 로직을 구현
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // 로그아웃 로직을 구현
    setIsLoggedIn(false);
  };

  return (
    <S.Wrapper>
      <Header />
      {isLoggedIn ? (
        // 사용자가 로그인한 경우, 사용자 프로필 표시
        <UserProfile userId={userId} />
      ) : (
        // 사용자가 로그인하지 않은 경우, 로그인/회원가입 버튼 표시
        <LoginSignupButtons />
      )}
            <Menu isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />

    </S.Wrapper>
  );
};

const UserProfile = ({ userId }) => {
  return (
    <div>
      <h2>사용자 프로필 페이지 - 사용자 ID: {userId}</h2>
      {/* 다른 프로필 관련 컴포넌트 추가 */}
    </div>
  );
};

const LoginSignupButtons = () => {
  return (
    <S.LoginSignupButtonsContainer>
      <S.CatImage src='/img/cat_01.png'/>
      <S.InputContainer>
        <S.InputLabel htmlFor="username"></S.InputLabel>
        <S.InputField type="text" id="username" placeholder='이메일'/>
      </S.InputContainer>
      <S.InputContainer>
        <S.InputLabel htmlFor="password"></S.InputLabel>
        <S.InputField type="password" id="password" placeholder='비밀번호' />
      </S.InputContainer>
      <S.LoginButton>로그인</S.LoginButton>
      <S.TextAndSignupContainer>
        <S.Text>아직 계정이 없으신가요?</S.Text>
        <Link to="/SignUp/SignUp">
        <S.SignupButton>회원가입</S.SignupButton>
        </Link>
      </S.TextAndSignupContainer>
    </S.LoginSignupButtonsContainer>
  );
};

export default User;
