import "./ContenidoComponente.css"
import BotonComponente from "../Botones/BotonComponente"

export default function ContenidoComponente() {
    return (
        <>
        <div>
            <h1>Bienvenido a<br/>Ultra Game</h1>
        </div>
        <div className="clickme">
            <BotonComponente text="Click Me" desc="Bienvenido a Ultra Game, en nuestra pagina web podras encontrar juegos, tarjetas de regalo y codigos para canjear en Steam, proximamente apareceran nuestros productos aqui abajo. ¡Te Esperamos!"/>
        </div>
        </>
    )
}