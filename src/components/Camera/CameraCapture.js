// CameraCapture.js
import React, { useRef, useState } from 'react';
import * as S from './CameraCapture.styled';

const CameraCapture = ({ onCapture, onSelectFromGallery }) => {
  const videoRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

  const handleCapture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    const capturedImage = canvas.toDataURL('image/png');
    onCapture(capturedImage);
  };

  const handleToggleCamera = async () => {
    try {
      if (!isCameraOn) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } else {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach((track) => {
          track.stop();
        });

        videoRef.current.srcObject = null;
      }

      setIsCameraOn(!isCameraOn);
    } catch (error) {
      console.error('카메라를 시작할 수 없습니다:', error);
    }
  };

  const handleSelectFromGallery = () => {
    // 갤러리에서 이미지를 선택하는 로직 추가
    onSelectFromGallery();
  };

  return (
    <div>
      <S.VideoContainer>
        <S.StyledVideo ref={videoRef} autoPlay />
      </S.VideoContainer>
      <S.ButtonContainer>
        <S.StyledButton onClick={handleToggleCamera}>
          {isCameraOn ? '카메라 정지' : '카메라 시작'}
        </S.StyledButton>
        <S.StyledButton onClick={handleCapture} disabled={!isCameraOn}>
          캡쳐
        </S.StyledButton>
        <S.StyledButton onClick={handleSelectFromGallery}>
          갤러리에서 선택
        </S.StyledButton>
      </S.ButtonContainer>
    </div>
  );
};

export default CameraCapture;
