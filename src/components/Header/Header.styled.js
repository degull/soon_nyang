import styled from "@emotion/styled";

export const Wrapper = styled.div`
   width: 100%;
   height: 100%;
   /* max-width: 390px; */
   background: #fff;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   padding: 0;
`;

export const HeaderContainer = styled.div`
   width: 100%;
   height: 35px;
   border-bottom: 1px solid #f5f5f5;
   display: flex;
   align-items: center;
   justify-content: center;
   position: fixed;
   top: 0;
   background: #fff; /* 배경색을 흰색으로 설정 */
   z-index: 1000; /* 다른 요소 위에 표시되도록 설정 */
`;

export const Title = styled.div`
   color: #FFA552;
   text-align: center;
   font-family: 'omyu_pretty';
   font-size: 17px;
   font-style: normal;
   font-weight: 700;
   line-height: normal;
   @font-face {
      font-family: 'omyu_pretty';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
   }
`;

export const Food = styled.img`
   position: absolute;
   width: 27px;
   left: 22px;
   margin-top: -11px;
   cursor: pointer;
`;

export const Map = styled.img`
   position: absolute;
   width: 25px;
   right: 22px;
   margin-top: -11px;
   cursor: pointer;
`;
