import styled from "@emotion/styled";

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const DetailContainer = styled.header`
  width: 100%;
  height: 100%;
  max-width: 520px;
  margin: 0 auto;
  display: flex;
`;

export const CatImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin: 50px 0 0 45px;
`;

export const InfoWrapper = styled.div`
  flex-grow: 1;
  margin: 50px 0 0 50px;
`;

export const InfoItem = styled.div`
  margin-bottom: 10px;
`;

export const InfoLabel = styled.span`
  font-weight: bold;
`;

export const InfoContent = styled.span`
  margin-left: 8px;
`;

export const ErrorWrapper = styled.div`
  color: red;
  text-align: center;
`;

export const ListBox = styled.div`
  width: 350px;
  height: 100%;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding-top: 20px;
  padding-bottom: 20px;
`;
