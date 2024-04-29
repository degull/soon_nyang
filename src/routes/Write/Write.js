import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import * as S from './Write.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import axios from 'axios';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom'; // useHistory 대신 useNavigate 사용

const Write = () => {
    const navigate = useNavigate(); // useNavigate 사용

    const [content, setContent] = useState('');
    const [uploadedImages, setUploadedImages] = useState([]);
    const [userLocation, setUserLocation] = useState(null);
    const [selectedCat, setSelectedCat] = useState('');
    const [catOptions, setCatOptions] = useState([]);
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
                    center: new window.kakao.maps.LatLng(36.7713718911621, 126.934133774914),
                    level: 3
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

    const handleCatSelect = (selectedOption) => {
        setSelectedCat(selectedOption);
    };

    useEffect(() => {
        const fetchCats = async () => {
            try {
                const response = await axios.get('http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/cats');
                setCatOptions(response.data);
            } catch (error) {
                console.error('고양이 정보를 불러오는 동안 오류가 발생했습니다:', error);
            }
        };

        fetchCats();
    }, []);

    const handleMapClick = (mouseEvent) => {
        const latlng = mouseEvent.latLng;
        setUserLocation({
            latitude: latlng.getLat(),
            longitude: latlng.getLng()
        });

        console.log('클릭한 위치의 위도:', latlng.getLat());
        console.log('클릭한 위치의 경도:', latlng.getLng());
    };

    const onDrop = useCallback(acceptedFiles => {
        setUploadedImages(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/jpeg, image/png, image/jpg', multiple: true });

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            const jsonBlob = new Blob([JSON.stringify({
                catId: selectedCat.value,
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
                content: content
            })], { type: 'application/json' });
            formData.append('post', jsonBlob);

            uploadedImages.forEach((file, index) => {
                if (file instanceof Blob) {
                    formData.append(`files[${index}]`, file);
                } else {
                    const imageBlob = new Blob([file], { type: 'image/jpeg' });
                    formData.append(`files[${index}]`, imageBlob);
                }
            });

            const response = await axios.post('http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // 등록 완료 알림
            alert('등록이 완료되었습니다.');

            // main 페이지로 이동
            /* navigate('/'); */
        } catch (error) {
            console.error('게시물 작성 오류:', error);
        }
    };

    return (
        <S.Wrapper>
            <Header />
            <S.CatOption>
                <S.CustomSelect>
                    <Select
                        id="categorySelect"
                        value={selectedCat}
                        onChange={handleCatSelect}
                        options={catOptions.map(cat => ({
                            value: cat.catId,
                            label: (
                                <div>
                                    <S.CatImage src={cat.imageUrl} alt={cat.name} />
                                    <span>{cat.name}</span>
                                </div>
                            )
                        }))}
                    />
                </S.CustomSelect>
            </S.CatOption>
            <S.WriteForm onSubmit={handleSubmit}>
                <S.DropzoneContainer {...getRootProps()}>
                    <input {...getInputProps()} />
                    {uploadedImages.length > 0 ? (
                        uploadedImages.map((image, index) => (
                            <S.UploadedImage key={index} src={URL.createObjectURL(image)} alt={`Uploaded ${index}`} />
                        ))
                    ) : (
                        <S.DropzoneText>이미지를 업로드하세요</S.DropzoneText>
                    )}
                </S.DropzoneContainer>
                <S.TextArea
                    value={content}
                    onChange={handleContentChange}
                    placeholder="문구를 추가하세요..."
                />

                <div ref={mapContainer} style={{ width: '100%', height: '300px', marginBottom: '20px' }} />
                <S.SubmitButton type="submit">등록</S.SubmitButton>
            </S.WriteForm>
            <Menu />
        </S.Wrapper>
    );
};

export default Write;
