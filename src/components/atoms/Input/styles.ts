import styled from "styled-components";

export const StyledInput = styled.input`
  display: flex;
  justify-content: center;
  width: ${(props) => (props.style?.width ? props.style?.width : "100%")};
  height: ${(props) => (props.style?.height ? props.style?.height : "40px")};
  font-size: ${(props) =>
    props.style?.fontSize ? props.style?.fontSize : "14px"};
  font-weight: ${(props) =>
    props.style?.fontWeight ? props.style?.fontWeight : "600"};
  font-family: ${(props) =>
    props.style?.fontFamily ? props.style?.fontFamily : "'Tilt Neon', cursive"};
  padding: ${(props) =>
    props.style?.padding ? props.style?.padding : "0 20px"};
  color: ${(props) => (props.style?.color ? props.style?.color : "#fff")};
  background-color: transparent;
  border: ${(props) =>
    props.style?.border ? props.style?.border : "1px solid #ABA9BC"};
  border-radius: ${(props) =>
    props.style?.borderRadius ? props.style?.borderRadius : "7px"};
  outline: none;
  ::placeholder {
    color: #767586;
    font-size: 20px;
    font-weight: 500;
    @media screen and (max-width: 590px) {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;
