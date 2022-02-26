import React, { useCallback } from 'react'
import { IconType } from 'react-icons';

import {
    Container
} from './style'

interface ContactCardProps{
    icon: IconType
    link: string
    name: string
    info: string
    theme?: "dark" | "light" | string
}

const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, link, name, info, theme }) => {

    const verifyTheme = useCallback((): string => {
        switch(theme){
            case "light":
                return "#262427"
            case "dark":
                return "#F9F9F9"
            default:
                return "#262427"
        }
    },[theme])

    return(
        <Container>
            <a href={ link } target='_blank' rel="noreferrer">
                <Icon color={ verifyTheme() }/>
            </a>
            <h1>{ name }</h1>
            <p>{ info }</p>
        </Container>
    )
}

export default ContactCard