import React, { useEffect } from "react"
import { useState } from "react"
import { Link, useMatch } from "react-router-dom"
import { Drawer } from '@mui/material'

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
                <button>Projetos</button>
                <Link to="">Contato</Link>
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
                    <button>Projetos</button>
                    <MobileMenuButton 
                        to="/contact"
                        theme={ theme.currentTheme }
                        isSelected={ (match?.pathname === "/contact")? true : false } 
                    >
                        Contato
                    </MobileMenuButton>
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