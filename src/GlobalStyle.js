import { createGlobalStyle } from "styled-components";
import background from "./dolar2.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        margin: 100px auto;
        font-family: "Montserrat", sans-serif;
        line-height: 1.5;
        max-width: 1000px;
        padding: 0 20px;
        background-image: url("${background}");
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }
`;