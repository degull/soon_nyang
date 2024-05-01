import React, { useEffect, useState, useRef } from 'react';
import * as S from './Map.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const Map = () => {
    const [isContentOpen, setIsContentOpen] = useState(false);  // 드롭다운
    const [catSpots, setCatSpots] = useState([]);   // 고양이 위치 데이터
    const [cats, setCats] = useState([]);   // 고양이 목록
    const [isDropdownRotated, setIsDropdownRotated] = useState(false);  // 드롭다운 회전 상태
    const [selectedCatId, setSelectedCatId] = useState(null); // 선택된 고양이 ID
    const [catPosts, setCatPosts] = useState([]);   // 고양이 게시물 목록
    const catListRef = useRef(null);    // 고양이 목록 참조

    const [likedPosts, setLikedPosts] = useState([]);   // 좋아요 상태 관리

    // 좋아요 토글 함수
    const toggleLike = postId => {
        if (likedPosts.includes(postId)) {
          setLikedPosts(likedPosts.filter(id => id !== postId));
        } else {
          setLikedPosts([...likedPosts, postId]);
        }
    };

    // 콘텐츠 토글 함수
    const toggleContent = () => {
        setIsContentOpen(!isContentOpen);
        setIsDropdownRotated(!isDropdownRotated);
    };

    // 고양이 클릭 시 처리 함수
    const handleCatClick = async (catId) => {
        try {
            setSelectedCatId(catId);
            
            // 해당 고양이 위치 데이터 가져오기
            const locationResponse = await fetch(`http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/cats/${catId}/spots`);
            if (!locationResponse.ok) {
                throw new Error('Failed to load cat locations.');
            }
            const locationData = await locationResponse.json();
            console.log('Cat locations:', locationData);
    
            const postIdArray = locationData.map(location => location.postId);
    
            // 해당 고양이의 게시물 데이터 가져오기
            const postResponse = await fetch('http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    postIdList: postIdArray
                })
            });
    
            if (!postResponse.ok) {
                throw new Error('Failed to load cat posts.');
            }
            const postData = await postResponse.json();
            console.log('Cat posts:', postData);
    
            if (Array.isArray(postData.content)) {
                setCatPosts(postData.content);
            } else {
                throw new Error('Invalid response data');
            }
        } catch (error) {
            console.error('Error loading cat data:', error);
        }
    };
    
    // useEffect를 사용하여 고양이 위치 데이터 가져오기
    useEffect(() => {
        const fetchCatSpots = async () => {
            try {
                const response = await fetch('http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/cats/5/spots');
                if (!response.ok) {
                    throw new Error('Failed to load cat spots.');
                }
                const data = await response.json();
                setCatSpots(data);
            } catch (error) {
                console.error('Error loading cat spots:', error);
            }
        };

        fetchCatSpots();
    }, []);

     // useEffect를 사용하여 카카오지도 API 로드하기
    useEffect(() => {
        const loadMapScript = () => {
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=6a6024ec222ac1a9f716b05b1d1d1d5c&autoload=false';
            script.onload = () => {
                window.kakao.maps.load(() => {
                    if (window.kakao.maps) {
                        initializeMap();
                    } else {
                        console.error('Kakao Map SDK is not loaded correctly.');
                    }
                });
            };
            script.onerror = () => {
                console.error('Error loading Kakao Map API script.');
            };
            document.head.appendChild(script);
        };
        const initializeMap = () => {
            const container = document.getElementById('map');
            if (container) {
                const options = {
                    center: new window.kakao.maps.LatLng(36.7713718911650, 126.934133774920),
                    level: 3,
                };
        
                const map = new window.kakao.maps.Map(container, options);
        
                // 고양이 위치 데이터를 이용하여 마커 출력
                catSpots.forEach((spot) => {
                    const markerPosition = new window.kakao.maps.LatLng(spot.latitude, spot.longitude);
                    const markerImage = new window.kakao.maps.MarkerImage(
                        '/img/cat_mark.png',
                        new window.kakao.maps.Size(35, 35)
                    );
                    const marker = new window.kakao.maps.Marker({
                        map: map,
                        position: markerPosition,
                        image: markerImage, // 마커 이미지 설정
                    });
        
                    const infowindow = new window.kakao.maps.InfoWindow({
                        content: `<div>${spot.catName}</div>`,
                    });
        
                    // 마커 클릭 시 고양이 이름을 인포윈도우로 표시
                    window.kakao.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map, marker);
                    });
                });
            } else {
                console.error('Map container not found.');
            }
        };
        
        

        loadMapScript();
    }, [catSpots]);


     // useEffect를 사용하여 고양이 목록 가져오기
    useEffect(() => {
        const fetchCats = async () => {
            try {
                const response = await fetch('http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/cats');
                if (!response.ok) {
                    throw new Error('Failed to load cat list.');
                }
                const data = await response.json();
                setCats(data);
            } catch (error) {
                console.error('Error loading cat list:', error);
            }
        };

        fetchCats();
    }, []);

    // useEffect를 사용하여 선택된 고양이의 게시물 가져오기
    useEffect(() => {
        const fetchCatPosts = async () => {
            if (selectedCatId !== null) {
                try {
                    const response = await fetch(`http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/posts?catId=${selectedCatId}&limit=10`);
                    if (!response.ok) {
                        throw new Error('Failed to load cat posts.');
                    }
                    const data = await response.json();
                    console.log('Cat posts:', data);
                    if (Array.isArray(data.content)) {
                        setCatPosts(data.content);
                    } else {
                        throw new Error('Invalid response data');
                    }
                } catch (error) {
                    console.error('Error loading cat posts:', error);
                }
            }
        };

        fetchCatPosts();
    }, [selectedCatId]);


    // 고양이 목록 스크롤 좌우 이동 함수
    const scrollLeft = () => {
        if (catListRef.current) {
            catListRef.current.scrollBy({
                left: -200,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (catListRef.current) {
            catListRef.current.scrollBy({
                left: 200,
                behavior: 'smooth',
            });
        }
    };

    return (
        <S.Wrapper>
            <Header />
            <div id="map" style={{ width: '100%', height: '250px', marginBottom: '290px', marginTop:'30px' }}></div>

            <S.Dropdown
                src='/img/dropdown.png'
                onClick={toggleContent}
                rotate={isDropdownRotated ? 'rotate(180deg)' : 'rotate(0deg)'}
            />

            {isContentOpen && (
                <S.ContentContainer>
                    <S.PostsContainer>
                        <S.CatlistContainer>
                            {cats.length > 0 && catListRef.current && catListRef.current.scrollWidth > catListRef.current.clientWidth && (
                                <S.ArrowButton src='/img/right_arrow.png' onClick={scrollLeft} />
                            )}

                            <S.Catlist ref={catListRef}>
                                {cats.map((cat, index) => (
                                    <S.CatContainer key={index} onClick={() => handleCatClick(cat.id)}> {/* Handle click event */}
                                        <S.CatImage src={cat.imageUrl} alt={`고양이 이미지 ${index}`} />
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <S.CatName1>{cat.name}</S.CatName1>
                                        </div>
                                    </S.CatContainer>
                                ))}
                            </S.Catlist>

                            {cats.length > 0 && catListRef.current && catListRef.current.scrollWidth > catListRef.current.clientWidth && (
                                <S.ArrowButton src='/img/right_arrow.png' onClick={scrollRight} />
                            )}
                        </S.CatlistContainer>
                    </S.PostsContainer>
                </S.ContentContainer>
            )}

            {/* Cat posts */}
            <S.PostsContainer>
                {catPosts.map(post => (
                    <S.Post key={post.postId}>
                        <div style={{ width: '450px', height: '100%', backgroundColor: '#fff', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <S.ProfileImage src={post.catDetailResponse.imageUrl} alt="User Profile" />
                                <div>
                                    <S.CatName2>{post.catDetailResponse.name}</S.CatName2>
                                    <S.PostNickname>{post.memberDetailResponse.nickname}</S.PostNickname>
                                </div>
                            </div>

                            {post.postImageResponses && post.postImageResponses.length > 0 && (
       <S.PostImage src={post.postImageResponses[0].imageUrl} alt="고양이" />
     )}

                            <S.PostLikesContainer>
                                <S.PostLikes>좋아요 {post.likeCount}개</S.PostLikes>
                                <S.PostLikeImg
                                    src={likedPosts.includes(post.postId) ? '/img/heart_f.png' : '/img/heart_e.png'}
                                    alt="Like"
                                    onClick={() => toggleLike(post.postId)}
                                />
                            </S.PostLikesContainer>

                            <S.PostContent>{post.content}</S.PostContent>
                        </div>
                    </S.Post>
                ))}
            </S.PostsContainer>

            <Menu />
        </S.Wrapper>
    );
};

export default Map;