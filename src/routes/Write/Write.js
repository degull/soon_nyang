import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import EXIF from 'exif-js'; // exif-js 라이브러리 import
import * as S from './Write.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import CatList from '../../components/CatList/CatList';

const Write = () => {
    const [content, setContent] = useState('');
    const [uploadedImages, setUploadedImages] = useState([]); // 배열로 변경
    const [userLocation, setUserLocation] = useState(null);
    const [locationObtained, setLocationObtained] = useState(false);
    const [selectedCat, setSelectedCat] = useState(null);

    const onDrop = useCallback(acceptedFiles => {
        // 새 이미지들을 기존 이미지들과 합쳐서 새로운 배열 생성
        const newImages = [...uploadedImages, ...acceptedFiles];
        setUploadedImages(newImages);
        
        // 이미지를 업로드할 때마다 GPS 정보 추출
        acceptedFiles.forEach(file => {
            EXIF.getData(file, function() {
                const lat = EXIF.getTag(this, 'GPSLatitude');
                const latRef = EXIF.getTag(this, 'GPSLatitudeRef');
                const lon = EXIF.getTag(this, 'GPSLongitude');
                const lonRef = EXIF.getTag(this, 'GPSLongitudeRef');

                if (lat && latRef && lon && lonRef) {
                    const latitude = (lat[0] + lat[1] / 60 + lat[2] / 3600) * (latRef === 'N' ? 1 : -1);
                    const longitude = (lon[0] + lon[1] / 60 + lon[2] / 3600) * (lonRef === 'E' ? 1 : -1);

                    setUserLocation({ latitude, longitude });
                    setLocationObtained(true);
                } else {
                    console.error('이미지에서 GPS 정보를 찾을 수 없습니다.');
                    setUserLocation(null);
                    setLocationObtained(false);
                }
            });
        });
    }, [uploadedImages]);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*', multiple: true }); // multiple을 true로 변경

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleCatSelect = (cat) => {
        setSelectedCat(cat);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        console.log('작성된 내용:', content);
        console.log('업로드된 이미지:', uploadedImages);
        console.log('사용자 위치:', userLocation);
        console.log('선택된 고양이:', selectedCat);

        if (uploadedImages.length === 0) {
            alert('이미지를 업로드해주세요.');
            return;
        }
        
        if (!userLocation) {
            alert('이미지에 위치 정보가 없습니다. 다른 이미지를 업로드하거나 위치를 수동으로 입력해주세요.');
            return;
        }

        try {
            // 이미지들을 FormData에 추가
            const formData = new FormData();
            uploadedImages.forEach((image, index) => {
                formData.append(`image${index}`, image);
            });

            // 위치 정보를 전송하여 위치를 추출하고 받습니다.
            const response = await fetch('/api/location', {
                method: 'POST',
                body: JSON.stringify(userLocation),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();

            console.log('서버에서 받은 위치 정보:', data);

            // 나머지 서버 로직 추가
        } catch (error) {
            console.error('위치 정보를 가져오는 중 오류가 발생했습니다.', error);
        }
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

    return (
        <S.Wrapper>
            <Header />
            <S.WriteForm onSubmit={handleSubmit}>
                <S.DropzoneContainer {...getRootProps()}>
                    <input {...getInputProps()} />
                    {uploadedImages.length > 0 ? (
                        uploadedImages.map((image, index) => (
                            <S.UploadedImage key={index} src={URL.createObjectURL(image)} alt={`Uploaded ${index}`} />
                        ))
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
{/*                 <S.LocationButton type="button" onClick={getUserLocation} obtained={locationObtained}>
                    {locationObtained ? '내 위치 가져오기' : '내 위치 가져오기'}
                    {locationObtained && <S.CheckIcon src="/img/check.png" alt="Check" />}
                </S.LocationButton> */}
                <S.SubmitButton type="submit">게시하기</S.SubmitButton>
            </S.WriteForm>
            <Menu />
        </S.Wrapper>
    );
};

export default Write;
