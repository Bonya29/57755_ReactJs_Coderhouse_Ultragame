import "./Rutas.css"
import ProductsView from "../Contenido/ProductsView";

export default function Juegos() {
    return (
        <>
        <div>
            <h1>Nuestros Juegos</h1>
        </div>
        <ProductsView categoria={"Juegos"}/>
        </>
    )
}