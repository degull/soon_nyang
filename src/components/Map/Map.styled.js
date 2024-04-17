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
