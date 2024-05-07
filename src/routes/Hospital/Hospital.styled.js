import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const HosContainer = styled.div`
  width: 100%;
  position: relative;
  top: 120px;
  max-width: 400px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  width: 100%;
  height: 45px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  appearance: none;
  font-size: 16px;
  color: #333;
  margin-top: -20px;
`;

export const CatOption = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 10px;
`;

export const FileInputContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


export const FileInput = styled.input`
  border-radius: 20px;
  border: 1px solid #ccc;
  background-color: #f8f8f8;
  color: #333;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: #e6e6e6;
  }
`;

export const ImagePreview = styled.img`
  width: 150px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-top: 10px;
  display: block;
  margin: 0 auto;
`;

export const Button = styled.button`
  width: 350px;
  height: 32px;
  border: 0;
  background: #FFA552;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 11px;
  margin-top: 20px;
`;


export const ErrorMessage = styled.div`
  color: #FF6666;
  font-size: 14px;
  margin-top: 10px;
`;

export const DiagnosisResult = styled.div`
  color: #4CAF50;
  font-size: 16px;
  margin-top: 10px;
`;



export const CustomSelect = styled.select`
  /* 추후 추가 */
`;

export const FileInputButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Picimg = styled.img`
  width: 250px;
  height: auto;
  cursor: pointer;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`;

export const GoToHos = styled.img`
  width: 18px;
  height: auto;
  cursor: pointer;
  font-size: 10px;
  cursor: pointer;
  margin-bottom: 4px;
  margin-left: -5px;
  color: #FF9635;
  font-weight: bold;
  @font-face {
      font-family: 'omyu_pretty';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
   }
`;

export const GoToHosText = styled.div`
  color: #FFA552;
  font-size: 11px;
  font-family: 'omyu_pretty';
  display: inline-block; /* 이 부분 추가 */
  margin-right: 10px; /* 이 부분 추가 */
  @font-face {
    font-family: 'omyu_pretty';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`;

export const GoToHosText1 = styled.div`
  color: #333;
  font-size: 11px;
  margin-right: 8px;
  font-family: 'omyu_pretty';
    @font-face {
      font-family: 'omyu_pretty';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
   }
   
`;
