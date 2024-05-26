
import React, { useState, useEffect } from 'react';
import * as S from './Hospital.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import axios from 'axios';
import Select from 'react-select';
import { Link, useNavigate } from 'react-router-dom';
import DiagnosisModal from './DiagnosisModal';
import Loading from './Loading';

const Hospital = () => {
  const navigate = useNavigate();
  const [selectedCat, setSelectedCat] = useState(null);
  const [catOptions, setCatOptions] = useState([]);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [diagnosis, setDiagnosis] = useState(null);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/'); 
          return;
        }

        const response = await axios.get('http://ec2-3-34-122-124.ap-northeast-2.compute.amazonaws.com:8080/v1/cats', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const formattedCats = response.data.map(cat => ({
          value: cat.catId,
          label: (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={cat.imageUrl} alt={cat.name} style={{ marginRight: '10px', width: '30px', height: '30px' }} />
              {cat.name}
            </div>
          )
        }));
        setCatOptions(formattedCats);
      } catch (error) {
        console.error('Failed to load cat data:', error);
        setErrorMessage('고양이 데이터를 불러오는 데 실패했습니다.');
      }
    };

    fetchCats();
  }, [navigate]);

  const handleCatSelect = (selectedOption) => {
    setSelectedCat(selectedOption);
  };

  const handleImageClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getRandomDiagnosis = () => {
    const diagnoses = [
      {
        name: '안검염 (Blepharitis)',
        description: '진단명: 안검의 염증으로, 눈꺼풀의 붓기와 붉어짐이 특징입니다.\n치료 방법: 항생제 연고 및 스테로이드 처방, 눈꺼풀 위생 관리.',
      },
      {
        name: '비궤양성각막염 (Non-ulcerative Keratitis)',
        description: '진단명: 각막의 염증이 있지만 궤양이 없는 상태입니다.\n치료 방법: 항생제 또는 항바이러스제 점안, 인공눈물 사용.',
      },
      {
        name: '결막염 (Conjunctivitis)',
        description: '진단명: 결막의 염증으로, 눈의 붉어짐과 분비물이 특징입니다.\n치료 방법: 원인에 따라 항생제 또는 항바이러스제 점안, 알레르기성 결막염의 경우 항히스타민제 사용.',
      },
      {
        name: '각막부골편 (Corneal Sequestrum)',
        description: '진단명: 각막에 검은색의 죽은 조직이 형성되는 질환입니다.\n치료 방법: 외과적 제거 후 항생제 처방, 인공눈물 사용.',
      },
      {
        name: '각막궤양 (Corneal Ulcer)',
        description: '진단명: 각막의 상피층이 손상되어 궤양이 발생한 상태입니다.\n치료 방법: 항생제 또는 항바이러스제 점안, 심한 경우 외과적 치료 필요.',
      },
    ];
    return diagnoses[Math.floor(Math.random() * diagnoses.length)];
  };

  const handleDiagnoseClick = async () => {
    setLoading(true);
    setErrorMessage('');
    setShowLoading(true);

    setTimeout(() => {
      try {
        console.log('Selected Cat:', selectedCat);
        console.log('Image Data:', image);

        const diagnosis = getRandomDiagnosis();
        setDiagnosis(diagnosis);
        setModalOpen(true);
      } catch (error) {
        console.error('Failed to diagnose:', error);
        setErrorMessage('진단하는 동안 오류가 발생했습니다.');
      } finally {
        setLoading(false);
        setShowLoading(false);
      }
    }, 2000);
  };

  return (
    <S.Wrapper>
      <Header />
      <S.HosContainer>
        <S.CatOption>
          <Select
            id="catSelect"
            value={selectedCat}
            onChange={handleCatSelect}
            options={catOptions}
            getOptionLabel={(option) => option.label}
            placeholder="고양이 선택하기"
          />
        </S.CatOption>
        <S.FileInputContainer>
          <S.FileInput
            id="fileInput"
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <S.FileInputButton onClick={handleImageClick}>
            <S.Picimg src="/img/picture.png" alt="Attach" />
          </S.FileInputButton>
          {imagePreview && <S.ImagePreview src={imagePreview} alt="Preview" />}
        </S.FileInputContainer>
        <S.Button disabled={!selectedCat || !image || loading} onClick={handleDiagnoseClick}>
          {loading ? '진단 중...' : '진단하기'}
        </S.Button>
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      </S.HosContainer>

      <S.RowContainer>
        <S.GoToHosText1>병원정보를 찾으시나요?</S.GoToHosText1>
        <Link to="/HospitalList/HospitalList">
          <S.GoToHosText>병원정보보러가기</S.GoToHosText>
          <S.GoToHos src="/img/animal-hospital.png" />
        </Link>
      </S.RowContainer>
      <Menu />
      <DiagnosisModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        diagnosis={diagnosis}
        imagePreview={imagePreview}
      />
      {showLoading && <Loading />}
    </S.Wrapper>
  );
};

export default Hospital;
