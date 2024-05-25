
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
            <S.Title>마이페이지</S.Title>
            <S.Nickname>집사 이름: {nickname}</S.Nickname>
            <S.Introduction>간단한 소개: {introduction}</S.Introduction>
            <Menu />
        </S.Wrapper>
    );
};

export default Mypage;

