import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${(props) => (props.style?.width ? props.style?.width : '150px')};
  height: ${(props) => (props.style?.height ? props.style?.height : '60px')};
  color: ${(props) => (props.style?.color ? props.style?.color : '#fff')};
  background-color: ${(props) =>
    props.style?.backgroundColor ? props.style?.backgroundColor : '#5becc1'};
  font-size: ${(props) =>
    props.style?.fontSize ? props.style?.fontSize : '14px'};
  font-weight: ${(props) =>
    props.style?.fontWeight ? props.style?.fontWeight : '700'};
  font-family: ${(props) =>
    props.style?.fontFamily ? props.style?.fontFamily : "'Tilt Neon', cursive"};
  border-radius: ${(props) =>
    props.style?.borderRadius ? props.style?.borderRadius : '10px'};
  transition: 0.3s ease-in-out;
  :disabled {
    background-color: #767586;
    cursor: not-allowed;
    color: #222;
  }
`;
