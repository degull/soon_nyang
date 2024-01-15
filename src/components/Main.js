import React,{ useState, useEffect } from 'react';
import * as  S from './Main.styled';


export default function Main(){
   const [post, setPost] = useState(null);

   useEffect(()=>{
      fetch("")
      .then(response=>response.json())
      .then(data => setPost(data))
      .catch(error => console.error("Error fetching data: ", error));
   },[]);

/*    if(!post){
      return<div>loading...</div>;
   } */

   return (
      <S.Wrapper>
         <S.Header>
            <S.Title>순냥이 길들이기</S.Title>
            <S.Food src='/img/Food.png' />
            <S.Map src='/img/Map.png'/>
         </S.Header>
      </S.Wrapper>
   );
};

