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
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/posts');
      if (!response.ok) {
        throw new Error('게시물을 불러오는 데 실패했습니다');
      }
      const data = await response.json();
      // 게시물을 불러온 후에 고양이의 catId 정보를 이용하여 상세 페이지로 이동할 수 있도록 설정
      setPosts(data.content);
      setCurrentSlides(new Array(data.content.length).fill(0));
    } catch (error) {
      console.error('게시물을 불러오는 중 오류가 발생했습니다:', error);
    }
  };
  
  // PostProfile 클릭 시 해당 고양이의 상세 페이지로 이동하는 함수
  const handleCatProfileClick = (catId) => {
    if (catId) {
      navigate(`/cats/${catId}`);
    }
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
    <Link to={`/cats/${post.catDetailResponse.id}`}> {/* 고양이 상세페이지 링크 */}
      <S.PostProfile onClick={() => handleCatProfileClick(post.catDetailResponse.id)}> {/* 클릭 시 상세 페이지로 이동 */}
        {post.catDetailResponse && post.catDetailResponse.imageUrl && (
          <S.ProfileImage src={post.catDetailResponse.imageUrl} alt="프로필 이미지" />
        )}
        <S.CatName>{post.catDetailResponse && post.catDetailResponse.name}</S.CatName>
      </S.PostProfile>
    </Link>
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
