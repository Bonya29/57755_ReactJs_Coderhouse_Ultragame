import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../Firebase/firebase";
import CardButton from "./CardButton"
import { Link } from "react-router-dom";
import "./ProductCard"
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext"

export default function ProductDetails() {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    const {addCart} = useContext(CartContext)

    useEffect(() => {
        getProductById(id).then(data => {setProduct(data)})
    }, [id])

    const handleClick = () => {
        const productToAdd = { imagen: product.imagen, titulo: product.titulo, precio: product.precio, categoria: product.categoria, id: product.id }
        addCart(productToAdd)
    }

    return (
        <>
        <div className="cont-card-details">
            <div className="details-card">
                <img src={product.imagen}/>
                <h3>{product.titulo}</h3>                
                <p>{product.descripcion}</p>
                <h4>Reseñas: {product.reseñas}</h4>
                <h4>Fecha de Lanzamiento: {product.fecha}</h4>
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