import "./BotonComponente.css"
import Swal from 'sweetalert2'

export default function BotonComponente({text, desc}) {
    const handleClick = () => {
        Swal.fire({
            title: text,
            text: desc,
            icon: "info"
        });
    }
    
    return (
        <button onClick={handleClick} className="boton">
            {text}
        </button>
    )
}