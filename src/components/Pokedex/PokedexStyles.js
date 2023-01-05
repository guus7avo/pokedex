import styled from "styled-components";

export const Container = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const Info = styled.div`
  display: grid;
  grid-gap: 10px;
  padding: 0px 10px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  @media (max-width: 1200px) and (min-width: 769px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const Div = styled.div`
  top: 785px;
  color: white;
  margin-top: 100px;
`;
