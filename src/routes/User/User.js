/* import React, { useState } from 'react';
import * as S from './User.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import { Link, useNavigate } from 'react-router-dom';
import  Cookies from 'js-cookie';

const User = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
      try {
        const response = await fetch('http://ec2-3-34-122-124.ap-northeast-2.compute.amazonaws.com:8080/v1/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: username, password }),
        });
        const data = await response.json();
        if (data.success) {
          Cookies.set('token', data.token);
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify({ nickname: data.nickname, introduction: data.introduction }));
          const token = data.token; // 받아온 토큰
          navigate('/UserSet/UserSet');
          alert('로그인 성공!');
        } else {
          alert('로그인 실패: ' + data.msg);
        }
      } catch (error) {
        console.error('로그인 중 오류 발생:', error);
        alert('로그인 중 오류가 발생했습니다.');
      }
    };

    return (
        <S.Wrapper>
            <Header />
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
            <Menu />
        </S.Wrapper>
    );
};

export default User; 
 */

//로그인 유지
/* 
import React, { useState, useEffect } from 'react';
import * as S from './User.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import { Link, useNavigate } from 'react-router-dom';

const User = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // 페이지가 로드될 때 로컬 스토리지에서 토큰을 확인하여 로그인 상태를 업데이트합니다.
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = async () => {
      try {
        const response = await fetch('http://ec2-3-34-122-124.ap-northeast-2.compute.amazonaws.com:8080/v1/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: username, password }),
        });
        const data = await response.json();
        if (data.success) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify({ nickname: data.nickname, introduction: data.introduction }));
          const token = data.token; // 받아온 토큰
          setIsLoggedIn(true); // 로그인 상태 업데이트
          navigate('/Mypage');
          alert('로그인 성공!');
        } else {
          alert('로그인 실패: ' + data.msg);
        }
      } catch (error) {
        console.error('로그인 중 오류 발생:', error);
        alert('로그인 중 오류가 발생했습니다.');
      }
    };

    return (
        <S.Wrapper>
            <Header />
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
            <Menu />
        </S.Wrapper>
    );
};

export default User;
 */

/* import React, { useState } from 'react';
import * as S from './User.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/Auth/AuthContext';

const User = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { dispatch } = useAuth();

    const handleLogin = async () => {
      try {
        const response = await fetch('http://ec2-3-34-122-124.ap-northeast-2.compute.amazonaws.com:8080/v1/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: username, password }),
        });
        const data = await response.json();
        if (data.success) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify({ nickname: data.nickname, introduction: data.introduction }));
          dispatch({ type: 'LOGIN', payload: { token: data.token } });
          navigate('/Mypage');
          alert('로그인 성공!');
        } else {
          alert('로그인 실패: ' + data.msg);
        }
      } catch (error) {
        console.error('로그인 중 오류 발생:', error);
        alert('로그인 중 오류가 발생했습니다.');
      }
    };

    return (
        <S.Wrapper>
            <Header />
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
            <Menu />
        </S.Wrapper>
    );
};

export default User;
 */


import React, { useState } from 'react';
import * as S from './User.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/Auth/AuthContext';
import ProtectedRoute from '../../components/Auth/ProtectedRoute';

const User = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('http://ec2-3-34-122-124.ap-northeast-2.compute.amazonaws.com:8080/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: username, password }),
            });
            const data = await response.json();
            if (data.success) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify({ nickname: data.nickname, introduction: data.introduction }));
                onLogin();  // 로그인 성공 시 부모 컴포넌트에 알리기
                navigate('/Mypage');
                alert('로그인 성공!');
            } else {
                alert('로그인 실패: ' + data.msg);
            }
        } catch (error) {
            console.error('로그인 중 오류 발생:', error);
            alert('로그인 중 오류가 발생했습니다.');
        }
    };

    return (
        <S.Wrapper>
            <Header />
            <S.LoginSignupButtonsContainer>
                <S.CatImage src='/img/cat_01.png' />
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
                    <Link to="/SignUp">
                        <S.SignupButton>회원가입</S.SignupButton>
                    </Link>
                </S.TextAndSignupContainer>
            </S.LoginSignupButtonsContainer>
            <Menu />
        </S.Wrapper>
    );
};

export default User;


