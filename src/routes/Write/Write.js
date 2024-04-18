import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import * as S from './Write.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import CatList from '../../components/CatList/CatList';

const Write = () => {
    const [content, setContent] = useState('');
    const [uploadedImages, setUploadedImages] = useState([]);
    const [userLocation, setUserLocation] = useState(null);
    const [locationObtained, setLocationObtained] = useState(false);
    const [selectedCat, setSelectedCat] = useState(null);
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=4d2258a550a5cc13b15f5bcf9bf34124&autoload=false';
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {
                const options = {
                    center: new window.kakao.maps.LatLng(37.5665, 126.9780),
                    level: 10
                };
                map.current = new window.kakao.maps.Map(mapContainer.current, options);
                window.kakao.maps.event.addListener(map.current, 'click', handleMapClick);
            });
        };

        return () => {
            if (map.current) {
                window.kakao.maps.event.removeListener(map.current, 'click', handleMapClick);
            }
            document.head.removeChild(script);
        };
    }, []);

    const handleMapClick = (mouseEvent) => {
        const latlng = mouseEvent.latLng;
        setUserLocation({
            latitude: latlng.getLat(),
            longitude: latlng.getLng()
        });
        setLocationObtained(true);

        console.log('클릭한 위치의 위도:', latlng.getLat());
        console.log('클릭한 위치의 경도:', latlng.getLng());
    };

    const onDrop = useCallback(acceptedFiles => {
        const newImages = [...uploadedImages, ...acceptedFiles];
        setUploadedImages(newImages);
    }, [uploadedImages]);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*', multiple: true });

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleCatSelect = (cat) => {
        setSelectedCat(cat);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // handleSubmit 로직 구현
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
                <div ref={mapContainer} style={{ width: '100%', height: '400px', marginBottom: '20px' }} />
                <S.SubmitButton type="submit">게시하기</S.SubmitButton>
            </S.WriteForm>
            <Menu />
        </S.Wrapper>
    );
};

export default Write;
