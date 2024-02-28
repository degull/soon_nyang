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
  height: 120px;
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
  height: 80%;
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
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const LocationButton = styled.button`
  background-color: #9c9;
  color: white;
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 11px;
  &:hover {
    background-color: #9c2;
  }
`;
