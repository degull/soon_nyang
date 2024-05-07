import React from 'react';
import * as S from './HospitalList.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

const HospitalList = () => {
  // 주소 복사 함수
  const copyAddress = (address) => {
    navigator.clipboard.writeText(address);
    alert('주소가 복사되었습니다.');
  };

  // 전화 걸기 함수
  const callNumber = (number) => {
    window.location.href = `tel:${number}`;
  };

    return (
        <S.Wrapper>
            <Header />
                <S.HospitalList>
                {/* 병원1 */}
                <S.HospitalBox1>
                <S.Box1Title>세림동물병원</S.Box1Title>
                <S.Box1Add onClick={() => copyAddress('충남 아산시 신창면 서부북로 933-30 10동 103호')}>
                    <S.Box1AddImg src='/img/hos_placeholder.png' />
                    충남 아산시 신창면 서부북로 933-30 10동 103호
                </S.Box1Add>

                <S.Box1Time>
                    <S.Box1TimeImg src='/img/time.png' />
                    매일 00:00 ~ 24:00 | 공휴일 00:00 ~ 24:00
                </S.Box1Time>

                <S.Box1Tel onClick={() => callNumber('010-4550-4592')}>
                    <S.Box1TelImg src='/img/tel.png' />
                    010-4550-4592
                </S.Box1Tel>

                <S.Box1Dis>
                    <S.Box1DisImg src='/img/distance.png' />
                    3.2km
                </S.Box1Dis>
                </S.HospitalBox1>

                {/* 병원2 */}
                <S.HospitalBox2>
                <S.Box2Title>아산동물의료센터</S.Box2Title>
                <S.Box2Add onClick={() => copyAddress('충남 아산시 용화고길79번길 21 금강빌딩 1층, 2층')}>
                    <S.Box2AddImg src='/img/hos_placeholder.png' />
                    충남 아산시 용화고길79번길 21 금강빌딩 1층, 2층
                </S.Box2Add>

                <S.Box2Time>
                    <S.Box2TimeImg src='/img/time.png' />
                    매일 09:00 - 22:30
                </S.Box2Time>

                <S.Box2Tel onClick={() => callNumber('041-425-0075')}>
                    <S.Box2TelImg src='/img/tel.png' />
                    041-425-0075
                </S.Box2Tel>

                <S.Box2Dis>
                    <S.Box2DisImg src='/img/distance.png' />
                    4.8km
                </S.Box2Dis>
                </S.HospitalBox2>

                {/* 병원3 */}
                <S.HospitalBox3 onClick={() => copyAddress('충남 아산시 온천대로 1525 1층 (온천동)')}>
                <S.Box3Title>가나동물병원</S.Box3Title>
                <S.Box3Add>
                    <S.Box3AddImg src='/img/hos_placeholder.png' />
                    충남 아산시 온천대로 1525 1층 (온천동)
                </S.Box3Add>

                <S.Box3Time>
                    <S.Box3TimeImg src='/img/time.png' />
                    월~금 09:00 - 19:30 | 토 09:00 - 18:00
                </S.Box3Time>

                <S.Box3Tel onClick={() => callNumber('041-534-7582')}>
                    <S.Box3TelImg src='/img/tel.png' />
                    041-534-7582
                </S.Box3Tel>

                <S.Box3Dis>
                    <S.Box3DisImg src='/img/distance.png' />
                    5.0km
                </S.Box3Dis>
                </S.HospitalBox3>

                {/* 병원4 */}
                <S.HospitalBox4 onClick={() => copyAddress('충남 아산시 번영로 83 명동물병원')}>
                <S.Box4Title>명동물병원</S.Box4Title>
                <S.Box4Add>
                    <S.Box4AddImg src='/img/hos_placeholder.png' />
                    충남 아산시 번영로 83 명동물병원
                </S.Box4Add>

                <S.Box4Time>
                    <S.Box4TimeImg src='/img/time.png' />
                    월~금 10:00 - 19:30 | 휴게시간 13:00 - 14:00
                </S.Box4Time>

                <S.Box4Tel onClick={() => callNumber('041-549-2222')}>
                    <S.Box4TelImg src='/img/tel.png' />
                    041-549-2222
                </S.Box4Tel>

                <S.Box4Dis>
                    <S.Box4DisImg src='/img/distance.png' />
                    5.0km
                </S.Box4Dis>
                </S.HospitalBox4>

                {/* 병원5 */}
                <S.HospitalBox5 onClick={() => copyAddress('충남 아산시 중앙로 10 이솝어린이집')}>
                <S.Box5Title>주앤동물병원</S.Box5Title>
                <S.Box5Add>
                    <S.Box5AddImg src='/img/hos_placeholder.png' />
                    충남 아산시 중앙로 10 이솝어린이집
                </S.Box5Add>

                <S.Box5Time>
                    <S.Box5TimeImg src='/img/time.png' />
                    월~금 09:30 - 19:30 | 휴게시간 12:00 - 13:00
                </S.Box5Time>

                <S.Box5Tel onClick={() => callNumber('041-547-0275')}>
                    <S.Box5TelImg src='/img/tel.png' />
                    041-547-0275
                </S.Box5Tel>

                <S.Box5Dis>
                    <S.Box5DisImg src='/img/distance.png' />
                    6.2km
                </S.Box5Dis>
                </S.HospitalBox5>


                {/* 병원6 */}
                <S.HospitalBox6 onClick={() => copyAddress('충남 아산시 번영로 133 1층')}>
                <S.Box6Title>온양동물병원</S.Box6Title>
                <S.Box6Add>
                    <S.Box6AddImg src='/img/hos_placeholder.png' />
                    충남 아산시 번영로 133 1층
                </S.Box6Add>

                <S.Box6Time>
                    <S.Box6TimeImg src='/img/time.png' />
                    월~금 09:00 - 18:30 | 토 09:00 - 15:00
                </S.Box6Time>

                <S.Box6Tel onClick={() => callNumber('041-541-1222')}>
                    <S.Box6TelImg src='/img/tel.png' />
                    041-541-1222
                </S.Box6Tel>

                <S.Box6Dis>
                    <S.Box6DisImg src='/img/distance.png' />
                    7.2km
                </S.Box6Dis>
                </S.HospitalBox6>
                </S.HospitalList>
            <Menu />
        </S.Wrapper>
    );
};

export default HospitalList;