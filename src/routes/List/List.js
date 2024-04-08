import React, { useState } from 'react';
import * as S from './List.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

const List = () => {
    // 가상의 고양이 데이터 배열
    const cats = [
        { id: 1, name: '고양이 1', image: '/img/chuchu.jpg', gender: 'female', age: 3 },
        { id: 2, name: '고양이 2', image: 'cat2.jpg', gender: 'male', age: 2 },
        { id: 3, name: '고양이 3', image: 'cat3.jpg', gender: 'female', age: 4 },
        { id: 4, name: '고양이 4', image: 'cat4.jpg', gender: 'male', age: 1 },
        { id: 5, name: '고양이 5', image: 'cat5.jpg', gender: 'female', age: 5 },
        // 필요한 만큼 고양이 데이터를 추가할 수 있습니다.
    ];

    // 좋아요 상태를 관리하는 state
    const [liked, setLiked] = useState(false);

    // 좋아요 버튼을 클릭할 때 상태를 토글하는 함수
    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <S.Wrapper>
            <Header />
            <S.CatList>
                {cats.map(cat => (
                    <S.CatBox key={cat.id}>
                        {cat.gender === 'female' && <S.GenderIcon src="/img/female.png" alt="Female" />}
                        {cat.gender === 'male' && <S.GenderIcon src="/img/male.png" alt="Male" />}
                        <S.CatImageWrapper>
                            <S.CatImage src={cat.image} alt={cat.name} />
                        </S.CatImageWrapper>
                        <S.CatName>{cat.name}</S.CatName>
                        <S.CatAge>{cat.age}살</S.CatAge>

                    </S.CatBox>
                ))}
            </S.CatList>
            <Menu />
        </S.Wrapper>
    );
};

export default List;
