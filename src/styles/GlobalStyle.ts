import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`

${reset}
    * {
        box-sizing: border-box;
    }
    body {
        background-color: #04011D;
        margin: 0;
        padding: 0;
    }
    input, button {
        border: none;
        outline: none;
    }
`;
