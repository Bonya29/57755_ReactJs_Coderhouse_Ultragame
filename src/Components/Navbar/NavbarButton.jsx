import "./Navbar.css"
import Swal from 'sweetalert2'

export default function NavbarButton({text, desc}) {
    const handleClick = () => {
        Swal.fire({
            title: text,
            text: desc,
            icon: "info"
        });
    }
    
    return (
        <button onClick={handleClick}>{text}</button>
    )
}