import styled from "@emotion/styled";

export const Wrapper = styled.div`
   width: 390px;
   height: 844px;
   /* max-width: 390px; */
   background: #fff;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
`;

export const Header = styled.div`
   width: 390px;
   height: 35px;
   border-bottom: 1px solid #f5f5f5;
   display: flex;
   align-items: center;
   justify-content: center;
`;
export const Title = styled.div`
   color: #FFA552;
   text-align: center;
   font-family: 'omyu_pretty';
   font-size: 20px;
   font-style: normal;
   font-weight: 400;
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
   width: 25px;
   left: 50px;
`;


export const Map = styled.img`
   position: absolute;
   width: 25px;
   right: 50px;
`;


