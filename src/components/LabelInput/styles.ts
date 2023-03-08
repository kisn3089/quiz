import styled from "styled-components";

export const LabelInputBox = styled.div<{ width: string }>`
  width: ${(props) => (props.width ? props.width : "550px")};
  height: 110px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  input {
    height: 60px;
  }
  @media screen and (max-width: 590px) {
    width: 300px;
    gap: 15px;
    height: 80px;
    input {
      height: 50px;
    }
  }
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  color: ${(props) => (props.style?.color ? props.style?.color : "#fff")};
  @media screen and (max-width: 590px) {
    font-size: 16px;
  }
`;
