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
  margin-top: 25px;
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
  bottom: 50px; /* 아래쪽 여백을 조정하여 이름을 위로 올립니다. */
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7); /* 배경색과 투명도 조절 */
  margin: 0; /* 기본 마진 제거 */
  color: #FFA552;
  font-size: 17px;
  font-weight: 800;
  font-family:'bitbit';
  @font-face{
  font-family:'bitbit';
  src:url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff'),url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff2') ;
}
`;

export const CatAge = styled.p`
  position: absolute;
  bottom: 30px; /* 고양이 나이를 조절하여 이름 위에 위치하도록 설정합니다. */
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0; /* 기본 마진 제거 */
  color: #333; /* 기본 색상 설정 */
  font-size: 14px; /* 기본 폰트 크기 설정 */
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

export const LikeButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;
