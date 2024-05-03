import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`;

/* export const CustomSelect = styled.div``;
 */
export const CatOption = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  margin-top: 50px;
  margin-bottom: 10px;
`;

export const Select = styled.select`
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 20px;
    width: 100%;
    height: 45px;
`;

export const Option = styled.option`
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const CatImage = styled.img`
z-index: 1;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

export const WriteForm = styled.form`
  width: 100%;
  max-width: 400px;
  margin-bottom: 70px;
  
`;

export const DropzoneContainer = styled.div`
  width: 100%;
  height: 200px;
  border: 2px dashed #cccccc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

export const UploadedImageContainer = styled.div``;

export const DropzoneText = styled.p`
  color: #555555;
  text-align: center;
  
`;

export const UploadedImage = styled.img`
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;

  &:active {
    border: 1px solid #FFA552;
  }
`;



export const SubmitButton = styled.button`
  width: 400px;
  margin: 0 auto;
  height: 32px;
  padding: 10px;
  background-color: #FFA552;
  font-size: 13px;
  text-align: center;
  margin-bottom: 30px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
`;

export const LocationButton = styled.button`
  background-color: #fff;
  color: black;
  padding: 5px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  font-size: 11px;
  margin-left: 35%;
  margin-bottom: 20px;
`;

export const CheckIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;