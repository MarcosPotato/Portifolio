import React from "react"
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from "../pages/Home"
import AboutMe from "../pages/AboutMe"

const AppRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/about" element={ <AboutMe/> }/>
        <Route path="/skills" element={ <AboutMe/> }/>
        <Route path="*" element={ <Navigate to="/" /> }/>
    </Routes>
)

export default AppRoutes