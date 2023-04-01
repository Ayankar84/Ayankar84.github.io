import { useContext } from "react";
import { Mycontext } from "../context/Mycontext";
import 'boxicons';
const NavBar = () => {
    let { activeclass, setActiveclass } = useContext(Mycontext)

    const handelMenu = () => {
        setActiveclass({ ...activeclass, ...{ nam: !activeclass.nam, menu: !activeclass.menu } })
    }

    return (
        <header className="header">
            <a href="#" className="logo">Portfolio</a>
            <box-icon onClick={handelMenu} name={activeclass.nam ? 'menu' : 'x'} color="white" id="menu-icon"></box-icon>
            <nav className={activeclass.menu ? "active" : "navbar"} id="navbar" >
                <a onClick={() => { setActiveclass({ home: true, about: false, skills: false, projects: false, contact: false, menu: false, nam: true }) }} href="#home" className={activeclass.home ? "active" : ""}>Home</a>
                <a onClick={() => { setActiveclass({ home: false, about: true, skills: false, projects: false, contact: false, menu: false, nam: true }) }} href="#about" className={activeclass.about ? "active" : ""}>About</a>
                <a onClick={() => { setActiveclass({ home: false, about: false, skills: true, projects: false, contact: false, menu: false, nam: true }) }} href="#skills" className={activeclass.skills ? "active" : ""}>Skills</a>
                <a onClick={() => { setActiveclass({ home: false, about: false, skills: false, projects: true, contact: false, menu: false, nam: true }) }} href="#projects" className={activeclass.projects ? "active" : ""}>Projects</a>
                <a onClick={() => { setActiveclass({ home: false, about: false, skills: false, projects: false, contact: true, menu: false, nam: true }) }} href="#contact" className={activeclass.contact ? "active" : ""}>Contact</a>
            </nav>
        </header>
    )
}

export default NavBar;