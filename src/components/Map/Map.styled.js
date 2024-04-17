import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  background: #fff;
  
`;

export const CatImage = styled.img`
  width: 150px;
  height: auto;
`;

export const Title = styled.div`
  font-size: 20px; 
  font-weight: bold;
  font-style: normal;
  line-height: normal;
  margin-bottom: -20px;
  font-family: 'insungitCutelivelyjisu';
  @font-face {
    font-family: 'insungitCutelivelyjisu';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/insungitCutelivelyjisu.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`;

export const Dropdown = styled.img`
  display: flex;
  width: 35px;
  position: absolute;
  top: 270px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  width:100%;
  position: relative;
  display: flex;
  height: 100%;
  background: #9c9;
  `;