import React, { useState, useEffect } from 'react';
import * as S from './Main.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import axios from 'axios'; // axios를 사용하여 API 호출

export default function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/posts');
        setPosts(response.data.content); // API 응답에서 게시물 내용(content)만 가져와서 상태 업데이트
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
  }, []); // useEffect를 한 번만 호출하기 위해 빈 배열 전달

  return (
    <S.Wrapper>
      <Header />
      <div>
        {posts.map(post => (
          <div key={post.postId}>
            <h2>{post.catDetailResponse.name}</h2> {/* 게시물 제목 */}
            <p>{post.content}</p> {/* 게시물 내용 */}
          </div>
        ))}
      </div>
      <Menu />
    </S.Wrapper>
  );
  
}
