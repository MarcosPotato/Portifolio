import React, { useState } from "react"
import { useTheme } from "../../hooks/themeContext"
import { Link as ScrollLink } from 'react-scroll'

import ContactCard from "../../components/ConstactCard"
import Experiences from "../../components/Experiences"

import HomeImg from '../../assets/images/home-image.svg'

import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { CgWebsite } from 'react-icons/cg'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { GrAndroid } from 'react-icons/gr'
import { Hability } from "../../components/Experiences"

import {
    Container,
    Welcome,
    InfoWelcome,
    Resume,
    Projects,
    ProjectsCard,
    Services,
    ServicesCard,
    Skills,
    Footer
} from './style'

interface ProjectsData{
    name: string
    description: string
    link: string
    image: string
}

const Home: React.FC = () => {

    const { currentTheme } = useTheme()

    const [projectsData] = useState<Array<ProjectsData>>(JSON.parse(JSON.stringify(require("../../data/repositories.json"))))
    const [skillsData]   = useState<Array<Hability>>(JSON.parse(JSON.stringify(require("../../data/Profile.json"))).data.habilities || [])

    console.log(JSON.parse(JSON.stringify(require("../../data/Profile.json"))).data.habilities)

    return(
        <>
        <Container theme={ currentTheme }>
            <Welcome>
                <InfoWelcome theme={ currentTheme }>
                    <h1>Olá tudo bem?</h1>
                    <p>Me chamo Marcos e nesse site você vai conhecer um pouco mais sobre mim. Venha navegar e se aventurar neste portifólio.</p>
                    <div>
                        <a href="/files/Currículo_Final.pdf" download>Download CV</a>
                        <a href="https://api.whatsapp.com/send?phone=5511964972517" target="_blank" rel="noreferrer">
                            Entrar em contato
                        </a>
                    </div>
                </InfoWelcome>
                <img src={ HomeImg } alt="home"/>
            </Welcome>
            <Resume id="contacts">
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
            <Projects id="projects" theme={ currentTheme }>
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
                                <a href={ project.link } target="_blank" rel="noreferrer">Veja mais...</a>
                            </div>
                        </div>
                    </ProjectsCard>
                ))}
            </Projects>
            <Services>
                <h1>Serviços</h1>
                <ServicesCard>
                    <h1>Criação de Sites</h1>
                    <CgWebsite />
                </ServicesCard>
                <ServicesCard>
                    <h1>Desenvolvedor React</h1>
                    <FaReact />
                </ServicesCard>
                <ServicesCard>
                    <h1>Desenvolvedor Nodejs</h1>
                    <FaNodeJs />
                </ServicesCard>
                <ServicesCard>
                    <h1>Desenvolvedor Mobile</h1>
                    <GrAndroid />
                </ServicesCard>
            </Services>
            <Skills>
                <h1>Skills</h1>
                <Experiences habilities={ skillsData } />
            </Skills>
        </Container>
        <Footer>
            <p>Desenvolvido por Marcos Moreira</p>
        </Footer>
        </>
    )
}

export default Home