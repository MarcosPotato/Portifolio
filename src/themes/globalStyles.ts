import { createGlobalStyle, css } from "styled-components"

interface GlobalStyleProps{
    appTheme: string | null
}

export default createGlobalStyle<GlobalStyleProps>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        -webkit-font-smoothing: antialiased;
        background-color: #F9F9F9;
        color: #000000;

        ${ porps => porps.appTheme === "dark" && css`
            background-color: #121211;
            color: #F9F9F9;
        `}

        ${ porps => porps.appTheme === "light" && css`
            background-color: #F9F9F9;
            color: #000000;
        `}
    }

    body, input, button{
        font-family: Roboto-Slab, sans-serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h6, strong{
        font-weight: 500;
    }

    button{
        cursor: pointer;
        border: none;
        background-color: #00000000;
    }

    a{
        text-decoration: none;
    }

    .MuiDrawer-paper {
        width: 60% !important;
    }

    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }
    ::-webkit-scrollbar-button {
        width: 1px;
        height: 1px;
    }
    ::-webkit-scrollbar-thumb {
        background: #4a25a2;
        border: 0px none #ffffff;
        border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #3f2088;
    }
    ::-webkit-scrollbar-thumb:active {
        background: #341b6f;
    }
    ::-webkit-scrollbar-track {
        background: #e3e3e3;
        border: 0px none #ffffff;
        border-radius: 50px;
    }
    ::-webkit-scrollbar-track:hover {
        background: #b0b0b0;
    }
    ::-webkit-scrollbar-track:active {
        background: #949494;
    }
    ::-webkit-scrollbar-corner {
        background: transparent;
    }

    @media (max-width: 1200px) {
        .MuiDrawer-paper {
            width: 100% !important;
        }
    }
`