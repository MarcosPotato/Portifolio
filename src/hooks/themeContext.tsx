import React from 'react'
import { useCallback, useState, useContext } from 'react'
import { createContext } from 'react'

import GlobalStyles from '../themes/globalStyles'

interface ThemeData{
    currentTheme: "light" | "dark" | string
    changeTheme(type: "light" | "dark"): void
}

const ThemeContext = createContext<ThemeData>({} as ThemeData)

export const ThemeProvider: React.FC = ({ children }) => {

    const [currentTheme, setCurrentTheme] = useState<"light" | "dark" | string>(() => {
        const theme = localStorage.getItem("@PortifolioMM:theme")

        if(theme){
            return theme
        } else{
            const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

            if (darkThemeMq.matches) {
                localStorage.setItem("@PortifolioMM:theme", "dark")
                return "dark"
            } else {
                localStorage.setItem("@PortifolioMM:theme", "light")
                return "light"
            }
        }
    })

    const changeTheme = useCallback((type: "light" | "dark") => {
        localStorage.setItem("@PortifolioMM:theme", type)
        setCurrentTheme(type)
    },[])

    return(
        <ThemeContext.Provider value={{ currentTheme: currentTheme, changeTheme }}>
            <GlobalStyles appTheme={currentTheme} />
            { children }
        </ThemeContext.Provider>
    )
}

export const useTheme = (): ThemeData => {
    const context = useContext(ThemeContext)

    if(!context) { throw new Error("Theme Context must be used inside Theme Provider") }

    return context
}