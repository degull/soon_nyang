import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './CatDetail.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

const CatDetail = () => {
    const { catId } = useParams(); // URL에서 catId를 추출
    const [cat, setCat] = useState(null); // 고양이 정보를 저장할 상태
    const [loading, setLoading] = useState(true);
    const [catSpots, setCatSpots] = useState([]); // 고양이 위치 데이터

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

    // useEffect를 사용하여 카카오지도 API 로드 및 고양이 위치 데이터 가져오기
    useEffect(() => {
        const loadMapScript = () => {
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=6a6024ec222ac1a9f716b05b1d1d1d5c&autoload=false';
            script.onload = () => {
                window.kakao.maps.load(() => {
                    if (window.kakao.maps) {
                        // Load map and initialize
                        initializeMap();
                    } else {
                        console.error('Kakao Map SDK is not loaded correctly.');
                    }
                });
            };
            script.onerror = () => {
                console.error('Error loading Kakao Map API script.');
            };
            document.head.appendChild(script);
        };

        const fetchCatSpots = async () => {
            try {
                const response = await fetch(`http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/cats/${catId}/spots`);
                if (!response.ok) {
                    throw new Error('Failed to fetch cat spots');
                }
                const data = await response.json();
                setCatSpots(data);
            } catch (error) {
                console.error('Error fetching cat spots:', error);
            }
        };

        loadMapScript();
        fetchCatSpots();
    }, [catId]);

    const initializeMap = () => {
        const container = document.getElementById('map');
        if (container) {
            const options = {
                center: new window.kakao.maps.LatLng(36.7713718911650, 126.934133774920),
                level: 3,
            };

            const map = new window.kakao.maps.Map(container, options);

            // Display cat spots on the map
            catSpots.forEach((spot) => {
                const markerPosition = new window.kakao.maps.LatLng(spot.latitude, spot.longitude);
                const markerImage = new window.kakao.maps.MarkerImage(
                    '/img/cat_mark.png',
                    new window.kakao.maps.Size(35, 35)
                );
                const marker = new window.kakao.maps.Marker({
                    map: map,
                    position: markerPosition,
                    image: markerImage,
                });

                const infowindow = new window.kakao.maps.InfoWindow({
                    content: `<div>${spot.catName}</div>`,
                });

                window.kakao.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map, marker);
                });
            });
        } else {
            console.error('Map container not found.');
        }
    };

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
            <div id="map" style={{ width: '500px', height: '250px' }}></div>
            <Menu />
        </S.Wrapper>
    ) : (
        <S.ErrorWrapper>Error loading the cat's details.</S.ErrorWrapper>
    );
};

export default CatDetail;
