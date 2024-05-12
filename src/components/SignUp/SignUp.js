import React, { useState } from 'react';
import * as S from './SignUp.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';

const SignUp = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [passwordConfirmation, setPasswordConfirmation] = useState('');

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
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Password Confirmation:', passwordConfirmation);
   
      if (password !== passwordConfirmation) {
         alert('비밀번호가 일치하지 않습니다.');
         return;
      }
   
      try {
         // Call your API for sign-up
         // await apiCallForSignUp(email, password, nickname);
   
         console.log('Sign-up successful!');
   
         // Redirect to the User component after successful sign-up
         // history.push('/user');
      } catch (error) {
         console.error('Sign-up error:', error);
         alert('Sign-up failed. Please try again.');
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
            
            {/* Use Link to navigate to User component */}
            <Link to="/UserSet/UserSet">
               <S.Button onClick={handleSignUp}>가입하기</S.Button>
            </Link>
         </S.SignContainer>
         <Menu />
      </S.Wrapper>
   );
};

export default SignUp;
