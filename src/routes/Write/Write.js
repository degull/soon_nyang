import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import * as S from './Write.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import axios from 'axios';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import Map from '../../components/Map/Map'; // 추가된 부분

const Write = () => {
    const navigate = useNavigate();

    const [content, setContent] = useState('');
    const [uploadedImages, setUploadedImages] = useState([]);
    const [userLocation, setUserLocation] = useState(null);
    const [selectedCat, setSelectedCat] = useState('');
    const [catOptions, setCatOptions] = useState([]);
    const mapContainer = useRef(null);

    const [selectedCatId, setSelectedCatId] = useState(null); // 선택된 고양이 ID
    const map = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=6a6024ec222ac1a9f716b05b1d1d1d5c&autoload=false';
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {
                // Kakao 맵 API 초기화 및 사용할 기능들을 설정
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

        // 마커 생성
        const markerPosition = new window.kakao.maps.LatLng(latlng.getLat(), latlng.getLng());
        const marker = new window.kakao.maps.Marker({
            position: markerPosition
        });

        // 마커를 지도에 표시
        marker.setMap(map.current);
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

            // 게시물 데이터 추가
            formData.append('post', new Blob([JSON.stringify({
                catId: selectedCat.value,
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
                content: content
            })], { type: 'application/json' }));

            // 이미지 파일 추가
            uploadedImages.forEach((file) => {
                // 이미지 파일의 MIME 타입 지정
                const mimeType = getImageMimeType(file.name);
                if (mimeType) {
                    formData.append("files", file);
                } else {
                    console.error('올바르지 않은 파일 형식:', file.name);
                }
            });

            // 서버에 데이터 전송
            const response = await axios.post(
                'http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/posts',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            alert('등록이 완료되었습니다.');

            navigate('/');
        } catch (error) {
            console.error('게시물 작성 오류:', error);
        }
    };

    // 파일의 확장자를 반환하는 함수
    function getFileExtension(filename) {
        return filename.split('.').pop().toLowerCase();
    }

    // 이미지 파일 확장자를 기반으로 MIME 타입을 반환하는 함수
    function getImageMimeType(filename) {
        const extension = getFileExtension(filename);
        switch (extension) {
            case 'jpg':
            case 'jpeg':
                return 'image/jpeg';
            case 'png':
                return 'image/png';
            case 'gif':
                return 'image/gif';
            // 다른 이미지 확장자에 대한 처리 추가
            default:
                return ''; // 지원하지 않는 확장자인 경우 빈 문자열 반환
        }
    }

    const handleCatSelect = (selectedOption) => {
        setSelectedCat(selectedOption);
        setSelectedCatId(selectedOption.value); // 고양이가 선택될 때 selectedCatId를 설정합니다.
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
            {/* 추가된 부분 */}
            <Map selectedCatId={selectedCatId} userLocation={userLocation} />
        </S.Wrapper>
    );
};

export default Write;
