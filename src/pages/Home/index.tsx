import React from "react"
import { useTheme } from "../../hooks/themeContext"

import ContactCard from "../../components/ConstactCard"

import HomeImg from '../../assets/images/home.png'

import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

import {
    Container,
    Welcome,
    InfoWelcome,
    Resume
} from './style'

const Home: React.FC = () => {

    const { currentTheme } = useTheme()

    return(
        <Container theme={ currentTheme }>
            <Welcome>
                <InfoWelcome theme={ currentTheme }>
                    <h1>Olá tudo bem?</h1>
                    <p>Me chamo Marcos e nesse site você vai conhecer um pouco mais sobre mim. Venha navegar e se aventurar neste portifólio.</p>
                    <div>
                        <a href="/files/Currículo_Final.pdf" download>Download CV</a>
                        <button>Entrar em contato</button>
                    </div>
                </InfoWelcome>
                <img src={ HomeImg } alt="home"/>
                <p>Desenvolvedor Full Stack React e NodeJs</p>
            </Welcome>
            <Resume>
                <h1>Resumo</h1>
                <div className="info">
                    <p>Fascinado pela tecnologia me familiarizei com a área de programação, 
                    visando ser um facilitador de processos e na resolução de problemas. 
                    Buscando desenvolver soluções que ajudem a tornar uma página web mais dinâmicas e 
                    funcionais sempre buscando aprimorar meus conhecimentos e aprender coisas novas 
                    na área para concretizar às novas ideias.</p>
                </div>
                <div className="contacts">
                    <ContactCard 
                        icon={ BsGithub }
                        name="Github"
                        info="Marcos Moreira"
                        link="https://github.com/MarcosPotato"
                    />
                </div>
            </Resume>
        </Container>
    )
}

export default Home