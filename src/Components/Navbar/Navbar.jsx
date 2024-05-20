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
                <NavbarButton linkto="/" text="Inicio"/>
                <NavbarButton linkto="/Juegos" text="Juegos"/>
                <NavbarButton linkto="/GiftCard" text="Tarjetas de Regalo"/>
                <NavbarButton linkto="/RandomKeys" text="Codigos Random"/>
                <NavbarButton linkto="/Soporte" text="Soporte"/>
            </div>
            <NavbarCart/>
        </div>
        </>
    )
}