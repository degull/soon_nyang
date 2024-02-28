import styled from "@emotion/styled";

export const CatListContainer = styled.div`
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 8px;
  margin-top: 20px;
`;

export const CatListTitle = styled.h2`
  font-size: 18px;
  color: #333;
`;

export const CatList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 10px;
`;

export const CatItem = styled.li`
  padding: 8px;
  margin: 5px 0;
  background-color: ${props => (props.selected ? '#666' : '#fff')};
  color: ${props => (props.selected ? '#fff' : '#333')};
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;
