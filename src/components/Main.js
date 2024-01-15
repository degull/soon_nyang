

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import * as S from './Main.styled';
import Food from './Food/Food';

export default function Main() {
  /* const [post, setPost] = useState(null); */
  const navigate = useNavigate();  

/*   useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []); */

  const handleFoodClick = () => {
    // Navigate to the Food component
    navigate('./Food/Food.js');
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>순냥이 길들이기</S.Title>
        <S.Food src='/img/Food.png' onClick={handleFoodClick} />
        <S.Map src='/img/Map.png' />
      </S.Header>
    </S.Wrapper>
  );
}
