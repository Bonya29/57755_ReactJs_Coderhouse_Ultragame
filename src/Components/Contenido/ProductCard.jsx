import CardButton from "./CardButton"
import "./ProductCard.css"
import { Link } from "react-router-dom"
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export default function ProductCard({imagen, titulo, precio, categoria, id}) {
    const handleClick = () => {
        Toastify({
            text: "Producto Añadido al Carrito",
            duration: 2000
            }).showToast()
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