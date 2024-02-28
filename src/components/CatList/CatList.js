import React, { useState } from 'react';
import * as S from './CatList.styld';

const catData = [
    { id: 1, name: '데굴' },
    { id: 2, name: '데구룩' },
    { id: 3, name: '데구루루룩' },
    { id: 4, name: '후츄' },
    { id: 5, name: '쫀떠기' },
    { id: 6, name: '루루' },
];

const CatList = ({ onSelect }) => {
    const [selectedCat, setSelectedCat] = useState(null);

    const handleSelect = (cat) => {
        setSelectedCat(cat);
        onSelect(cat);
    };

    return (
        <S.CatListContainer>
            <S.CatListTitle>고양이 선택</S.CatListTitle>
            <S.CatList>
                {catData.map(cat => (
                    <S.CatItem
                        key={cat.id}
                        onClick={() => handleSelect(cat)}
                        selected={selectedCat && selectedCat.id === cat.id}
                    >
                        {cat.name}
                    </S.CatItem>
                ))}
            </S.CatList>
        </S.CatListContainer>
    );
};

export default CatList;
