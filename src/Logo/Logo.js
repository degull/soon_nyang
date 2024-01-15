
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Logo.styled';
import Main from '../components/Main';

export default function Logo() {
  const navigate = useNavigate();
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLogo(false);
      navigate('/main');
    }, 3000); 

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <>
      {showLogo && (
        <S.Wrapper>
            <S.Logo src="/img/loading_02.png" showLoading1 />
        </S.Wrapper>
      )}
      {!showLogo && <Main />}
    </>
  );
}
