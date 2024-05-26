import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트 추가
import * as S from './Main.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import CatDetail from '../Catlist/CatDetail';
import { useNavigate } from 'react-router-dom'; // 추가: react-router-dom의 useNavigate 훅을 사용

export default function Main() {
  const [posts, setPosts] = useState([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [showEditOptions, setShowEditOptions] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [currentSlides, setCurrentSlides] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('token');
        if(!token){
          navigate('/');
          return;
        }

        const response = await fetch('http://ec2-3-34-122-124.ap-northeast-2.compute.amazonaws.com:8080/v1/posts',{
          headers: {
            'Authorization': `Bearer ${token}`, // JWT 토큰을 포함한 Authorization 헤더
            'Content-Type': 'application/json'
        },
        });
        if (!response.ok) {
          throw new Error('게시물을 불러오는 데 실패했습니다');
        }
        const data = await response.json();
        setPosts(data.content);
        setCurrentSlides(new Array(data.content.length).fill(0));
      } catch (error) {
        console.error('게시물을 불러오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchPosts();
  }, []);
  
  const handleCatProfileClick = (catId) => {
    navigate(`/cats/${catId}`);
  };
  

  const navigateSlide = (postIndex, direction) => {
    setCurrentSlides(prevSlides => {
      const newSlides = [...prevSlides];
      const numImages = posts[postIndex].postImageResponses.length;
      if (direction === 'next') {
        newSlides[postIndex] = (newSlides[postIndex] + 1) % numImages;
      } else {
        newSlides[postIndex] = ((newSlides[postIndex] - 1) + numImages) % numImages;
      }
      return newSlides;
    });
  };

  const handleEditBtnClick = postId => {
    setSelectedPostId(postId);
    setShowEditOptions(true);
  };

  const toggleBookmark = postId => {
    if (bookmarkedPosts.includes(postId)) {
      setBookmarkedPosts(bookmarkedPosts.filter(id => id !== postId));
    } else {
      setBookmarkedPosts([...bookmarkedPosts, postId]);
    }
  };

  const toggleLike = postId => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  const handleDelete = async postId => {
    try {
      const response = await fetch(`http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/posts/${postId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('게시물을 삭제하는 데 실패했습니다');
      }
      alert('삭제가 완료되었습니다');
      window.location.href = '/';
    } catch (error) {
      console.error('포스트를 삭제하는 중 오류가 발생했습니다:', error);
      alert('삭제에 실패했습니다');
    }
  };
  
  const handleCloseModal = () => {
    setShowEditOptions(false);
  };


  return (
    <S.Wrapper>
      <Header />
      <S.PostsContainer>
      {posts.map((post, postIndex) => (
          <S.Post key={post.postId}>
            <S.PostProfile onClick={() => handleCatProfileClick(post.catDetailResponse.catId)}>
              {post.catDetailResponse && post.catDetailResponse.imageUrl && (
                <S.ProfileImage src={post.catDetailResponse.imageUrl} alt="Profile Image" />
              )}
          <S.CatName>{post.catDetailResponse && post.catDetailResponse.name}</S.CatName>
          <S.PostNickname>{post.memberDetailResponse && post.memberDetailResponse.nickname}</S.PostNickname>
        </S.PostProfile>
            {post.postImageResponses && post.postImageResponses.length > 0 && (
              <S.PostImagesContainer>
                {post.postImageResponses.map((image, i) => (
                  <S.PostImage
                    key={i}
                    src={image.imageUrl}
                    alt={`이미지 ${i + 1}`}
                    style={{ display: i === currentSlides[postIndex] ? 'block' : 'none' }}
                  />
                ))}
                <S.SlideButtons>
                  <S.PrevButton onClick={() => navigateSlide(postIndex, 'prev')}>{"<"}</S.PrevButton>
                  <S.NextButton onClick={() => navigateSlide(postIndex, 'next')}>{">"}</S.NextButton>
                </S.SlideButtons>
                <S.SlideDots>
                  {post.postImageResponses.map((_, index) => (
                    <S.Dot
                      key={index}
                      active={index === currentSlides[postIndex]}
                      onClick={() => navigateSlide(postIndex, index)}
                    />
                  ))}
                </S.SlideDots>
              </S.PostImagesContainer>
            )}
            <S.PostFooter>
              <S.PostLikeImg
                src={likedPosts.includes(post.postId) ? '/img/heart_f.png' : '/img/heart_e.png'}
                alt="좋아요"
                onClick={() => toggleLike(post.postId)}
              />             
              <S.PostBookmark
                src={bookmarkedPosts.includes(post.postId) ? '/img/bookmark_f.png' : '/img/bookmark_e.png'}
                alt="북마크"
                onClick={() => toggleBookmark(post.postId)}
              />
            </S.PostFooter>
            <S.PostLikes>좋아요 {post.likeCount}개</S.PostLikes>
            <S.Edit>
              <S.EditBtn src='/img/etc.png' onClick={() => handleEditBtnClick(post.postId)} />
            </S.Edit>            
            <S.PostContent>{post.content}</S.PostContent>
          </S.Post>
        ))}
      </S.PostsContainer>
      <Menu />
      {showEditOptions && (
        <S.ModalBackdrop>
          <S.ModalContainer>
            <S.ModalContent>
              <button onClick={() => handleDelete(selectedPostId)}>삭제</button>
              <button onClick={handleCloseModal}>취소</button>
            </S.ModalContent>
          </S.ModalContainer>
        </S.ModalBackdrop>
      )}
    </S.Wrapper>
  );
}
