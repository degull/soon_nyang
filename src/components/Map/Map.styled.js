import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  background: #fff;
  
`;

export const CatImage = styled.img`
  width: 150px;
  height: auto;
`;

export const Title = styled.div`
  font-size: 20px; 
  font-weight: bold;
  font-style: normal;
  line-height: normal;
  margin-bottom: -20px;
  font-family: 'insungitCutelivelyjisu';
  @font-face {
    font-family: 'insungitCutelivelyjisu';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/insungitCutelivelyjisu.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`;

export const Dropdown = styled.img`
  display: flex;
  width: 35px;
  position: absolute;
  top: 270px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  width:100%;
  position: relative;
  display: flex;
  height: 100%;
  top: -280px;
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

img {
    width: 100%;
}

div {
    margin-top: 10px;
}
`;

export const PostProfile = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 10px;


img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
}

span {
    margin-right: 350px;
    font-family: 'KCC-Ganpan';
    @font-face {
        font-family: 'KCC-Ganpan';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/KCC-Ganpan.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
}
`;

export const PostImage = styled.img``;

export const PostNickname = styled.div`
font-size: 14px;
font-family: 'KOTRAHOPE';
@font-face {
    font-family: 'KOTRAHOPE';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
text-align: right;
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
`;

export const PostBookmark = styled.img`
cursor: pointer;
`;

export const ProfileImage = styled.img`
border-radius: 50%;
box-shadow: 0 0 0 2px #FFD700;
`;

export const PostLikeImg = styled.img`
cursor: pointer;
`;

export const Catlist = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ProfileImage2 = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;
