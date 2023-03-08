import styled from "styled-components";

export const HomeBox = styled.section`
  width: 100%;
  height: calc(100vh - 150px);
  overflow-x: hidden;
`;

export const TextBox = styled.div`
  padding: 60px 100px;
  letter-spacing: 3px;
  min-width: 690px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  span {
    font-size: 100px;
    font-weight: 500;
  }
  .quest {
    padding: 20px 0 20px 150px;
  }
  .dev {
    padding: 20px 0 140px 150px;
  }
  @media screen and (max-width: 590px) {
    padding: 20px 30px;
    span {
      font-size: 40px;
    }
    .quest {
      padding: 10px 0 10px 70px;
    }
    .dev {
      padding: 10px 0 60px 70px;
    }
  }
`;

export const TextLine = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 50px;
  button {
    width: 175px;
    height: 70px;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    background-color: #5becc1;
    text-transform: uppercase;
    @media screen and (max-width: 590px) {
      width: 120px;
      height: 50px;
      font-size: 12px;
    }
  }
`;
