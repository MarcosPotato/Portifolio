import React from 'react'
import { IconType } from 'react-icons';

import {
    Container
} from './style'

interface ContactCardProps{
    icon: IconType
    link: string
    name: string
    info: string
}

const ContactCard: React.FC<ContactCardProps> = () => {
    return(
        <Container>
        </Container>
    )
}

export default ContactCard