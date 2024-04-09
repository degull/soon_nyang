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

  return (
    <S.Wrapper>
      <Header />
      {/* 게시글 출력 */}
      <S.PostsContainer>
        {posts.map(post => (
          <S.Post key={post.postId}>
            <S.PostProfile>
              <img src="/img/zzon.jpg" alt="User Profile" />
              <span>{post.catDetailResponse.name}</span>
              <S.PostNickname>{post.memberDetailResponse.nickname}</S.PostNickname>
            </S.PostProfile>
            <S.PostImage src={post.catDetailResponse.imageUrl} alt="Cat" />
            <div>{post.content}</div>
          </S.Post>
        ))}
      </S.PostsContainer>
      <Menu />
    </S.Wrapper>
  );
}
