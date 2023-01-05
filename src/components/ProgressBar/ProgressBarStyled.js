import styled from "styled-components";

export const ProgressBarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 65px;
  @media (max-width: 768px) {
    margin-left: 5px;
  }
  .progress {
    position: relative;
    width: 100%;

    border-color: #040714;
    border-style: solid;
    border-width: 3px;
    background-color: red;

    @media (max-width: 768px) {
      width: 260px;
      margin-left: 65px;
    }
    @media (min-width: 769px) and (max-width: 2000px) {
      width: 1700px;
    }
    span {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 100%;
      max-width: 100%;

      height: 0.6rem;
      background-color: #057fff;
      border-color: white;
    }
  }
`;
export const H3 = styled.h3`
  @media (max-width: 768px) {
    width: 100px;
    font-size: 13px;
    line-height: 1.08;
  }
  @media (min-width: 769px) and (max-width: 2000px) {
    width: 1700px;
    font-size: 13px;
    line-height: 1.08;
  }
  color: #040714;
  font-size: 33px;
  letter-spacing: 0.2px;
  line-height: 2.08;
  padding: 2px;
  position: relative;
  opacity: 1;
  margin: 3px;
  height: auto;
  //padding-right: 1.1rem;
  width: 200px;
`;
