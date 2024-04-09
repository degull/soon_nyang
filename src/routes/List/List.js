import React, { useState, useEffect } from 'react';
import * as S from './List.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

const List = () => {
    const [cats, setCats] = useState([]); // 고양이 데이터 배열
    const [selectedCat, setSelectedCat] = useState(null); // 선택된 고양이 정보를 저장할 상태

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
    const handleCatClick = async (catId) => {
        try {
            const response = await fetch(`http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/cats/${catId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch cat details');
            }
            const data = await response.json();
            setSelectedCat(data);
        } catch (error) {
            console.error('Error fetching cat details:', error);
        }
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
                    </S.CatBox>
                ))}
            </S.CatList>
            <Menu />
        </S.Wrapper>
    );
};

export default List;
