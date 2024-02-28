import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import * as S from './Write.styled';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

const Write = () => {
    const [content, setContent] = useState('');
    const [uploadedImage, setUploadedImage] = useState(null);
    const [userLocation, setUserLocation] = useState(null);

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        setUploadedImage(file);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*', multiple: false });

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setUserLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
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
        // 서버에서는 해당 정보를 저장하고 map.js에 전달할 수 있습니다.
        console.log('작성된 내용:', content);
        console.log('업로드된 이미지:', uploadedImage);
        console.log('사용자 위치:', userLocation);

        // 서버에 데이터를 보내는 로직을 추가해야 합니다.
        // axios 또는 fetch 등을 사용하여 서버로 데이터를 전송할 수 있습니다.
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
                <S.LocationButton type="button" onClick={getUserLocation}>
                    내 위치 가져오기
                </S.LocationButton>
                <S.SubmitButton type="submit">게시하기</S.SubmitButton>
            </S.WriteForm>
            <Menu />
        </S.Wrapper>
    );
};

export default Write;
