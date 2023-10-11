import './navbar.css';
import '../../assets/styles/colors.scss'
import {FaBars, FaTimes} from "react-icons/fa";
import {useState} from "react";


export default function Navbar(): JSX.Element {

    const [visible, setVisible] = useState<boolean>(false)

    function handleNavbar(): void {
        setVisible(prevState => !prevState);
    }

    return (
        <nav className={"nav"}>
            <img className={"nav_logo"} src="/logo.png" alt=""/>
            <ul className={`nav_links ${visible ? 'shown' : ''}`}>
                <li className={"nav_links-link"} onClick={handleNavbar}><a href="/#home">Strona główna</a></li>
                <li className={"nav_links-link"} onClick={handleNavbar}><a href="/#about">O nas</a></li>
                <li className={"nav_links-link"} onClick={handleNavbar}><a href="/#gallery">Galeria</a></li>
                <li className={"nav_links-link"} onClick={handleNavbar}><a href="/#contact">Kontakt</a></li>
            </ul>
            <button onClick={handleNavbar} className={"nav_button"}>
                {visible ? <FaTimes size={"2em"} style={'nav_button-icon'}/> : <FaBars size={"2em"} style={'nav_button-icon'}/>}
            </button>
        </nav>
    )

}