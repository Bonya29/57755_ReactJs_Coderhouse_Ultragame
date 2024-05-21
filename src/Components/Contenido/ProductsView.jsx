import "./ProductsView.css"
import { useState, useEffect } from "react"
import { getProducts, getProductByCategory } from "../../../products-data"
import ProductCard from "./ProductCard"

export default function ProductsView({categoria}) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        if (categoria) {
            setProducts(getProductByCategory(categoria))
        } else {
            getProducts.then(data => setProducts(data))
        }
    }, [categoria])

    return (
        <>
        <section className="products">
            {products.map((product) =>
                <ProductCard imagen={product.imagen} titulo={product.titulo} precio={product.precio} descripcion={product.descripcion} reseñas={product.reseñas} fecha={product.fecha} desarrollador={product.desarrollador} categoria={product.categoria} id={product.id} key={product.id}/>)}
        </section>
        </>
    )
}