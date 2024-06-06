import "./CartCard.css"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

export default function CartCard({id, imagen, titulo, precio}) {
    const {removeProductCart} = useContext(CartContext)

    return (
        <>
        <div className="cart-card">
            <button onClick={() => removeProductCart(id)}>✖</button>
            <img src={imagen}/>
            <h3>{titulo}</h3>
            <h3 className="precio">${precio}.00</h3>
        </div>
        </>
    )
}