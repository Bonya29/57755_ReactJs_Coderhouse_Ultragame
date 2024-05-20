import "./Navbar.css"
import cart from "../../assets/cart.png"
import { Link } from "react-router-dom"

export default function NavbarCart() {
    return (
        <div className="carrito">
            <Link to={"/Carrito"}>
                <img src={cart}/>
                <p className="cant-cart">99</p>
            </Link>
        </div>
    )
}
