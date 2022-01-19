import React from "react"
import { Link } from "react-router-dom"

import { Container, MenuActions } from "./style"
import { useTheme } from "../../hooks/themeContext"

const MenuBar: React.FC = () => {
    const theme = useTheme()
    
    return(
        <Container>
            <Link to="/">Portifólio</Link>
            <button onClick={() => theme.changeTheme((theme.currentTheme === "light")? "dark" : "light")}>{ theme.currentTheme }</button>
            <MenuActions>
                <Link to="">Sobre Mim</Link>
                <Link to="">Projetos</Link>
                <Link to="">Contato</Link>
                <Link to="">Skills</Link>
            </MenuActions>
        </Container>
    )
}

export default MenuBar