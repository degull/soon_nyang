import React, { useState, useEffect } from 'react';
import * as S from './Hospital.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import axios from 'axios';
import Select from 'react-select';
import { Link, useNavigate } from 'react-router-dom';

const Hospital = () => {
  const navigate = useNavigate();
  const [selectedCat, setSelectedCat] = useState(null);
  const [catOptions, setCatOptions] = useState([]);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false); // 추가: 데이터 로딩 상태
  const [errorMessage, setErrorMessage] = useState(''); // 추가: 에러 메시지

  useEffect(() => {
    const fetchCats = async () => {

      try {


        const response = await axios.get('http://ec2-3-34-122-124.ap-northeast-2.compute.amazonaws.com:8080/v1/cats');
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
        setErrorMessage('고양이 데이터를 불러오는 데 실패했습니다.'); // 추가: 에러 메시지 설정
      }
    };

    fetchCats();
  }, []);

  const handleCatSelect = (selectedOption) => {
    setSelectedCat(selectedOption);
  };

  const handleImageClick = () => {
    document.getElementById('fileInput').click(); // 이미지 클릭 시 파일 열기
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
    const diagnoses = ['각막염', '눈병'];
    return diagnoses[Math.floor(Math.random() * diagnoses.length)];
  };

  const handleDiagnoseClick = async () => {
    setLoading(true);
    setErrorMessage('');
  
    try {
      console.log('Selected Cat:', selectedCat);
      console.log('Image Data:', image);

      // Random diagnosis popup
      const diagnosis = getRandomDiagnosis();
      alert(`진단 결과: ${diagnosis}`);
    } catch (error) {
      console.error('Failed to diagnose:', error);
      setErrorMessage('진단하는 동안 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
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
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>} {/* 에러 메시지 표시 */}
      </S.HosContainer>

      <S.RowContainer>
        <S.GoToHosText1>병원정보를 찾으시나요?</S.GoToHosText1>
        <Link to="/HospitalList/HospitalList">
          <S.GoToHosText>병원정보보러가기</S.GoToHosText>
          <S.GoToHos src="/img/animal-hospital.png" />
        </Link>
      </S.RowContainer>
      <Menu />
    </S.Wrapper>
  );
};

export default Hospital;


/* import React, { useState, useEffect } from 'react';
import * as S from './Hospital.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import axios from 'axios';
import Select from 'react-select';
import { Link, useNavigate } from 'react-router-dom';

const Hospital = () => {
  const navigate = useNavigate();
  const [selectedCat, setSelectedCat] = useState(null);
  const [catOptions, setCatOptions] = useState([]);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false); // 추가: 데이터 로딩 상태
  const [errorMessage, setErrorMessage] = useState(''); // 추가: 에러 메시지

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const token = localStorage.getItem('token'); // 로컬 스토리지에서 토큰을 가져옴
        if (!token) {
          navigate('/'); // 토큰이 없으면 로그인 페이지로 이동
          return;
        }

        const response = await axios.get('http://ec2-3-34-122-124.ap-northeast-2.compute.amazonaws.com:8080/v1/cats', {
          headers: {
            'Authorization': `Bearer ${token}`, // 토큰을 포함한 헤더 추가
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
        setErrorMessage('고양이 데이터를 불러오는 데 실패했습니다.'); // 추가: 에러 메시지 설정
      }
    };

    fetchCats();
  }, [navigate]);

  const handleCatSelect = (selectedOption) => {
    setSelectedCat(selectedOption);
  };

  const handleImageClick = () => {
    document.getElementById('fileInput').click(); // 이미지 클릭 시 파일 열기
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
    const diagnoses = ['각막염', '눈병'];
    return diagnoses[Math.floor(Math.random() * diagnoses.length)];
  };

  const handleDiagnoseClick = async () => {
    setLoading(true);
    setErrorMessage('');
  
    try {
      console.log('Selected Cat:', selectedCat);
      console.log('Image Data:', image);

      // Random diagnosis popup
      const diagnosis = getRandomDiagnosis();
      alert(`진단 결과: ${diagnosis}`);
    } catch (error) {
      console.error('Failed to diagnose:', error);
      setErrorMessage('진단하는 동안 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
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
    </S.Wrapper>
  );
};

export default Hospital; */