import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  //box-shadow:4px 4px 4px rgba(0,0,0,0);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;

  padding: 5px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    width: 80px;
    height: 80px;

    opacity: 1;
    //position: absolute;
    transition: opacity 500ms ease-in-out 0s;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export const Img = styled.div`
  padding: 0px 5px;
`;

export const Text = styled.div`
  margin-right: 10px;
  font: bold;
  text-transform: capitalize;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  margin-bottom: 10px;
  padding: 5px;
  //padding-left: 10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  width: 90px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Type = styled.div`
  display: flex;
`;

export const Favorite = styled.div``;
export const Button = styled.button``;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h3 {
    text-transform: capitalize;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex: 1;
`;
