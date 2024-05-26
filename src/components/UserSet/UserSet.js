import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import * as S from './UserSet.styled';
import { useNavigate } from 'react-router-dom';

const UserSet = () => {
    const [nickname, setNickname] = useState('');
    const [introduction, setIntroduction] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log('Initial token check:', token); // 로그 추가
        if (!token) {
            navigate('/');
        }
    }, [navigate]);

    const handleSave = async () => {
        const token = localStorage.getItem('token');
        console.log('Retrieved token:', token); // 토큰 확인용 로그
        if (!token) {
            alert('로그인이 필요합니다.');
            navigate('/');
            return;
        }

        try {
            const response = await fetch('http://ec2-3-34-122-124.ap-northeast-2.compute.amazonaws.com:8080/v1/members', {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`, // JWT 토큰을 포함한 Authorization 헤더
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nickname, introduction }),
            });

            console.log('Response status:', response.status); // 응답 상태 코드 확인용 로그
            console.log('Response headers:', response.headers); // 응답 헤더 확인용 로그

            if (response.ok) {
                alert('정보가 성공적으로 업데이트되었습니다.');
                localStorage.setItem('user', JSON.stringify({ nickname, introduction })); // 업데이트된 정보 저장
                navigate('/'); // 로그인 페이지로 이동
            } else {
                try {
                    const data = await response.json();
                    console.log('Response data:', data); // 응답 데이터 로그
                    alert('정보 업데이트 실패: ' + data.message);
                } catch (e) {
                    console.error('JSON 파싱 중 오류 발생:', e);
                    alert('정보 업데이트 실패: 서버 응답 형식이 잘못되었습니다.');
                }
            }
        } catch (error) {
            console.error('정보 수정 중 오류 발생:', error);
            alert('정보 수정 중 오류가 발생했습니다.');
        }
    };

    return (
        <S.Wrapper>
            <Header />
            <S.UserContainer>
                <S.Title>집사 정보</S.Title>
                <S.Form1>
                    <S.Nickname>집사 이름</S.Nickname>
                    <S.Input 
                        type="text" 
                        id="nickname" 
                        placeholder="닉네임" 
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />
                </S.Form1>
                <S.Form2>
                    <S.UserIntro>간단한 소개</S.UserIntro>
                    <S.Input 
                        type="text" 
                        id='introduction' 
                        placeholder="소개" 
                        value={introduction}
                        onChange={(e) => setIntroduction(e.target.value)}
                    />
                </S.Form2>
                <S.Button onClick={handleSave}>저장하기</S.Button>
            </S.UserContainer>
            <Menu />
        </S.Wrapper>
    );
};

export default UserSet;
