/* import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import * as S from './CatDetail.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import { useNavigate } from 'react-router-dom';

const CatDetail = () => {
    const { catId } = useParams(); // URL에서 catId를 추출
    const [cat, setCat] = useState(null); // 고양이 정보를 저장할 상태
    const [loading, setLoading] = useState(true);
    const [catSpots, setCatSpots] = useState([]); // 고양이 위치 데이터

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token){
            Navigate('/');
            return;
        }

        const fetchCatDetails = async () => {
            try {
                const response = await fetch(`http://ec2-3-34-122-124.ap-northeast-2.compute.amazonaws.com:8080/v1/cats/${catId}`,{
                    headers : {
                        'Authorization': `Bearer ${token}`, // JWT 토큰을 포함한 Authorization 헤더
                        'Content-Type': 'application/json'
                    },
                });

            
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
 */import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import * as S from './CatDetail.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import { useNavigate } from 'react-router-dom';

const CatDetail = () => {
    const { catId } = useParams(); // URL에서 catId를 추출
    const [cat, setCat] = useState(null); // 고양이 정보를 저장할 상태
    const [loading, setLoading] = useState(true);
    const [catSpots, setCatSpots] = useState([]); // 고양이 위치 데이터

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token){
            Navigate('/');
            return;
        }

        const fetchCatDetails = async () => {
            try {
                const response = await fetch(`http://ec2-3-34-122-124.ap-northeast-2.compute.amazonaws.com:8080/v1/cats/${catId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`, // JWT 토큰을 포함한 Authorization 헤더
                        'Content-Type': 'application/json'
                    },
                });

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

            // Coordinates for cats 1 through 6
            const catLocations = [
                { id: '1', lat: 36.7696489, lng: 126.9324079 },
                { id: '2', lat: 36.7706489, lng: 126.9334079 },
                { id: '3', lat: 36.7716489, lng: 126.9344079 },
                { id: '4', lat: 36.7726489, lng: 126.9354079 },
                { id: '5', lat: 36.7736489, lng: 126.9364079 },
                { id: '6', lat: 36.7746489, lng: 126.9374079 },
            ];

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

            // Add markers for specific cat IDs
            catLocations.forEach((catLocation) => {
                if (catId === catLocation.id) {
                    const markerPosition = new window.kakao.maps.LatLng(catLocation.lat, catLocation.lng);
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
                        content: `<div>${cat ? cat.name : 'Unknown Cat'}</div>`,
                    });

                    window.kakao.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map, marker);
                    });
                }
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
