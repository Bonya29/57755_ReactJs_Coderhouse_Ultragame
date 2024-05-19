import "./Navbar.css"
import logo from "../../assets/logo.png"
import NavbarButton from "./NavbarButton.jsx"
import NavbarCart from "./NavbarCart.jsx"

export default function Navbar() {
    return (
        <>
        <div className="navbar">
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="btn-nav">
                <NavbarButton text="Inicio" desc="Esta sera la sección Inicio"/>
                <NavbarButton text="Juegos" desc="Aca estara la sección de los Juegos"/>
                <NavbarButton text="Tarjetas de Regalo" desc="Aca estara la sección de las Tarjetas de Regalo"/>
                <NavbarButton text="Codigos Random" desc="Aca estara la sección de los Codigos Random"/>
                <NavbarButton text="Soporte" desc="Aca estara la sección de Soporte"/>
            </div>
            <NavbarCart/>
        </div>
        </>
    )
}