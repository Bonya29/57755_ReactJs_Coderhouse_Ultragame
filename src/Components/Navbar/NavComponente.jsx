import "./NavComponente.css"
import BotonComponente from "../Botones/BotonComponente.jsx"
import logo from "../../assets/Ultragame_logo.png"
import cart from "../../assets/cart.png"
import Swal from 'sweetalert2'

export default function NavComponente() {
const handleClick = () => {
    Swal.fire({
        title: "Carrito",
        text: "Aca estara la sección del carrito",
        icon: "info"
    })
}

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
            <div className="carrito">
                <a href="#" onClick={handleClick}>
                    <img src={cart}/>
                    <p className="cant-cart">99</p>
                </a>
            </div>
        </div>
        </>
    )
}