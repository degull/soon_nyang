// User.js

import React, { useState } from 'react';
import * as S from './User.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import { Link, useNavigate } from 'react-router-dom';

const User = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [userRole, setUserRole] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, password }),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem('token', data.token);
        setUserRole(data.role);
        setIsLoggedIn(true);
        navigate('/UserSet/UserSet');
      } else {
        alert('로그인 실패: ' + data.msg);
      }
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
      alert('로그인 중 오류가 발생했습니다.');
    }
  };

  const checkUserRole = () => {
    if (userRole === 'ROLE_USER') {
      return true;
    } else {
      return false;
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  };

  return (
    <S.Wrapper>
      <Header />
      {isLoggedIn ? (
        <UserProfile />
      ) : (
        <LoginSignupButtons 
          username={username} 
          setUsername={setUsername} 
          password={password} 
          setPassword={setPassword} 
          handleLogin={handleLogin} 
        />
      )}
      <Menu isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
    </S.Wrapper>
  );
};

const UserProfile = () => {
  return (
    <div>
      <h2>사용자 프로필 페이지</h2>
    </div>
  );
};

const LoginSignupButtons = ({ username, setUsername, password, setPassword, handleLogin }) => {
  return (
    <S.LoginSignupButtonsContainer>
      <S.CatImage src='/img/cat_01.png'/>
      <S.InputContainer>
        <S.InputLabel htmlFor="username"></S.InputLabel>
        <S.InputField 
          type="text" 
          id="username" 
          placeholder='이메일' 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </S.InputContainer>
      <S.InputContainer>
        <S.InputLabel htmlFor="password"></S.InputLabel>
        <S.InputField 
          type="password" 
          id="password" 
          placeholder='비밀번호' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </S.InputContainer>
      <S.LoginButton onClick={handleLogin}>로그인</S.LoginButton>
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
