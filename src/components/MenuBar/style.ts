import styled from "styled-components"
import { css } from "styled-components"
import { shade } from "polished"
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { Switch } from '@mui/material'

import MoonIcon from '../../assets/logos/moon.svg'
import SunIcon from '../../assets/logos/sun.svg'

interface MobileMenuProps{
    theme: string
}

interface MenuProps{
    theme: string
}

interface MobileMenuButtonProps{
    isSelected: boolean
    theme?: string
}

export const Container = styled.div`
    width: 100%;
    max-width: 1700px;
    margin: 0 auto;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div.logo{
        display: flex;
        align-items: center;

        > a{
            font-family: Roboto, sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 3rem;
            line-height: 56px;
            color: #7F08B7;
            margin-right: 5px;

            @media(max-width: 400px){
                font-size: 2.3rem;
            }
        }
    }

    button{
        background: none;
        border: none;
    }

    > button{
        padding: 5px;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        transition: 150ms;
        display: none;

        svg{
            font-size: 2.5rem;
        }

        &:active{
            background-color: ${shade(0.2, "#F9F9F9")};
        }
    }

    @media(max-width: 850px){
        > div{
            display: none;
        }

        > button{
            display: flex
        }
    }
`

export const MenuActions = styled.div<MenuProps>`
    width: 45%;
    min-width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    a, button{
        padding: 5px;
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-size: 1.8rem;
        font-weight: 500;
        color: #940CD3;
        border-radius: 10px;
        transition: 150ms;

        &:hover{
            cursor: pointer;
            background-color: ${ shade(0.1, "#F9F9F9") }
        }

        &:active{
            background-color: ${ shade(0.2, "#F9F9F9") }
        }

        ${ props => props.theme === "light" && css`
            &:hover{
                background-color: ${ shade(0.1, "#F9F9F9") }
            }

            &:active{
                background-color: ${ shade(0.2, "#F9F9F9") }
            }
        `}

        ${ props => props.theme === "dark" && css`
            &:hover{
                background-color: ${ shade(0.1, "#302f2f") }
            }

            &:active{
                background-color: ${ shade(0.2, "#302f2f") }
            }
        `}
    }
`

export const MobileMenu = styled.div<MobileMenuProps>`
    width: 100%;
    height: 100vh;
    background-color: #F9F9F9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    ${ props => props.theme === "light" && css`
        background-color: #F9F9F9;
    `}

    ${ props => props.theme === "dark" && css`
        background-color: #262427;
    `}

    a{
        ${ props => props.theme === "light" && css`
            background-color: #F9F9F9;
        `}

        ${ props => props.theme === "dark" && css`
            background-color: #262427;
        `}
    }

    button{
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-size: 1.8rem;
        font-weight: 500;
        color: #940CD3;
        text-align: center;
        margin: 15px 0px;
        transition: 150ms;

        &:active{
            color: #F9F9F9;
            
            ${ props => props.theme === "light" && css`
                color: #262427;
            `}
            
            ${ props => props.theme === "dark" && css`
                color: #F9F9F9;
            `}
        }
    }
`

export const MobileMenuButton = styled(Link)<MobileMenuButtonProps>`
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-size: 1.8rem;
    margin: 15px 0px;
    font-weight: 500;
    color: #940CD3;
    text-align: center;
    transition: 150ms;

    &:active{
        background-color: ${shade(0.5, "#940CD3")};
        color: #F9F9F9;
    }

    ${ props => props.isSelected && css`
        ${ props => props.theme === "light" && css`
            color: #262427;
        `}
        
        ${ props => props.theme === "dark" && css`
            color: #F9F9F9;
        `}
    `}
`

export const MobileMenuScrollLink = styled(ScrollLink)<{theme: string}>`
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-size: 1.8rem;
    margin: 15px 0px;
    font-weight: 500;
    color: #940CD3;
    text-align: center;
    transition: 150ms;

    &:active{
        background-color: ${shade(0.5, "#940CD3")};
        ${ props => props.theme === "light" && css`
            color: #262427;
        `}
        
        ${ props => props.theme === "dark" && css`
            color: #F9F9F9;
        `}
    }

`

export const ToggleThemeButton = styled(Switch)`
    width: 62px;
    height: 34px;
    padding: 7px;
    margin-top: 5px;

    svg{
        color: red;
    }

    & .MuiSwitch-switchBase {
        margin: 1px;
        padding: 0px;
        transform: translateX(4px);

        &.Mui-checked {
            color: #fff; //cor efeito click checar
            transform: translateX(22px);

            & .MuiSwitch-thumb:before {
                border-radius: 50%;
                background-color: #7F08B7;
                background-image: url(${ SunIcon });
                background-size: 22px 22px;
            }

            & + .MuiSwitch-track {
                opacity: 1;
                background-color: #E3B9F8;
            }
        }
    }

    & .MuiSwitch-thumb {
        background-color: #940CD3;
        width: 32px;
        height: 32px;
        
        &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url(${ MoonIcon });
            background-size: 25px 25px;
        }
    }

    & .MuiSwitch-track {
        opacity: 1;
        background-color: #E3B9F8; //color track desactive (dark mode active)
        border-radius: 20 / 2;
    }

    @media(max-width: 400px){
    }
`