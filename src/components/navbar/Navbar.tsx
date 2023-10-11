import './navbar.css';

export default function Navbar(): JSX.Element {

    return (
        <nav className={"nav"}>
            <img className={"nav_logo"} src="/logo.png" alt=""/>
            <ul className={"nav_links"}>
                <li className={"nav_links-link"}><a href="/#home">Strona główna</a></li>
                <li className={"nav_links-link"}><a href="/#about">O nas</a></li>
                <li className={"nav_links-link"}><a href="/#gallery">Galeria</a></li>
                <li className={"nav_links-link"}><a href="/#contact">Kontakt</a></li>
            </ul>
        </nav>
    )

}