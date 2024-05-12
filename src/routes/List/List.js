import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // 추가: react-router-dom의 useNavigate 훅을 사용
import * as S from './List.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

const List = () => {
    const [cats, setCats] = useState([]); // 고양이 데이터 배열
    const navigate = useNavigate(); // 추가: navigate 함수를 사용

    useEffect(() => {
        // 고양이 목록을 불러오는 함수
        const fetchCats = async () => {
            try {
                const response = await fetch('http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/cats');
                if (!response.ok) {
                    throw new Error('Failed to fetch cats');
                }
                const data = await response.json();
                setCats(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // 컴포넌트가 마운트될 때 고양이 목록을 불러옴
        fetchCats();
    }, []);

    // 고양이를 클릭할 때 실행되는 함수
    const handleCatClick = (catId) => {
        navigate(`/cats/${catId}`); // 수정: 상세 페이지로 라우팅
    };

    return (
        <S.Wrapper>
            <Header />
            <S.CatList>
                {cats.map(cat => (
                    <S.CatBox key={cat.catId} onClick={() => handleCatClick(cat.catId)}>
                        {cat.gender === 'FEMALE' && <S.GenderIcon src="/img/female.png" alt="Female" />}
                        {cat.gender === 'MALE' && <S.GenderIcon src="/img/male.png" alt="Male" />}
                        <S.CatImageWrapper>
                            <S.CatImage src={cat.imageUrl} alt={cat.name} />
                        </S.CatImageWrapper>
                        <S.CatName>{cat.name}</S.CatName>
                        <S.CatAge>{cat.age}</S.CatAge>
                        <S.FollowerCount>
                            <S.FollowerCountImage
                                src={cat.followerCnt === 0 ? '/img/likelike.png' : '/img/likelikelike.png'}
                                alt={cat.followerCnt === 0 ? 'No Followers' : 'Has Followers'}
                            />
                            <S.FollowerCountText>{cat.followerCnt}</S.FollowerCountText>
                        </S.FollowerCount>
                    </S.CatBox>
                ))}
            </S.CatList>
            <Menu />
        </S.Wrapper>
    );
};

export default List;
