import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import * as S from './Write.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import CatList from '../../components/CatList/CatList';

const Write = () => {
    const [content, setContent] = useState('');
    const [uploadedImage, setUploadedImage] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const [locationObtained, setLocationObtained] = useState(false);
    const [selectedCat, setSelectedCat] = useState(null);

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        setUploadedImage(file);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*', multiple: false });

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleCatSelect = (cat) => {
        setSelectedCat(cat);
    };

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setUserLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                    setLocationObtained(true);
                },
                error => {
                    console.error('위치 정보를 가져오는 중 오류가 발생했습니다.', error);
                }
            );
        } else {
            console.error('브라우저가 Geolocation API를 지원하지 않습니다.');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // 사용자의 글과 위치 정보를 서버로 전송
        console.log('작성된 내용:', content);
        console.log('업로드된 이미지:', uploadedImage);
        console.log('사용자 위치:', userLocation);
        console.log('선택된 고양이:', selectedCat);
        /* 나중에 서버 로직 추가 */ 
    };

    return (
        <S.Wrapper>
            <Header />
            <S.WriteForm onSubmit={handleSubmit}>
                <S.DropzoneContainer {...getRootProps()}>
                    <input {...getInputProps()} />
                    {uploadedImage ? (
                        <S.UploadedImage src={URL.createObjectURL(uploadedImage)} alt="Uploaded" />
                    ) : (
                        <S.DropzoneText>클릭 또는 이미지를 끌어다 놓아 업로드하세요</S.DropzoneText>
                    )}
                </S.DropzoneContainer>
                <S.TextArea
                    value={content}
                    onChange={handleContentChange}
                    placeholder="여기에 글을 작성하세요..."
                />
                <CatList onSelect={handleCatSelect} />
                <S.LocationButton type="button" onClick={getUserLocation} obtained={locationObtained}>
                {locationObtained ? '내 위치 가져오기' : '내 위치 가져오기'}
                {locationObtained && <S.CheckIcon src="/img/check.png" alt="Check" />}
            </S.LocationButton>
                <S.SubmitButton type="submit">게시하기</S.SubmitButton>
            </S.WriteForm>
            <Menu />
        </S.Wrapper>
    );
};

export default Write;
