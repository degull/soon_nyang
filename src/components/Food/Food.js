import React, { useEffect } from 'react';
import * as S from './Food.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const locations = [
   { title: '급식소1', lat: 37.506488265356, lng: 126.99290953278},
   { title: '급식소2', lat: 37.501381407413, lng: 127.01237392298 },
   // 아래 계속 위치 추가
];

export default function Food() {
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
               center: new window.kakao.maps.LatLng(37.506488265356, 126.99290953278),
               level: 5,
            };

            const map = new window.kakao.maps.Map(container, options);

            locations.forEach((el) => {
               const marker = new window.kakao.maps.Marker({
                  map: map,
                  position: new window.kakao.maps.LatLng(el.lat, el.lng),
                  title: el.title,
               });

               window.kakao.maps.event.addListener(marker, 'click', () => {
               });
            });
         } else {
            console.error('맵 컨테이너를 찾을 수 없습니다.');
         }
      };

      loadMapScript();
   }, []);

   return (
      <S.Wrapper>
         <Header />
         <S.Title>급식소 위치</S.Title>
         <div id="map" style={{ width: '100%', height: '400px' }}></div>
         <Menu />
      </S.Wrapper>
   );
}
