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
`;

export const CatOption = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 10px;
`;

export const FileInputContainer = styled.div`
  margin-top: 20px;
  width: 100%;
`;

export const FileInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  border-radius: 20px;
  border: 1px solid #ccc;
  background-color: #f8f8f8;
  color: #333;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #e6e6e6;
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 30px;
`;

export const ErrorMessage = styled.div`
  /* 추후 추가 */
`;

export const DiagnosisResult = styled.div`
  /* 추후 추가 */
`;

export const CustomSelect = styled.select`
  /* 추후 추가 */
`;