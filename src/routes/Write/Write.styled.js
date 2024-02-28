import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`;

export const WriteForm = styled.form`
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
`;

export const DropzoneContainer = styled.div`
  width: 100%;
  height: 150px;
  border: 2px dashed #cccccc;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

export const DropzoneText = styled.p`
  color: #555555;
  text-align: center;
`;

export const UploadedImage = styled.img`
  width: 100%;
  height: 120%;
  object-fit: cover;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  width: 350px;
  height: 32px;
  padding: 10px;
  background-color: #FFA552;
  font-size: 11px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  margin: 0 0 30px 25px;
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