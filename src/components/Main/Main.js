import React, { useState, useEffect } from 'react';
import * as S from './Main.styled';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

export default function Main() {
  const [posts, setPosts] = useState([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://soonnyang.ap-northeast-2.elasticbeanstalk.com/v1/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts(data.content);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
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

  return (
    <S.Wrapper>
      <Header />
      <S.PostsContainer>
        {posts.map(post => (
          <S.Post key={post.postId}>
            <S.PostProfile>
              <S.ProfileImage src={post.catDetailResponse.imageUrl} alt="User Profile" />              
              <S.CatName>{post.catDetailResponse.name}</S.CatName>
              <S.PostNickname>{post.memberDetailResponse.nickname}</S.PostNickname>
            </S.PostProfile>
            <S.PostImage src={post.image} alt="Cat" />
            <S.PostFooter>
              <S.PostLikeImg
                src={likedPosts.includes(post.postId) ? '/img/heart_f.png' : '/img/heart_e.png'}
                alt="Like"
                onClick={() => toggleLike(post.postId)}
              />             
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
