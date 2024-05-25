import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UserContainer = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  top: 120px;
  max-width: 550px;
  margin: 0 auto;
`;

export const Title = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 900;
  font-family: 'Cute_siu';
  @font-face {
    font-family: 'Cute_siu';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/naverfont_02@1.0/Cut_siu.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;

export const UserImg = styled.img`
  width: 110px;
  height: 110px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:50%; 
  cursor: pointer;
`;


export const Form1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

`;
export const Form2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const Nickname = styled.label`
  font-size: 17px;
  font-weight: bold;
  margin-left: 50px;
  font-family: 'Cute_siu';
  
  @font-face {
    font-family: 'Cute_siu';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/naverfont_02@1.0/Cut_siu.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

::placeholder {
     color: #999;
     font-size: 10px;
   }

`;

export const UserIntro = styled.label`
  font-size: 17px;
  font-weight: bold;
  margin-left: 50px;
  font-family: 'Cute_siu';
  @font-face {
    font-family: 'Cute_siu';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/naverfont_02@1.0/Cut_siu.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const ImagePreview = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  margin-top: 20px;
`;


export const Button = styled.button`
  width: 370px;
  height: 32px;
  border: 0;
  background: #FFA552;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 20px;
`;

export const Error = styled.p`
    color: red;
    font-size: 14px;
    margin-top: 5px;
`;