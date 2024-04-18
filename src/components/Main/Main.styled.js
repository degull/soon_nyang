import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`;

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
  margin-left: 2px;
  @media (max-width: 768px) { /* 모바일 화면 */
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;

export const Post = styled.div`
  transition: all 0.3s ease;
`;

export const PostProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  span {
    font-family: 'KCC-Ganpan';
    @font-face {
      font-family: 'KCC-Ganpan';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/KCC-Ganpan.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
    }
  }
`;

export const PostImage = styled.img`
  width: 100%;
`;

export const PostNickname = styled.div`
  font-size: 14px;
  font-family: 'KOTRAHOPE';
  @font-face {
    font-family: 'KOTRAHOPE';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;

export const PostLikes = styled.span`
  font-size: 13px;
  font-family: 'KOTRAHOPE';
  @font-face {
    font-family: 'KOTRAHOPE';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  margin: 10px;
`;

export const PostContent = styled.div`
  font-size: 12px;
  font-family: 'Ownglyph_meetme-Rg';
  @font-face {
    font-family: 'Ownglyph_meetme-Rg';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/Ownglyph_meetme-Rg.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  margin: 10px;
`;

export const PostBookmark = styled.img`
  cursor: pointer;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  box-shadow: 0 0 0 2px #FFD700;
  margin: 10px;
`;

export const CatName = styled.div`
font-family: 'KOTRAHOPE';
  @font-face {
    font-family: 'KOTRAHOPE';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  margin-right: 320px;
`;

export const PostLikeImg = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin: 10px;
`;
