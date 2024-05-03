import React, { useEffect, useState, useRef } from 'react';
import * as S from './Map.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const Map = ({ userLocation }) => {
    const [selectedCatId, setSelectedCatId] = useState(null);
    const [isContentOpen, setIsContentOpen] = useState(false);
    const [catSpots, setCatSpots] = useState([]);
    const [cats, setCats] = useState([]);
    const [isDropdownRotated, setIsDropdownRotated] = useState(false);
    const [catPosts, setCatPosts] = useState([]);
    const catListRef = useRef(null);
    const [likedPosts, setLikedPosts] = useState([]);

    const toggleLike = postId => {
        if (likedPosts.includes(postId)) {
            setLikedPosts(likedPosts.filter(id => id !== postId));
        } else {
            setLikedPosts([...likedPosts, postId]);
        }
    };

    const toggleContent = () => {
        setIsContentOpen(!isContentOpen);
        setIsDropdownRotated(!isDropdownRotated);
    };

    const displayCatLocation = (catName, latitude, longitude) => { // 수정된 부분
        // 고양이 이름과 위치 정보를 이용하여 마커를 클릭했을 때 정보를 표시하는 로직을 작성합니다.
        console.log('Displaying cat location:', catName, latitude, longitude);
        alert(`선택한 고양이: ${catName}`);
    };
    

    const handleCatClick = async (catId) => {
        try {
            setSelectedCatId(catId);
            const locationResponse = await fetch(`http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/cats/${catId}/spots`);
            if (!locationResponse.ok) {
                throw new Error('Failed to load cat locations.');
            }
            const locationData = await locationResponse.json();

            const postIdArray = locationData.map(location => location.postId);

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

            if (Array.isArray(postData.content)) {
                setCatPosts(postData.content);
            } else {
                throw new Error('Invalid response data');
            }
        } catch (error) {
            console.error('Error loading cat data:', error);
        }
    };

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

                catSpots.forEach((spot) => {
                    const markerPosition = new window.kakao.maps.LatLng(spot.latitude, spot.longitude);
                    const markerImage = new window.kakao.maps.MarkerImage(
                        '/img/cat_mark.png',
                        new window.kakao.maps.Size(35, 35)
                    );
                    const marker = new window.kakao.maps.Marker({
                        map: map,
                        position: markerPosition,
                        image: markerImage,
                    });

                    const infowindow = new window.kakao.maps.InfoWindow({
                        content: `<div>${spot.catName}</div>`,
                    });

                    window.kakao.maps.event.addListener(marker, 'click', function () {
                        displayCatLocation(spot.catName, spot.latitude, spot.longitude); // 수정된 부분
                        infowindow.open(map, marker);
                    });
                });
            } else {
                console.error('Map container not found.');
            }
        };

        loadMapScript();
    }, [catSpots]);

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

    useEffect(() => {
        const fetchCatPosts = async () => {
            if (selectedCatId !== null) {
                try {
                    const response = await fetch(`http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/posts?catId=${selectedCatId}&limit=10`);
                    if (!response.ok) {
                        throw new Error('Failed to load cat posts.');
                    }
                    const data = await response.json();
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

    useEffect(() => {
        if (selectedCatId && userLocation) {
            // selectedCatId와 userLocation을 기반으로 지도에 마커 표시
            displayCatLocation(selectedCatId, userLocation.latitude, userLocation.longitude);
        }
    }, [selectedCatId, userLocation]);


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
            <div id="map" style={{ width: '100%', height: '250px', marginBottom: '290px', marginTop: '30px' }}></div>

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
                                    <S.CatContainer key={index} onClick={() => handleCatClick(cat.id)}>
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
