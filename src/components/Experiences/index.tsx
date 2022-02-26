import React from "react"
import { useEffect, useState } from 'react'

import TVImageDark from '../../assets/images/TV_PNG_DARK.png'
import TVImageLIGHT from '../../assets/images/TV_PNG_LIGHT.png'
import { FaTrophy } from "react-icons/fa"
import { useTheme } from "../../hooks/themeContext"

import { ExperiencesTelevision, ExperienceList } from './style'

interface Props{
    habilities: Array<Hability>
}

export interface Hability {
    name: string,
    level: number
}

const Experiences: React.FC<Props> = ({ habilities }: Props) => {

    const { currentTheme } = useTheme()

    const [myHabilities, setMyHabilities] = useState<Array<Hability>>([])

    useEffect(() => {
        console.log(habilities)
        setMyHabilities(habilities)
    },[habilities])

    return (
        <ExperiencesTelevision>
            <img src={ currentTheme === "dark" ? TVImageLIGHT : TVImageDark } alt="tv"/>
            <div className="experiences-list">
                {
                    myHabilities.map((hability, index) => {
                        
                        const levels: Array<any> = []
                        let aux: number = 1

                        while(aux <= 5){
                            if(aux <= hability.level){
                                levels.push(<FaTrophy color="#daa520" />)
                            }else {
                                levels.push(<FaTrophy />)
                            }
                            aux = aux + 1
                        }

                        console.log(levels)

                        return (
                            <ExperienceList key={ index }>
                                <p>{ hability.name }</p>
                                <div>
                                    { levels.map(level => (level)) }
                                </div>
                            </ExperienceList>
                        )
                    })
                }
            </div>
        </ExperiencesTelevision>
    )
} 

export default Experiences