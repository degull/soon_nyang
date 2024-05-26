import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
/*   background: #fff;
 */`;


export const SignContainer = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;
  top: 120px;
  max-width: 550px;
  margin: 0 auto;
`;

export const Title = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  font-family: 'Cute_siu';
  
  @font-face {
    font-family: 'Cute_siu';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/naverfont_02@1.0/Cut_siu.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;

// ID
export const IdContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ID = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin: 0 0 10px 25px;
  font-family: 'Cute_siu';
  
  @font-face {
    font-family: 'Cute_siu';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/naverfont_02@1.0/Cut_siu.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;
export const IDStyle = styled.input`
   margin: 0 0 10px 20px;
   padding: 10px;
   border: 1px solid #ccc;
   border-radius: 5px;
   width: 300px;
   box-sizing: border-box;

   ::placeholder {
     color: #999;
     font-size: 10px;
   }
`;

// 비밀번호

export const PWContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PW = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin: 0 0 10px 20px;
  font-family: 'Cute_siu';
  
  @font-face {
    font-family: 'Cute_siu';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/naverfont_02@1.0/Cut_siu.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;

export const PWStyle = styled.input`
   margin: 0 0 10px 20px;
   padding: 10px;
   border: 1px solid #ccc;
   border-radius: 5px;
   width: 300px;
   box-sizing: border-box;

   ::placeholder {
     color: #999;
     font-size: 10px;
   }
`;


// 닉네임

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
`;

export const PWConfirmationContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PWConfirmation = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin: 0 0 10px 0px;
  font-family: 'Cute_siu';
  
  @font-face {
    font-family: 'Cute_siu';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/naverfont_02@1.0/Cut_siu.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;

export const PWConfirmationStyle = styled.input`
   margin: 0 0 10px 20px;
   padding: 10px;
   border: 1px solid #ccc;
   border-radius: 5px;
   width: 300px;
   box-sizing: border-box;

   ::placeholder {
     color: #999;
     font-size: 10px;
   }
`;
