import "./Navbar.css"
import cart from "../../assets/cart.png"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

export default function NavbarCart() {
    const {acumulador} = useContext(CartContext)
    return (
        <div className="carrito">
            <Link to={"/Carrito"}>
                <img src={cart}/>
                <p className="cant-cart">{acumulador}</p>
            </Link>
        </div>
    )
}
