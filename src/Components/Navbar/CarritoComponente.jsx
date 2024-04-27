import "./NavComponente.css"
import cart from "../../assets/cart.png"
import Swal from 'sweetalert2'

export default function CarritoComponente() {
    const handleClick = () => {
        Swal.fire({
            title: "Carrito",
            text: "Aca estara la sección del carrito",
            icon: "info"
        })
    }

    return (
        <div className="carrito">
            <a href="#" onClick={handleClick}>
                <img src={cart}/>
                <p className="cant-cart">99</p>
            </a>
        </div>
    )
}
