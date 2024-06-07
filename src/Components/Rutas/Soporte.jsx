import CardButton from "../Contenido/CardButton"
import "./Rutas.css"
import "../Contenido/ProductCard.css"
import Swal from "sweetalert2"
import { addRequest } from "../../Firebase/firebase"
import { useState } from "react"

export default function Soporte() {
    const [requestId, setRequestId] = useState(null)

    const handleClick = () => {
        const sopFullname = document.getElementById("sop-fullname").value
        const sopEmail = document.getElementById("sop-email").value
        const sopReason = document.getElementById("sop-reason").value
        const sopId = document.getElementById("sop-id").value || null
        const sopDesc = document.getElementById("sop-desc").value
        if (!sopFullname || !sopEmail || !sopReason || !sopDesc) {
            Swal.fire({
                title: "Faltan Datos.",
                text: "Completa todos los campos obligatorios",
                icon: "warning"
            })
        } else {
            const createRequest = {
                solicitante: {fullname: sopFullname, email: sopEmail},
                razon: sopReason,
                idCompra: sopId,
                descripcion: sopDesc,
                fecha: new Date()
            }
            addRequest(createRequest).then((id) => {
                setRequestId(id)
                Swal.fire({
                    title: "Solicitud Enviada",
                    text: "En los proximos 7 dias te estaremos respondiendo al mail indicado. ID de la solicitud: " + id,
                    icon: "success"
                })
                .then(() => {
                    location.reload()
                })
            })
            
        }
    }

    return (
        <>
        <div>
            <h1>Soporte</h1>
            <h3>¿Tuviste algun problema con alguna compra, tienes dudas, o simplemente quieres contactarnos?<br/>Escribenos por aqui</h3>
            <div className="form">
                <div className="form-cont">
                    <div className="inp-group">
                        <label>Nombre y Apellido</label>
                        <input type="text" id="sop-fullname"/>
                    </div>
                    <div className="inp-group">
                        <label>Email</label>
                        <input type="Email" id="sop-email"/>
                    </div>
                    <div className="inp-group">
                        <label>Razon / Problema</label>
                        <input type="text" id="sop-reason"/>
                    </div>
                    <div className="inp-group">
                        <label>ID de Compra (si tienes)</label>
                        <input type="text" id="sop-id"/>
                    </div>
                </div>
                <label>Descripción</label>
                <textarea className="desc" id="sop-desc"/>
                <div className="btn-card">
                    <CardButton text={"Enviar"} onClick={handleClick}/>
                </div>
            </div>
        </div>
        </>
    )
}