// CatDetail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './CatDetail.styled'; // 스타일 컴포넌트 파일을 가정
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

const CatDetail = () => {
    const { catId } = useParams(); // URL에서 catId를 추출
    const [cat, setCat] = useState(null); // 고양이 정보를 저장할 상태
    const [loading, setLoading] = useState(true); // 로딩 상태

    useEffect(() => {
        const fetchCatDetails = async () => {
            try {
                const response = await fetch(`http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/cats/${catId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch cat details');
                }
                const data = await response.json();
                setCat(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching cat details:', error);
                setLoading(false);
            }
        };

        fetchCatDetails();
    }, [catId]);

    if (loading) {
        return <S.LoadingWrapper>Loading...</S.LoadingWrapper>;
    }

    return cat ? (
        <S.Wrapper>
         <Header />
         <S.ListBox>
            <S.DetailContainer>
               <S.CatImage src={cat.imageUrl} alt={cat.name} />
               <S.InfoWrapper>
                  <S.InfoItem>
                     <S.InfoLabel>이름 :</S.InfoLabel>
                     <S.InfoContent>{cat.name}</S.InfoContent>
                  </S.InfoItem>
                  <S.InfoItem>
                     <S.InfoLabel>나이 :</S.InfoLabel>
                     <S.InfoContent>{cat.age}</S.InfoContent>
                  </S.InfoItem>
                  <S.InfoItem>
                     <S.InfoLabel>성별 :</S.InfoLabel>
                     <S.InfoContent>{cat.gender === 'MALE' ? 'Male' : 'Female'}</S.InfoContent>
                  </S.InfoItem>
                  <S.InfoItem>
                     <S.InfoLabel>좋아요 :</S.InfoLabel>
                     <S.InfoContent>{cat.followerCnt}</S.InfoContent>
                  </S.InfoItem>
               </S.InfoWrapper>

            </S.DetailContainer>
         </S.ListBox>
            
            <Menu />
        </S.Wrapper>
    ) : (
        <S.ErrorWrapper>Error loading the cat's details.</S.ErrorWrapper>
    );
};

export default CatDetail;
