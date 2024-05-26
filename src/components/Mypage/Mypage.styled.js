import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MyPageContainer = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  top: 120px;
  max-width: 550px;
  margin: 0 auto;
`;

export const Title = styled.div`
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 900;
  font-family: 'MoveSans-Bold';
  @font-face {
    font-family: 'MoveSans-Bold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2405-2@1.0/MoveSans-Bold.woff2') format('woff2');
    font-weight: 900;
    font-style: normal;
}
`;


export const Nickname = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  justify-content: center;
  font-size: 27px;
  font-weight: 900;
  font-family: 'Cute_siu';
  
  @font-face {
    font-family: 'Cute_siu';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/naverfont_02@1.0/Cut_siu.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

`;
export const Introduction = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 27px;
  font-weight: 900;
  font-family: 'Cute_siu';
  
  @font-face {
    font-family: 'Cute_siu';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/naverfont_02@1.0/Cut_siu.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

`;

export const LogoutButton = styled.button`
  display: flex;
  /* margin-top: 150px; */
  margin: 130px auto;
  padding: 8px 30px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  background-color: #FFA552;
  border: none;
  border-radius: 5px;
  cursor: pointer;

`;