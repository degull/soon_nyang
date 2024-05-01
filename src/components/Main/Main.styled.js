import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* min-height: 100vh; */
`;

export const PostsContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 520px;
  display: grid;
/*   display: block; */
/*   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));*/  gap: 20px;
  margin-top: 35px;
  margin-left: 2px;
  margin-bottom: 65px;
  @media (max-width: 768px) { /* 모바일 화면 */
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;

export const Post = styled.div`
width: 100%;
  transition: all 0.3s ease;
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
  margin-right: 10px;
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
  font-family: "SBAggroB";
  @font-face {
    font-family: "SBAggroB";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  margin-right: 270px;
/*  display: flex;
 text-align: center;
 justify-content: center; */
`;

export const PostLikeImg = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin: 10px;
`;

export const Edit = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center; /* Edit 버튼을 수직 중앙 정렬 */
`;

export const EditBtn = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;
`;


export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;