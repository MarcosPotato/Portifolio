import React from "react"
import { useState } from "react"
import { Link, useMatch } from "react-router-dom"
import { Drawer } from '@mui/material'

import { useTheme } from "../../hooks/themeContext"
import { FiMenu } from 'react-icons/fi'
import { BsMoonStars, BsSun } from 'react-icons/bs'

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
                    <MobileMenuButton isSelected={ (match?.pathname === "/about")? true : false } to="">Sobre Mim</MobileMenuButton>
                    <button>Projetos</button>
                    <button>Contato</button>
                    <MobileMenuButton isSelected={ (match?.pathname === "/skills")? true : false } to="">Skills</MobileMenuButton>
                </MobileMenu>
            </Drawer>
        </Container>
    )
}

export default MenuBar