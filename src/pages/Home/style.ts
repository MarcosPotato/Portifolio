import styled from 'styled-components'
import { css } from 'styled-components'
import { shade } from 'polished'

interface ThemeProps {
    theme: string
}

interface ProjectsCardProps{
    bgImage: string
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
       width: 40%;
       height: 600px;
       min-width: 400px;
       margin-top: -100px;
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

        img{
            height: 40vh;
            margin-top: 0px;
        }
    }

    @media(max-width: 982px){
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
            //min-width: 160px;
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
            display: flex;
            justify-content: center;
            align-items: center;
        
            &:first-child{
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

            &:last-child{
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
    margin-bottom: 40px;
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
        margin-bottom: 30px;
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

    div.contacts{
        width: 85%;
        height: auto;
        padding: 15px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
`

export const Projects = styled.div<ThemeProps>`
    width: 100%;
    max-width: 1600px;
    margin: 0px auto;
    margin-bottom: 20px;
    padding-top: 80px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: relative;

    > h1{
        font-family: Roboto;
        font-weight: bold;
        font-size: 48px;
        line-height: 56px;
        color: #940CD3;
        margin-bottom: 25px;
        position: absolute;
        top: -5px;
        margin: 0 auto;
    }

    > div{
        box-shadow: 5px 5px 5px ${props => props.theme === "light" ? "#b0b0b0" : "#0a0a0a"};
    }
`

export const ProjectsCard = styled.div<ProjectsCardProps>`
    background-image: url(${props => props.bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 30%;
    height: 275px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 25px;

    > div{
        position: relative;
        background-color: black;
        border-radius: 0px 0px 7px 7px;
        height: 60px;
        padding: 10px;
        transition: 250ms;
        overflow: hidden;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%,rgba(0,0,0,0.87718837535014) 50%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%);
        
        h1, p{
            color: #f9f9f9;
        }

        p{
            display: none;
            transition: 100ms
        }

        div{
            width: 100%;
            flex-direction: row;
            justify-content: flex-end;
            display: none;
        }

        a{
            color: #940cd3;
            text-decoration: none;
        }
    }

    &:hover{
        cursor: pointer;

        > div{
            height: 150px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.87718837535014) 65%, rgba(0,0,0,0) 100%);

            p, div{
                display: flex;
            }
        }
    }

    @media(max-width: 1050px){
        width: 45%;
    }
    @media(max-width: 800px){
        width: 90%;
    }
`

export const Services = styled.div`
    width: 100%;
    max-width: 1600px;
    margin: 0px auto;
    margin-bottom: 20px;
    margin-top: 80px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: relative;

    > h1{
        font-family: Roboto;
        font-weight: bold;
        font-size: 48px;
        line-height: 56px;
        color: #940CD3;
        margin-bottom: 25px;
        position: absolute;
        top: -80px;
        margin: 0 auto;
    }
`

export const ServicesCard = styled.div`
    width: 30%;
    height: 275px;
    border: 1px solid #940CD3;
    border-bottom-width: 7px;
    transition: 250ms;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    background-color: #FFFFFF00;
    margin-bottom: 25px;

    svg{
        position: absolute;
        top: 35px;
        right: 35px;
        width: 80px;
        height: 80px;
        color: #940CD3;
    }

    h1{
        color: #940CD3;
        width: 70%;
        font-family: Roboto;
        font-weight: bold;
        font-size: 40px;
        line-height: 56px;
        display: flex;
        align-items: center;
        margin: 15px;

        @media(max-width: 340px){
            font-size: 30px;
        }
    }

    &:hover{
        cursor: default;
        border-bottom-width: 15px;
    }

    @media(max-width: 1300px){
        width: 45%;
    }
    @media(max-width: 800px){
        width: 90%;
    }
`

export const Skills = styled.div`
    width: 100%;
    max-width: 1600px;
    margin: 0px auto;
    margin-bottom: 20px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;

    > h1{
        font-family: Roboto;
        font-weight: bold;
        font-size: 48px;
        line-height: 56px;
        color: #940CD3;
        margin-bottom: -100px;
    }

    @media(min-width: 750px){
        > div{
            margin: 0px !important;
        }
    }

    @media(max-width: 750px){
        margin-top: 80px;

        > h1{
            margin-bottom: 25px;
            position: absolute;
            top: -80px;
            margin: 0 auto;
        }
    }
`

export const Footer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 3px 0px;
    background-color: #940CD3;

    p{
        color: #fff;
        font-family: Roboto-Bold, sans-serif;
        font-weight: 600;
    }
`