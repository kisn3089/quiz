import styled from "styled-components";

export const LoginPage = styled.section`
  display: flex;
  justify-content: center;
  padding: 150px 0 0 0;
  width: 100%;
  height: calc(100vh - 150px);
  @media screen and (max-width: 590px) {
    padding: 30px 0 0 0;
  }
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  input {
    font-size: 18px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  button {
    width: 175px;
    height: 55px;
    font-size: 18px;
    font-weight: 600;
    background-color: #5becc1;
  }
  @media screen and (max-width: 590px) {
    button {
      width: 150px;
      height: 45px;
      font-size: 16px;
    }
  }
`;

export const SNSLoginBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  .kakao,
  .google {
    width: 370px;
    height: 55px;
    color: #222;
  }
  .kakao {
    background-color: #fee500;
  }
  .google {
    background-color: #fff;
  }
  @media screen and (max-width: 590px) {
    gap: 5px;
    .kakao,
    .google {
      width: 250px;
      height: 45px;
    }
  }
`;
