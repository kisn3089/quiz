import styled from "styled-components";

export const StyledText = styled.span`
  font-size: ${(props) =>
    props.style?.fontSize ? props.style?.fontSize : "14px"};
  font-weight: ${(props) =>
    props.style?.fontWeight ? props.style?.fontWeight : "400"};
  font-family: ${(props) =>
    props.style?.fontFamily ? props.style?.fontFamily : "'Tilt Neon', cursive"};
  color: ${(props) => (props.style?.color ? props.style?.color : "#fff")};
  user-select: none;
`;
