import "./Rutas.css"
import CardButton from "../Contenido/CardButton"
import Swal from "sweetalert2"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import CartCard from "../Contenido/CartCard"

export default function Carrito() {
    const {products, total} = useContext(CartContext)

    const handleClick = () => {
        Swal.fire({
            title: "Orden Generada Exitosamente",
            text: "En las proximas 72hs estaras recibiendo el codigo de tus productos por el email indicado. Guarda el ID de la orden por si experimentas problemas en el futuro. ID:",
            icon: "success"
        })
        .then(() => {
            location.reload()
        })
    }

    return (
        <>
        <h1>Carrito</h1>
        <div className="cart">
            <h3>Productos en el carrito</h3>
            <div className="cart-content">
            {products.map((product) =>
                <CartCard imagen={product.imagen} titulo={product.titulo} precio={product.precio} key={product.id}/>)}
            </div>
            <h3>Total del carrito: ${total}.00</h3>
        </div>
        
        <div className="form">
            <h3>Datos para el envio de codigos:</h3>
            <div className="datos-envio">
                <div className="inp-group">
                    <label>País de la cuenta de Steam</label>
                    <input type="text"/>
                </div>
                <div className="inp-group">
                    <label>Email</label>
                    <input type="Email"/>
                </div>
            </div>

            <h3>Metodo de pago:</h3>
            <div className="met-pago">
                <div className="inp-group">
                    <label>Numero de la tarjeta</label>
                    <input type="number"/>
                </div>
                <div className="inp-group">
                    <label>Titular de la tarjeta</label>
                    <input type="text"/>
                </div>
                <div className="inp-group">
                    <label>Fecha de expiración</label>
                    <input type="date"/>
                </div>
                <div className="inp-group">
                    <label>Codigo de seguridad</label>
                    <input type="number"/>
                </div>
            </div>

            <div className="btn-card">
                <CardButton text={"Generar Orden"} onClick={handleClick}/>
            </div>
        </div>
        </>
    )
}