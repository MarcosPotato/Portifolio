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
    }

    a{
        text-decoration: none;
    }
`