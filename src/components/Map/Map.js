import React, { useEffect, useState, useRef } from 'react';
import * as S from './Map.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const Map = () => {
    const [isContentOpen, setIsContentOpen] = useState(false);
    const [catSpots, setCatSpots] = useState([]);
    const [cats, setCats] = useState([]);
    const [isDropdownRotated, setIsDropdownRotated] = useState(false);
    const catListRef = useRef(null);

    const toggleContent = () => {
        setIsContentOpen(!isContentOpen);
        setIsDropdownRotated(!isDropdownRotated);
    };
    
    useEffect(() => {
        const fetchCatSpots = async () => {
            try {
                const response = await fetch('http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/cats/5/spots');
                if (!response.ok) {
                    throw new Error('고양이 위치를 불러오는 데 실패했습니다.');
                }
                const data = await response.json();
                setCatSpots(data);
            } catch (error) {
                console.error('고양이 위치를 불러오는 중 오류가 발생했습니다:', error);
            }
        };

        fetchCatSpots();
    }, []);

    useEffect(() => {
        const loadMapScript = () => {
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=4d2258a550a5cc13b15f5bcf9bf34124&autoload=false`;
            script.onload = () => {
                window.kakao.maps.load(() => {
                    if (window.kakao.maps) {
                        initializeMap();
                    } else {
                        console.error('Kakao Map SDK is not loaded correctly.');
                    }
                });
            };
            script.onerror = () => {
                console.error('카카오 맵 API 스크립트 로드 중 오류가 발생했습니다.');
            };
            document.head.appendChild(script);
        };
    
        const initializeMap = () => {
            const container = document.getElementById('map');
            if (container) {
                const options = {
                    center: new window.kakao.maps.LatLng(36.7713718911650, 126.934133774920),
                    level: 3,
                };
    
                const map = new window.kakao.maps.Map(container, options);
    
                // catSpots 배열을 순회 -> 각 위치에 마커 표시
                // 디자인 수정
                catSpots.forEach((spot) => {
                    const markerPosition = new window.kakao.maps.LatLng(spot.latitude, spot.longitude);
    
                    // 마커 생성
                    const marker = new window.kakao.maps.Marker({
                        map: map,
                        position: markerPosition,
                    });
    
                    // 마커 위에 표시할 정보창 생성
                    // 프로필로 수정
                    const infowindow = new window.kakao.maps.InfoWindow({
                        content: `<div>위도: ${spot.latitude}, 경도: ${spot.longitude}</div>`,
                    });
    
                    // 마커를 클릭했을 때 정보창 표시
                    // 프로필로 수정
                    window.kakao.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map, marker);
                    });
                });
            } else {
                console.error('맵 컨테이너를 찾을 수 없습니다.');
            }
        };
    
        loadMapScript();
    }, [catSpots]);


    useEffect(() => {
        const fetchCats = async () => {
            try {
                const response = await fetch('http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/cats');
                if (!response.ok) {
                    throw new Error('고양이 목록을 불러오는 데 실패했습니다.');
                }
                const data = await response.json();
                setCats(data);
            } catch (error) {
                console.error('고양이 목록을 불러오는 중 오류가 발생했습니다:', error);
            }
        };

        fetchCats();
    }, []);
    

    const scrollLeft = () => {
        if (catListRef.current) {
            catListRef.current.scrollBy({
                left: -200,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (catListRef.current) {
            catListRef.current.scrollBy({
                left: 200,
                behavior: 'smooth',
            });
        }
    };

    return (
        <S.Wrapper>
            <Header />
            <div id="map" style={{ width: '100%', height: '250px', marginBottom: '290px' }}></div>

            <S.Dropdown 
    src='/img/dropdown.png' 
    onClick={toggleContent} 
    rotate={isDropdownRotated ? 'rotate(180deg)' : 'rotate(0deg)'} 
/>

            {isContentOpen && (
                <S.ContentContainer>
                    <S.PostsContainer>
                        <S.CatlistContainer>
                            {cats.length > 0 && catListRef.current && catListRef.current.scrollWidth > catListRef.current.clientWidth && (
                                <S.ArrowButton src='/img/right_arrow.png' onClick={scrollLeft} />
                            )}
                            <S.Catlist ref={catListRef}>
                                {cats.map((cat, index) => (
                                    <S.CatContainer key={index}>
                                        <S.CatImage src={cat.imageUrl} alt={`고양이 이미지 ${index}`} />
                                        <S.CatName>{cat.name}</S.CatName>
                                    </S.CatContainer>
                                ))}
                            </S.Catlist>
                            {cats.length > 0 && catListRef.current && catListRef.current.scrollWidth > catListRef.current.clientWidth && (
                                <S.ArrowButton src='/img/right_arrow.png' onClick={scrollRight} />
                            )}
                        </S.CatlistContainer>
                    </S.PostsContainer>
                </S.ContentContainer>
            )}

            <Menu />
        </S.Wrapper>
    );
};

export default Map;
