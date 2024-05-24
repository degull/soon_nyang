/* import React, { useState, useRef } from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import * as S from './UserSet.styled';
import { useNavigate } from 'react-router-dom';

const UserSet = () => {
    const [image, setImage] = useState('/img/UserImg.png');
    const [nickname, setNickname] = useState('');
    const [introduction, setIntroduction] = useState('');
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClickImage = () => {
        fileInputRef.current.click();
    };

    const handleSave = async () => {
        try {
            const token = localStorage.getItem('token');
            const formData = new FormData();
            formData.append('nickname', nickname);
            formData.append('introduction', introduction);
            formData.append('image', fileInputRef.current.files[0]);

            const response = await fetch('http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/members', {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });

            if (response.ok) {
                alert('정보가 성공적으로 업데이트되었습니다.');
                navigate('/MyPage', { state: { nickname, introduction } });
            } else {
                const data = await response.json();
                alert('정보 업데이트 실패: ' + data.message);
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
                <S.UserImg src={image} onClick={handleClickImage} alt="User Profile" />
                <input 
                    type="file" 
                    style={{ display: 'none' }} 
                    onChange={handleImageChange} 
                    ref={fileInputRef} 
                />
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

export default UserSet; */

import React, { useState } from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import * as S from './UserSet.styled';
import { useNavigate } from 'react-router-dom';

const UserSet = () => {
    const [nickname, setNickname] = useState('');
    const [introduction, setIntroduction] = useState('');
    const navigate = useNavigate();

    const handleSave = async () => {
        try {
            const token = localStorage.getItem('token');
            const formData = new FormData();
            formData.append('nickname', nickname);
            formData.append('introduction', introduction);

            const response = await fetch('http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/members', {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });

            if (response.ok) {
                alert('정보가 성공적으로 업데이트되었습니다.');
                navigate('/MyPage', { state: { nickname, introduction } });
            } else {
                const data = await response.json();
                alert('정보 업데이트 실패: ' + data.message);
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
