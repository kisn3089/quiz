import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  padding: 0 80px;
  overflow-x: hidden;
  text-transform: uppercase;
  span {
    cursor: pointer;
  }
  .logo {
    font-size: 50px;
    font-weight: 700;
    color: #5becc1;
    letter-spacing: 2px;
  }
  @media screen and (max-width: 590px) {
    padding: 0 20px;
    .logo {
      font-size: 30px;
      letter-spacing: 0;
    }
  }
`;

export const NavContainer = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 20px;
  }
  @media screen and (max-width: 590px) {
    width: 155px;
    span {
      font-size: 13px;
    }
  }
`;
