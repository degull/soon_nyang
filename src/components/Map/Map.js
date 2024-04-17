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
                        center: new window.kakao.maps.LatLng(36.771939307560515, 126.93139316073213), // 초기 중심 위치 설정
                        level: 5
                    };
                    const map = new window.kakao.maps.Map(container, options);

                    // 첫 번째 마커 이미지 설정
                    const markerImageSrc = '/img/mark.jpg'; // 사용할 마커 이미지
                    const markerImageSize = new window.kakao.maps.Size(50, 50); // 마커 이미지 크기
                    const markerImageOption = { offset: new window.kakao.maps.Point(25, 50) }; // 마커 이미지 옵션
                    const markerImage = new window.kakao.maps.MarkerImage(markerImageSrc, markerImageSize, markerImageOption);

                    // 두 번째 마커 이미지 설정
                    const markerImageSrc2 = '/img/mark2.jpg'; // 사용할 두 번째 마커 이미지
                    const markerImageSize2 = new window.kakao.maps.Size(50, 50); // 두 번째 마커 이미지 크기
                    const markerImageOption2 = { offset: new window.kakao.maps.Point(25, 50) }; // 두 번째 마커 이미지 옵션
                    const markerImage2 = new window.kakao.maps.MarkerImage(markerImageSrc2, markerImageSize2, markerImageOption2);

                    // 세 번째 마커 이미지 설정
                    const markerImageSrc3 = '/img/mark3.jpg'; // 사용할 세 번째 마커 이미지
                    const markerImageSize3 = new window.kakao.maps.Size(50, 50); // 세 번째 마커 이미지 크기
                    const markerImageOption3 = { offset: new window.kakao.maps.Point(25, 50) }; // 세 번째 마커 이미지 옵션
                    const markerImage3 = new window.kakao.maps.MarkerImage(markerImageSrc3, markerImageSize3, markerImageOption3);

                    // 네 번째 마커 이미지 설정
                    const markerImageSrc4 = '/img/mark4.jpg'; // 사용할 네 번째 마커 이미지
                    const markerImageSize4 = new window.kakao.maps.Size(50, 50); // 네 번째 마커 이미지 크기
                    const markerImageOption4 = { offset: new window.kakao.maps.Point(25, 50) }; // 네 번째 마커 이미지 옵션
                    const markerImage4 = new window.kakao.maps.MarkerImage(markerImageSrc4, markerImageSize4, markerImageOption4);

                    // 첫 번째 마커 추가
                    const markerPosition1 = new window.kakao.maps.LatLng(36.7713718911621, 126.934133774914); // 첫 번째 마커 위치
                    const marker1 = new window.kakao.maps.Marker({
                        position: markerPosition1,
                        image: markerImage // 첫 번째 마커에 이미지 적용
                    });
                    marker1.setMap(map);

                    // 두 번째 마커 추가
                    const markerPosition2 = new window.kakao.maps.LatLng(36.771939307560515, 126.93139316073213); // 두 번째 마커 위치
                    const marker2 = new window.kakao.maps.Marker({
                        position: markerPosition2,
                        image: markerImage2 // 두 번째 마커에 다른 이미지 적용
                    });
                    marker2.setMap(map);

                    // 세 번째 마커 추가
                    const markerPosition3 = new window.kakao.maps.LatLng(36.769165764637776, 126.93476704606526); // 세 번째 마커 위치
                    const marker3 = new window.kakao.maps.Marker({
                        position: markerPosition3,
                        image: markerImage3 // 세 번째 마커에 다른 이미지 적용
                    });
                    marker3.setMap(map);

                    // 네 번째 마커 추가
                    const markerPosition4 = new window.kakao.maps.LatLng(36.76878498376117, 126.93067912906109); // 네 번째 마커 위치
                    const marker4 = new window.kakao.maps.Marker({
                        position: markerPosition4,
                        image: markerImage4 // 네 번째 마커에 다른 이미지 적용
                    });
                    marker4.setMap(map);
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
