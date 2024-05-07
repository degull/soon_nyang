import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: space-between; */
  min-height: 100vh;
  background: #fff;

  justify-content: center;
  align-items: center;
`;

export const PostsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  max-width: 520px;
  display: grid;
  gap: 20px;
  margin-top: 35px;
  margin-left: 2px;
  margin-bottom: 65px;
  @media (max-width: 768px) {
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
  height: auto; /* 이미지 비율 유지 */
  max-height: 300px; /* 최대 높이 설정 */
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
  align-items: center;
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

export const PostImagesContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
`;

export const SlideButtons = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

export const PrevButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 16px;
  font-weight: bold;
  outline: none;
`;

export const NextButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 16px;
  font-weight: bold;
  outline: none;
`;

export const SlideDots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

export const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "white" : "gray")};
  margin: 0 5px;
  cursor: pointer;
`;
export const ArrowLeft = styled.img`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1000;
`;

export const ArrowRight = styled.img`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1000;
`;