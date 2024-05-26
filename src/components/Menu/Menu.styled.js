import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background: #ccc;
  margin: 0 auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  z-index: 1000;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 390px;
  margin: 0 auto;

  @media (min-width: 390px) {
    width: 100%;
    max-width: none;
    justify-content: space-around;
  }

  @media (min-width: 600px) {
    width: 80%;
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 992px) {
    width: 60%;
  }

  @media (min-width: 1200px) {
    width: 50%;
  }
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
`;

export const LogoutButton = styled.button`


`;