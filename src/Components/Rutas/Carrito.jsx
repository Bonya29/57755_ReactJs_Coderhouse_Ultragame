import "./Rutas.css"
import CardButton from "../Contenido/CardButton"
import Swal from "sweetalert2"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import CartCard from "../Contenido/CartCard"

export default function Carrito() {
    const {products, total} = useContext(CartContext)

    const handleClick = () => {
        const comFullname = document.getElementById("com-fullname").value
        const comEmail = document.getElementById("com-email").value
        const comReEmail = document.getElementById("com-re-email").value
        const comCountry = document.getElementById("com-country").value
        const comURL = document.getElementById("com-url").value
        const comCardNumber = document.getElementById("com-card-number").value
        const comCardOwner = document.getElementById("com-card-owner").value
        const comCardExp = document.getElementById("com-card-exp").value
        const comCardCode = document.getElementById("com-card-code").value
        if(!comFullname || !comEmail || !comReEmail || !comCountry || !comURL || !comCardNumber || !comCardOwner || !comCardExp || !comCardCode) {
            Swal.fire({
                title: "Faltan Datos.",
                text: "Completa todos los campos obligatorios",
                icon: "warning"
            })
        } else if (comEmail !== comReEmail) {
            Swal.fire({
                title: "El Mail no Coincide.",
                text: "Corrobora que el mail ingresado sea el mismo cuando lo repites",
                icon: "error"
            })
        } else if (products.length === 0) {
            Swal.fire({
                title: "El Carrito Esta Vacio",
                text: "Añade al menos un producto para generar la orden",
                icon: "error"
            })
        } else {
            Swal.fire({
                title: "Orden Generada Exitosamente",
                text: "En las proximas 72hs estaras recibiendo el codigo de tus productos por el email indicado. Guarda el ID de la orden por si experimentas problemas en el futuro. ID:",
                icon: "success"
            })
            .then(() => {
                location.reload()
            })
        }
    }

    return (
        <>
        <h1>Carrito</h1>
        <div className="cart">
            <h3>Productos en el carrito</h3>
            <div className="cart-content">
            {products.map((product) =>
                <CartCard id={product.id} imagen={product.imagen} titulo={product.titulo} precio={product.precio} key={product.id}/>)}
            </div>
            <h3>Total del carrito: ${total}.00</h3>
        </div>
        
        <div className="form">
            <h3>Datos para el envio de codigos:</h3>
            <div className="form-cont">
                <div className="inp-group">
                    <label>Nombre y Apellido</label>
                    <input type="text" id="com-fullname"/>
                </div>
                <div className="inp-group">
                    <label>Telefono (Opcional)</label>
                    <input type="number"/>
                </div>
                <div className="inp-group">
                    <label>Email</label>
                    <input type="Email" id="com-email"/>
                </div>
                <div className="inp-group">
                    <label>Confirmar Email</label>
                    <input type="Email" id="com-re-email"/>
                </div>
                <div className="inp-group">
                    <label>País de la cuenta de Steam</label>
                    <input type="text" id="com-country"/>
                </div>
                <div className="inp-group">
                    <label>URL de la cuenta de Steam</label>
                    <input type="text" id="com-url"/>
                </div>
            </div>

            <h3>Metodo de pago:</h3>
            <div className="form-cont">
                <div className="inp-group">
                    <label>Numero de la tarjeta</label>
                    <input type="number" id="com-card-number"/>
                </div>
                <div className="inp-group">
                    <label>Titular de la tarjeta</label>
                    <input type="text" id="com-card-owner"/>
                </div>
                <div className="inp-group">
                    <label>Fecha de expiración</label>
                    <input type="date" id="com-card-exp"/>
                </div>
                <div className="inp-group">
                    <label>Codigo de seguridad</label>
                    <input type="number" id="com-card-code"/>
                </div>
            </div>

            <div className="btn-card">
                <CardButton text={"Pagar y Generar Orden"} onClick={handleClick}/>
            </div>
        </div>
        </>
    )
}