import styled from "styled-components"

export const Container = styled.div`
    width: auto;
    height: 155px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;

    a{
        width: 85px;
        height: 85px;
        background-color: #940CD3;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 150ms;
        position: absolute;
        top: 5px;

        svg{
            width: 100%;
            height: 100%;
            transition: 150ms;
        }

        &:hover{
            width: 90px;
            height: 90px;
            margin-top: -2px;
        }

        &:active{
            margin-top: -4px;
            width: 95px;
            height: 95px;
        }
    }

    h1{
        font-family: Roboto, sans-serif;
        font-weight: 600;
        font-size: 26px;
    }

    p{
        font-family: Roboto, sans-serif;
        font-size: 20px;
    }
`