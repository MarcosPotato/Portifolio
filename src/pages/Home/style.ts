import styled from 'styled-components'
import { css } from 'styled-components'
import { shade } from 'polished'

interface ThemeProps {
    theme: string
}

export const Container = styled.div<ThemeProps>`
    width: 100%;
    max-width: 1650px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        color: #000000;

        ${ props => props.theme === "light" && css`
            color: #000000;
        `}

        ${ props => props.theme === "dark" && css`
            color: #f9f9f9;
        `}
    }
`

export const Welcome = styled.div`
    width: 100%;
    max-width: 1650px;
    height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20vh 0px;
    position: relative;

    img{
       width: 32%;
       min-width: 400px;
    }

    > p {
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        position: absolute;
        right: 180px;
        bottom: -25px;
    }

    @media(max-width: 980px){
        height: auto;
        margin-top: 0px;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: space-between;

        h1, p{
            text-align: center;
        }

        > p{
            display: none
        }
    }

    @media(max-width: 500px){
        margin-bottom: 8vh;
    }
`

export const InfoWelcome = styled.div<ThemeProps>`
    width: 100%;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    h1{
        width: 100%;
        font-family: Roboto;
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 56px;
        color: #7F08B7;
    }

    p{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 42px;
    }

    div{
        width: 100%;
        display: flex;
        justify-content: space-between;

        button, a{
            width: 48%;
            min-width: 160px;
            height: 66px;
            border-radius: 5px;
            font-family: Roboto, sans-serif;
            font-size: 24px;
            line-height: 28px;
            font-style: normal;
            transition: 150ms;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        a{
            background: #940CD3;
            font-weight: normal;
            color: #FFFFFF;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
    
            &:hover{
                background-color: ${ shade(0.2, "#940CD3")};
            }
    
            &:active{
                background-color: ${ shade(0.3, "#940CD3")};
            }
        }

        button{
            font-weight: 600;
            color: #940CD3;
            
            &:hover{
                border: 2px solid #7F08B7;
                border-radius: 10px 100px 10px 100px;
                color: ${ shade(0.2, "#940CD3")};
            }

            &:active{
                border: 2px solid #7F08B7;
                border-radius: 10px;
                color: ${ shade(0.3, "#940CD3")};
                background-color: ${ shade(0.1, "#f9f9f9")};

                ${ props => props.theme === "light" && css`
                    color: ${ shade(0.3, "#940CD3")};
                    background-color: ${ shade(0.1, "#f9f9f9")};
                `}

                ${ props => props.theme === "dark" && css`
                    color: ${ shade(0.1, "#940CD3")};
                    background-color: ${ shade(0.9, "#f9f9f9")};
                `}
            }
        }

    }

    @media(max-width: 980px){
        padding: 10px;

        p{
            font-size: 25px;
        }

        h1{
            margin-bottom: 5px;
        }

        div{
            margin-top: 25px;

            button:last-child{
                font-size: 16px;
            }
        }
    }
`

export const Resume = styled.div`
    width: 100%;
    max-width: 1650px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    > h1{
        font-family: Roboto;
        font-weight: bold;
        font-size: 48px;
        line-height: 56px;
        color: #940CD3;
        margin-bottom: 25px;
    }

    div.info{
        width: 85%;
        height: auto;
        padding: 15px;
        border: 5px solid #7F08B7;
        box-sizing: border-box;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        p{
            font-family: Roboto;
            font-size: 36px;
            line-height: 42px;
            text-align: center;

            @media(max-width: 600px){
                font-size: 25px;
            }

            @media(max-width: 500px){
                text-align: justify;
                font-size: 20px;
            }
        }
    }
`