import React, { useEffect } from 'react';
import * as S from './Map.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const Map = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=4d2258a550a5cc13b15f5bcf9bf34124&autoload=false`;

        script.onload = () => {
            if (window.kakao) {
                window.kakao.maps.load(() => {
                    const container = document.getElementById('map');
                    const options = {
                        center: new window.kakao.maps.LatLng(37.5665, 126.9780),
                        level: 3
                        /* level -> 지도 확대값 */
                    };
                    const map = new window.kakao.maps.Map(container, options);
                });
            } else {
                console.error('Kakao Map SDK is not loaded correctly.');
            }
        };

        script.onerror = () => {
            console.error('Failed to load Kakao Map SDK.');
        };

        document.head.appendChild(script);

        return () => {
            if (script.onload) {
                document.head.removeChild(script);
            }
        };
    }, []);

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
