// List.styled.js

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`;

export const CatList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 45px;
  margin-bottom: 70px;
  /* 각각의 고양이 박스들을 감싸는 스타일 */
`;

export const CatBox = styled.div`
  position: relative;
  width: 156px;
  height: 198px;
  background-image: url('/img/catbox.png'); /* 박스 이미지 */
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  /* 각 고양이 박스의 스타일 */
`;

export const CatImageWrapper = styled.div`
  width: 81px;
  height: 81px;
  border-radius: 50%; /* 원형 모양으로 만듦 */
  overflow: hidden; /* 내부 내용을 벗어나는 부분은 숨김 */
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%); /* 부모 요소 중앙에 배치 */
  border: 3px solid #E86666; /* 테두리 스타일 추가 */
`;

export const CatImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율 유지하면서 자르기 */
`;

export const CatName = styled.p`
  padding: 10px;
  text-align: center;
  position: absolute;
  bottom: 55px; /* 아래쪽 여백을 조정하여 이름을 위로 올립니다. */
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7); /* 배경색과 투명도 조절 */
  margin: 0; /* 기본 마진 제거 */
  color: #FFA552;
  font-size: 17px;
  font-weight: 600;
  font-family: 'SBAggroB';
  @font-face {
    font-family: 'SBAggroB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;

export const CatAge = styled.p`
  position: absolute;
  bottom: 40px;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0;
  color: #333;
  font-size: 13px;
  font-family: 'Cafe24Ssurround';
  @font-face {
    font-family: 'Cafe24Ssurround';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;

export const GenderIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 18px;
  height: 18px;
`;


export const FollowerCount = styled.div`
  display: flex;
  align-items: center;
  right: 63px;
  top: 170px;
  position: absolute;
`;

export const FollowerCountImage = styled.img`
  width: 13px;
  height: 13px;
  margin-right: 5px;
  
`;

export const FollowerCountText = styled.span`
  font-size: 11px;
  font-weight: bold;
  color: #999;
`;
