import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductId } from "../../../products-data"
import CardButton from "./CardButton"
import { Link } from "react-router-dom";
import "./ProductCard"
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"


export default function ProductDetails() {
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {
        setProduct(getProductId(id))
    }, [])

    const handleClick = () => {
        Toastify({
            text: "Producto Añadido al Carrito",
            duration: 2000
            }).showToast()
    }

    return (
        <>
        <div className="cont-card-details">
            <div className="details-card">
                <img src={product.imagen}/>
                <h3>{product.titulo}</h3>                
                <p>{product.descripcion}</p>
                <h4>Reseñas: {product.reseñas}</h4>
                <h4>Fecha de Salida: {product.fecha}</h4>
                <h4>Desarrollador: {product.desarrollador}</h4>
                <h3>${product.precio}.00</h3>
                <div className="btn-card">
                    <Link to={"/"}><CardButton text={"Volver"}/></Link>
                    <CardButton text={"Comprar"} onClick={handleClick}/>
                </div>
            </div>
        </div>
        
        </>
    )
}