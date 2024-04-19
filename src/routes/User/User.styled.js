import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  background: #fff;
`;
export const UserProfileContainer = styled.div`
  text-align: center;
  margin-top: 45px;
  margin-bottom: 70px;
`;

export const LoginSignupButtonsContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 75px;
`;

export const CatImage = styled.img`
  width: 200px;
  height: auto;
`;

export const LoginButton = styled.button`
  background-color: #FFA552;
  color: #fff;
  width: 350px;
  height: 32px;
  font-size: 11px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  
`;

export const TextAndSignupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  
`;

export const Text = styled.div`
    font-size: 9px;
    color: #C3B3B3;
    @font-face {
      font-family: 'omyu_pretty';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
   }
`;

export const SignupButton = styled.div`
  font-size: 10px;
  cursor: pointer;
  margin-left: 6px;
  color: #FF9635;
  font-weight: bold;
  @font-face {
      font-family: 'omyu_pretty';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
   }
`;

export const UserProfileTitle = styled.h2`
  color: #333;
`;

export const InputContainer = styled.div`
  margin-top: 20px;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const InputField = styled.input`
  width: 350px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: -7px;
  &::placeholder{
    font-size: 10px;
    color: #D5C7C7;
  }
`;