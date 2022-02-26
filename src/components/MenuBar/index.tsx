import React, { useEffect } from "react"
import { useState } from "react"
import { Link, useMatch } from "react-router-dom"
import { Drawer } from '@mui/material'
import { Link as ScrollLink } from 'react-scroll'

import { useTheme } from "../../hooks/themeContext"
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
 
import { 
    Container, 
    MenuActions,
    MobileMenu,
    MobileMenuButton,
    ToggleThemeButton
} from "./style"

const MenuBar: React.FC = () => {
    const theme = useTheme()
    const match = useMatch("/*")

    const [openMenu, setOpenMenu] = useState<boolean>(false)

    useEffect(() => {
        setOpenMenu(false)
    },[match?.pathname])

    return(
        <Container>
            <div className="logo">
                <Link to="/">Portifólio</Link>
                <ToggleThemeButton 
                    checked={theme.currentTheme === "light" ? true : false }
                    onClick={() => theme.changeTheme((theme.currentTheme === "light")? "dark" : "light")}
                />
            </div>
            <MenuActions theme={ theme.currentTheme }>
                <Link to="/about">Sobre Mim</Link>
                <ScrollLink to="projects" spy smooth>Projetos</ScrollLink>
                <ScrollLink to="contacts" spy smooth>Contato</ScrollLink>
                <Link to="">Skills</Link>
            </MenuActions>
            <button onClick={() => setOpenMenu(true)}>
                <FiMenu style={{ color: "#7F08B7"}}/>
            </button>
            <Drawer
                open={ openMenu }
                anchor="right"
                onClose={() => setOpenMenu(false)}
            >
                <MobileMenu theme={ theme.currentTheme }>
                    <button onClick={() => setOpenMenu(false)}><AiOutlineClose/></button>
                    <MobileMenuButton 
                        to="/"
                        theme={ theme.currentTheme }
                        isSelected={ (match?.pathname === "/")? true : false } 
                    >
                        Home
                    </MobileMenuButton>
                    <MobileMenuButton 
                        to="/about"
                        theme={ theme.currentTheme }
                        isSelected={ (match?.pathname === "/about")? true : false } 
                    >
                        Sobre Mim
                    </MobileMenuButton>
                    {/* <MobileMenuScrollLink theme={ theme.currentTheme } to="projects" spy smooth>Projetos</MobileMenuScrollLink>
                    <MobileMenuScrollLink theme={ theme.currentTheme } to="contacts" spy smooth>Contato</MobileMenuScrollLink> */}
                    <MobileMenuButton 
                        to="/skills"
                        theme={ theme.currentTheme }
                        isSelected={ (match?.pathname === "/skills")? true : false } 
                    >
                        Skills
                    </MobileMenuButton>
                </MobileMenu>
            </Drawer>
        </Container>
    )
}

export default MenuBar