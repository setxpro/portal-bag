import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-size: calc(60% + .8vmin);
        transition: all 1s ease;
        background: ${(props) => props.theme.colors.main};
        font-family: 'Inter', sans-serif;
    }
    
`;
