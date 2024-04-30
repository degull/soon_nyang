import React, { useState, useEffect } from 'react';
import * as S from './Main.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Write from '../../routes/Write/Write';


export default function Main() {
  const [posts, setPosts] = useState([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [showEditOptions, setShowEditOptions] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);

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
      setPosts(data.content);
    } catch (error) {
      console.error('게시물을 불러오는 중 오류가 발생했습니다:', error);
    }
  };

  const handleEditBtnClick = postId => {
    setSelectedPostId(postId);
    setShowEditOptions(true);
  };
  
  const handleCloseModal = () => {
    setShowEditOptions(false);
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
      window.location.href = '/'; // Main 페이지로 이동
    } catch (error) {
      console.error('포스트를 삭제하는 중 오류가 발생했습니다:', error);
      alert('삭제에 실패했습니다');
    }
  };
  
  
  const handleEdit = async (postId, newData) => {
    try {
      const response = await fetch(`http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/posts/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
      });
      if (!response.ok) {
        throw new Error('게시물을 수정하는 데 실패했습니다');
      }
      alert('수정이 완료되었습니다');
      window.location.href = '/'; // Main 페이지로 이동
    } catch (error) {
      console.error('포스트를 수정하는 중 오류가 발생했습니다:', error);
      alert('수정에 실패했습니다');
    }
  };
  

  return (
    <S.Wrapper>
      <Header />
      <S.PostsContainer>
        {posts.map(post => (
          <S.Post key={post.postId}>
            <S.PostProfile>
              <S.ProfileImage src={post.catDetailResponse.imageUrl} alt="프로필 이미지" />              
              <S.CatName>{post.catDetailResponse.name}</S.CatName>
              <S.PostNickname>{post.memberDetailResponse.nickname}</S.PostNickname>
            </S.PostProfile>
            <S.PostImage src={post.image} alt="고양이" />
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
              <button onClick={() => handleEdit(selectedPostId)}>수정</button>
              <button onClick={handleCloseModal}>취소</button>
            </S.ModalContent>
          </S.ModalContainer>
        </S.ModalBackdrop>
      )}
    </S.Wrapper>
  );
}
