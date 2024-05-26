/* import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Mypage.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const Mypage = () => {
    const [nickname, setNickname] = useState('');
    const [introduction, setIntroduction] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem('token');
      console.log('토큰:', token); // 토큰을 콘솔에 출력
      if (!token) {
          navigate('/'); // 토큰이 없으면 로그인 페이지로 이동
          return;
      }

        const fetchUserData = async () => {
            try {
                const response = await fetch('http://ec2-3-34-122-124.ap-northeast-2.compute.amazonaws.com:8080/v1/members', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setNickname(data.nickname);
                    setIntroduction(data.introduction);
                } else {
                    const data = await response.json();
                    alert('사용자 정보를 가져오는 데 실패했습니다: ' + data.message);
                }
            } catch (error) {
                console.error('사용자 정보를 가져오는 중 오류 발생:', error);
                alert('사용자 정보를 가져오는 중 오류가 발생했습니다.');
            }
        };

        fetchUserData();
    }, [navigate]);

    return (
        <S.Wrapper>
            <Header />
            <S.MyPageContainer>
            <S.Title>MY PAGE</S.Title>
            <S.Nickname>
            집사 이름 : <span style={{ fontSize: '20px', marginLeft:'10px'}}> {nickname}</span>
            </S.Nickname>
            <S.Introduction>
            Introduction : <span style={{ fontSize: '20px', marginLeft:'10px' }}> {introduction}</span>
            </S.Introduction>

            </S.MyPageContainer>

            <Menu />
        </S.Wrapper>
    );
};

export default Mypage;
 *//* 
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Mypage.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const Mypage = () => {
    const [nickname, setNickname] = useState('');
    const [introduction, setIntroduction] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log('토큰:', token); // 토큰을 콘솔에 출력
        if (!token) {
            navigate('/'); // 토큰이 없으면 로그인 페이지로 이동
            return;
        }

        const fetchUserData = async () => {
            try {
                const response = await fetch('http://ec2-3-34-122-124.ap-northeast-2.compute.amazonaws.com:8080/v1/members', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setNickname(data.nickname);
                    setIntroduction(data.introduction);
                } else {
                    const data = await response.json();
                    alert('사용자 정보를 가져오는 데 실패했습니다: ' + data.message);
                }
            } catch (error) {
                console.error('사용자 정보를 가져오는 중 오류 발생:', error);
                alert('사용자 정보를 가져오는 중 오류가 발생했습니다.');
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        alert('로그아웃 되었습니다.');
        navigate('/');
    };

    return (
        <S.Wrapper>
            <Header />
            <S.MyPageContainer>
                <S.Title>MY PAGE</S.Title>
                <S.Nickname>
                    집사 이름 : <span style={{ fontSize: '20px', marginLeft: '10px' }}>{nickname}</span>
                </S.Nickname>
                <S.Introduction>
                    Introduction : <span style={{ fontSize: '20px', marginLeft: '10px' }}>{introduction}</span>
                </S.Introduction>
                <S.LogoutButton onClick={handleLogout}>Logout</S.LogoutButton>
            </S.MyPageContainer>
            <Menu />
        </S.Wrapper>
    );
};

export default Mypage;
*/

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Mypage.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const Mypage = () => {
    const [nickname, setNickname] = useState('');
    const [introduction, setIntroduction] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log('토큰:', token); // 토큰을 콘솔에 출력
        if (!token) {
            navigate('/'); // 토큰이 없으면 로그인 페이지로 이동
            return;
        }

        const fetchUserData = async () => {
            try {
                const response = await fetch('http://ec2-3-34-122-124.ap-northeast-2.compute.amazonaws.com:8080/v1/members', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setNickname(data.nickname);
                    setIntroduction(data.introduction);
                } else {
                    const data = await response.json();
                    alert('사용자 정보를 가져오는 데 실패했습니다: ' + data.message);
                }
            } catch (error) {
                console.error('사용자 정보를 가져오는 중 오류 발생:', error);
                alert('사용자 정보를 가져오는 중 오류가 발생했습니다.');
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        alert('로그아웃 되었습니다.');
        navigate('/');
    };

    return (
        <S.Wrapper>
            <Header />
            <S.MyPageContainer>
                <S.Title>MY PAGE</S.Title>
                <S.Nickname>
                    집사 이름 : <span style={{ fontSize: '20px', marginLeft: '10px' }}>{nickname}</span>
                </S.Nickname>
                <S.Introduction>
                    Introduction : <span style={{ fontSize: '20px', marginLeft: '10px' }}>{introduction}</span>
                </S.Introduction>
                <S.LogoutButton onClick={handleLogout}>Logout</S.LogoutButton>
            </S.MyPageContainer>
            <Menu />
        </S.Wrapper>
    );
};

export default Mypage;
