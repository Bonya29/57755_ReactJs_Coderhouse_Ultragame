import { useContext } from "react"
import CardButton from "./CardButton"
import "./ProductCard.css"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"

export default function ProductCard({imagen, titulo, precio, categoria, id}) {
    const {addCart} = useContext(CartContext)

    const handleClick = () => {
        const productToAdd = { imagen, titulo, precio, categoria, id }
        addCart(productToAdd)
    }

    return (
        <>
        <div className="product-card">
            <img src={imagen}/>
            <h2>{titulo}</h2>
            <h2>${precio}.00</h2>
            <div className="btn-card">
                <Link to={`/${categoria}/${id}`}><CardButton text={"Detalles"}/></Link>
                <CardButton text={"Comprar"} onClick={handleClick}/>
            </div>
        </div>
        </>
    )
}