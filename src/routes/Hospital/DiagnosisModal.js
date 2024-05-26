// DiagnosisModal.js
import React from 'react';
import * as S from './DiagnosisModal.styled';
import { useNavigate } from 'react-router-dom'; // 추가: useNavigate 임포트

const DiagnosisModal = ({ isOpen, onClose, diagnosis, imagePreview }) => {
  const navigate = useNavigate(); // 추가: navigate 함수 생성

  if (!isOpen) return null;

  const handleGoToHospital = () => {
    navigate('/HospitalList/HospitalList'); // 병원 페이지로 이동
  };

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>
        <S.DiagnosisImage src={imagePreview} alt="Diagnosis" />
        <S.DiagnosisTitle>{diagnosis.name}</S.DiagnosisTitle>
        <S.DiagnosisDescription>{diagnosis.description}</S.DiagnosisDescription>
        <S.ButtonContainer>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
          <S.GoToHospitalButton onClick={handleGoToHospital}>동물병원</S.GoToHospitalButton>
        </S.ButtonContainer>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default DiagnosisModal;
