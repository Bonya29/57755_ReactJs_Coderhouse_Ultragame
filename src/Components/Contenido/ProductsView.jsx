import "./ProductsView.css"
import { useState, useEffect } from "react"
import { getProducts } from "../../../products-data"
import ProductCard from "./ProductCard"

export default function ProductsView() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts.then(data => setProducts(data))
    }, [])

    return (
        <>
        <section className="products">
            {products.map((product) =>
                <ProductCard imagen={product.imagen} titulo={product.titulo} precio={product.precio} descripcion={product.descripcion} reseñas={product.reseñas} fecha={product.fecha} desarrollador={product.desarrollador} categoria={product.categoria} id={product.id}/>)}
        </section>
        </>
    )
}