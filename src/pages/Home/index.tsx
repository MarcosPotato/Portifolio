import React, { useState } from "react"
import { useTheme } from "../../hooks/themeContext"

import ContactCard from "../../components/ConstactCard"

import HomeImg from '../../assets/images/home-image.svg'

import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import TesteImage from '../../assets/images/teste.png'

import {
    Container,
    Welcome,
    InfoWelcome,
    Resume,
    Projects,
    ProjectsCard
} from './style'

interface ProjectsData{
    name: string
    description: string
    link: string
    image: string
}

const Home: React.FC = () => {

    const { currentTheme } = useTheme()

    const [projectsData,] = useState<Array<ProjectsData>>(JSON.parse(JSON.stringify(require("../../data/repositories.json"))))

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
                        theme={ currentTheme }
                    />
                    <ContactCard 
                        icon={ MdEmail}
                        name="Email"
                        info="marquinhos2725@hotmail.com"
                        link={`mailto:marquinhos2725@hotmail.com?subject=Email%20para%20contato`}
                        theme={ currentTheme }
                    />
                    <ContactCard 
                        icon={ BsLinkedin }
                        name="Linkedin"
                        info="Marcos Moreira"
                        link="https://www.linkedin.com/in/moreira-dev/"
                        theme={ currentTheme }
                    />
                </div>
            </Resume>
            <Projects theme={ currentTheme }>
                <h1>Projetos</h1>
                { projectsData.map((project, index) => (
                    <ProjectsCard
                        key={ index } 
                        bgImage={ project.image }
                    >
                        <div>
                            <h1>{ project.name }</h1>
                            <p>{ project.description }</p>
                            <div>
                                <a href={ project.link } target="_blank" rel="porjectlink">Veja mais...</a>
                            </div>
                        </div>
                    </ProjectsCard>
                ))}
            </Projects>
        </Container>
    )
}

export default Home