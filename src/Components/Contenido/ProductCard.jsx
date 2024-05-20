import CardButton from "./CardButton"
import "./ProductCard.css"
import { Link } from "react-router-dom"

export default function ProductCard({imagen, titulo, precio, categoria, id}) {
    return (
        <>
        <div className="product-card">
            <img src={imagen}/>
            <h2>{titulo}</h2>
            <h2>${precio}.00</h2>
            <div className="btn-card">
                <Link to={`/${categoria}/${id}`}><CardButton text={"Detalles"}/></Link>
                <CardButton text={"Comprar"}/>
            </div>
        </div>
        </>
    )
}