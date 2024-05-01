import React, { useState } from 'react';
import * as S from './SignUp.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';


const SignUp = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [nickname, setNickname] = useState('');

   // 입력값이 변경될 때마다 해당 상태 업데이트
   const handleEmailChange = (event) => {
      setEmail(event.target.value);
   };

   const handlePasswordChange = (event) => {
      setPassword(event.target.value);
   };

   const handleNicknameChange = (event) => {
      setNickname(event.target.value);
   };

      // 회원가입 버튼 클릭 시 처리
      const handleSignUp = () => {
         // 이메일, 비밀번호, 닉네임 값 사용하여 회원가입 처리
         // 여기에 실제 회원가입 로직을 추가하세요
         console.log('Email:', email);
         console.log('Password:', password);
         console.log('Nickname:', nickname);
      };


   return (
      <S.Wrapper>
         <Header />
         <S.SignContainer>
         <S.Title>회원가입</S.Title>

         <S.IdContainer>
            <S.ID>아이디</S.ID>
            <S.IDStyle type="email" placeholder="이메일을 입력해주세요" value={email} onChange={handleEmailChange} />
         </S.IdContainer>

         <S.PWContainer>
            <S.PW>비밀번호</S.PW>
            <S.PWStyle type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
         </S.PWContainer>


         <S.NicContainer>
            <S.Nic>닉네임</S.Nic>
            <S.NicStyle type="text" placeholder="Nickname" value={nickname} onChange={handleNicknameChange} />

         </S.NicContainer>
            
            
            <S.Button onClick={handleSignUp}>가입하기</S.Button>
         </S.SignContainer>
         <Menu />
      </S.Wrapper>
   );
};

export default SignUp;