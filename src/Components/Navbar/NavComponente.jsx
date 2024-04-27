import "./NavComponente.css"
import logo from "../../assets/Ultragame_logo.png"
import BotonComponente from "../Botones/BotonComponente.jsx"
import CarritoComponente from "./CarritoComponente.jsx"

export default function NavComponente() {
    return (
        <>
        <div className="navbar">
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="botones">
                <BotonComponente text="Inicio" desc="Esta sera la sección Inicio"/>
                <BotonComponente text="Juegos" desc="Aca estara la sección de los Juegos"/>
                <BotonComponente text="Tarjetas de Regalo" desc="Aca estara la sección de las Tarjetas de Regalo"/>
                <BotonComponente text="Codigos Random" desc="Aca estara la sección de los Codigos Random"/>
                <BotonComponente text="Soporte" desc="Aca estara la sección de Soporte"/>
            </div>
            <CarritoComponente/>
        </div>
        </>
    )
}