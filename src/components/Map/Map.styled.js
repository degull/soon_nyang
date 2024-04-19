import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  background: #fff;
`;


export const ContentContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  height: 100%;
  top: -280px;
`;

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
/*   margin-top: 10px;
  margin-left: 2px; */
  margin-bottom: 70px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;

export const Post = styled.div`
  transition: all 0.3s ease;

  div {
    margin-top: 0px;
  }
`;

export const CatlistContainer = styled.div`
  overflow-x: auto;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 0;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Catlist = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const CatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const CatImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  margin-bottom: 8px;
  margin-right: 15px;
  margin-left: 10px;
  cursor: pointer;
`;

export const CatName1 = styled.span`
  font-size: 10px;
  color: #333;
  margin-left: -5px;
  font-family: "SBAggroB";
  @font-face {
    font-family: "SBAggroB";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;


export const CatName2 = styled.span`
  font-size: 12px;
  color: #333;
  margin-left: 13px;
  font-family: "SBAggroB";
  @font-face {
    font-family: "SBAggroB";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;

export const ArrowButton = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

export const Dropdown = styled.img`
  display: flex;
  width: 35px;
  position: absolute;
  top: 270px;
  left: 50%;
  transform: translateX(-50%) ${props => props.rotate}; // Apply rotation here
  z-index: 1;
  cursor: pointer;
  transition: transform 0.3s ease; // Add transition for smooth animation
`;

export const PostProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 내용을 양쪽 끝으로 정렬 */
  margin-bottom: 10px;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  margin: 10px;
  width: 35px; /* 이미지의 너비 조정 */
  height: 35px; /* 이미지의 높이는 자동으로 조정되도록 설정 */
`;


export const PostNickname = styled.span`
  font-size: 14px;
  font-family: 'KOTRAHOPE';
  margin-left: 250px;
  @font-face {
    font-family: 'KOTRAHOPE';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`;


export const PostImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

export const PostFooter = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostLikeImg = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-left: 350px;
`;

export const PostBookmark = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
`;

export const PostLikes = styled.div`
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
  margin: 10px;
  font-size: 13px;
  font-family: 'Ownglyph_meetme-Rg';
  @font-face {
    font-family: 'Ownglyph_meetme-Rg';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/Ownglyph_meetme-Rg.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
`;
export const PostLikesContainer = styled.div`
    display: flex;
    align-items: center;
`;