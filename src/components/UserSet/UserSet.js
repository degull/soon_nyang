import React, { useState, useRef } from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import * as S from './UserSet.styled';

const UserSet = () => {
    const [image, setImage] = useState('/img/UserImg.png');
    const fileInputRef = useRef(null);

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
                    <S.Input type="text" id="nickname" placeholder="닉네임" />
                </S.Form1>

                <S.Form2>
                    <S.UserIntro>간단한 소개</S.UserIntro>
                    <S.Input type="text" id='introduction' placeholder="소개" />
                
                    </S.Form2>
                <S.Button>저장하기</S.Button>
            </S.UserContainer>
            <Menu />
        </S.Wrapper>
    );
};

export default UserSet;
