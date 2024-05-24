import React, { useState } from 'react';
import * as S from './SignUp.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [passwordConfirmation, setPasswordConfirmation] = useState('');
   const navigate = useNavigate();

   const handleEmailChange = (event) => {
      setEmail(event.target.value);
   };

   const handlePasswordChange = (event) => {
      setPassword(event.target.value);
   };

   const handlePasswordConfirmationChange = (event) => {
      setPasswordConfirmation(event.target.value);
   };

   const handleSignUp = async () => {
      if (password !== passwordConfirmation) {
         alert('비밀번호가 일치하지 않습니다.');
         return;
      }

      try {
         const response = await axios.post('http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/auth/register', { email, password });
         if (response.data.success) {
            navigate('/UserSet/UserSet');
         } else {
            alert('회원가입 실패: ' + response.data.msg);
         }
      } catch (error) {
         console.error('회원가입 중 오류 발생:', error);
         alert('회원가입 중 오류가 발생했습니다.');
      }
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
               <S.PWStyle type="password" placeholder="비밀번호" value={password} onChange={handlePasswordChange} />
            </S.PWContainer>
            <S.PWConfirmationContainer>
               <S.PWConfirmation>비밀번호 확인</S.PWConfirmation>
               <S.PWConfirmationStyle type="password" placeholder="비밀번호확인" value={passwordConfirmation} onChange={handlePasswordConfirmationChange} />
            </S.PWConfirmationContainer>
            <S.Button onClick={handleSignUp}>가입하기</S.Button>
         </S.SignContainer>
         <Menu />
      </S.Wrapper>
   );
};

export default SignUp;
