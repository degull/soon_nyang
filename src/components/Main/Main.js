import React, { useState, useEffect } from 'react';
import * as S from './Main.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

export default function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // API 호출
    fetch('http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/posts')
      .then(response => response.json())
      .then(data => {
        // API 응답을 받아서 posts 상태 업데이트
        setPosts(data.content);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  // 북마크 상태를 추적하는 state 추가
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

  // 북마크 토글 함수
  const toggleBookmark = postId => {
    if (bookmarkedPosts.includes(postId)) {
      // 북마크 해제
      setBookmarkedPosts(bookmarkedPosts.filter(id => id !== postId));
    } else {
      // 북마크 추가
      setBookmarkedPosts([...bookmarkedPosts, postId]);
    }
  };

  return (
    <S.Wrapper>
      <Header />
      {/* 게시글 출력 */}
      <S.PostsContainer>
        {posts.map(post => (
          <S.Post key={post.postId}>
            <S.PostProfile>
              <img src={post.catDetailResponse.imageUrl} alt="User Profile" />
              <span>{post.catDetailResponse.name}</span>
              <S.PostNickname>{post.memberDetailResponse.nickname}</S.PostNickname>
            </S.PostProfile>
            <S.PostImage src={post.image} alt="Cat" />
            <S.PostFooter>
              <img src="/img/likelike.png" alt="Like" />
              {/* 북마크 토글 함수를 전달하고 북마크 상태에 따라 적절한 이미지를 렌더링 */}
              <S.PostBookmark
                src={bookmarkedPosts.includes(post.postId) ? '/img/bookmark_f.png' : '/img/bookmark_e.png'}
                alt="Bookmark"
                onClick={() => toggleBookmark(post.postId)}
              />
            </S.PostFooter>
            <S.PostLikes>좋아요 {post.likeCount}개</S.PostLikes>            
            <S.PostContent>{post.content}</S.PostContent>
          </S.Post>
        ))}
      </S.PostsContainer>
      <Menu />
    </S.Wrapper>
  );
}
