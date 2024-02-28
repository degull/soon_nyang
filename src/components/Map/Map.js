import React, { useEffect } from 'react';
import * as S from './Map.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const Map = ({ userLocation }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=4d2258a550a5cc13b15f5bcf9bf34124&autoload=false`;
        script.onload = () => {
            window.kakao.maps.load(() => {
                if (window.kakao.maps && userLocation) {
                    initializeMap(userLocation);
                } else {
                    console.error('카카오 맵 SDK가 제대로 로드되지 않았거나 사용자 위치가 없습니다.');
                }
            });
        };
        script.onerror = () => {
            console.error('카카오 맵 API 스크립트 로딩 중 오류가 발생했습니다.');
        };
        document.head.appendChild(script);

        const initializeMap = (location) => {
            const container = document.getElementById('map');
            if (container) {
                const options = {
                    center: new window.kakao.maps.LatLng(location.latitude, location.longitude),
                    level: 5,
                };

                const map = new window.kakao.maps.Map(container, options);

                // 사용자 위치에 마커 추가
                const marker = new window.kakao.maps.Marker({
                    map: map,
                    position: new window.kakao.maps.LatLng(location.latitude, location.longitude),
                    title: '사용자 위치',
                });
            } else {
                console.error('맵 컨테이너를 찾을 수 없습니다.');
            }
        };
    }, [userLocation]);

    return (
        <S.Wrapper>
            <Header />
            <S.Title>고양이 위치</S.Title>
            <div id="map" style={{ width: '100%', height: '400px' }}></div>
            <Menu />
        </S.Wrapper>
    );
};

export default Map;
