import "./Main.css"
import { useState, useEffect } from "react"
import { getProducts } from "../../../products-data"
import ProductCard from "./ProductCard"

export default function Main() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts.then(data => setProducts(data))
    }, [])

    return (
        <>
        <div>
            <h1>Bienvenido a<br/>Ultra Game</h1>
        </div>
        <section className="products">
            {products.map((product) =>
                <ProductCard imagen={product.imagen} titulo={product.titulo} precio={product.precio}/>)}
        </section>
        </>
    )
}