import { Link } from "react-router-dom";
import "./Navbar.css"

export default function NavbarButton({text, linkto}) {
    return (
        <button ><Link to={linkto}>{text}</Link></button>
    )
}