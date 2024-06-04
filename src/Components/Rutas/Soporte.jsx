import CardButton from "../Contenido/CardButton"
import "./Rutas.css"
import "../Contenido/ProductCard.css"
import Swal from "sweetalert2"

export default function Soporte() {
    const handleClick = () => {
        Swal.fire({
            title: "Solicitud Enviada",
            text: "En los proximos 7 dias te estaremos respondiendo al mail indicado. Nos vemos 👋",
            icon: "success"
        })
        .then(() => {
            location.reload()
        })
    }

    return (
        <>
        <div>
            <h1>Soporte</h1>
            <h3>¿Tuviste algun problema con alguna compra, tienes dudas, o simplemente quieres contactarnos?<br/>Escribenos por aqui</h3>
            <div className="form"> 
                <label>Email</label>
                <input type="Email"/>
                <label>Razon / Problema</label>
                <input type="text"/>
                <label>Descripción</label>
                <textarea className="desc"/>
                <div className="btn-card">
                    <CardButton text={"Enviar"} onClick={handleClick}/>
                </div>
            </div>
        </div>
        </>
    )
}