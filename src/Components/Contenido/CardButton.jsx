import "./ProductCard.css"

export default function CardButton({text, onClick}) {
    return (
        <>
        <button className="btn-card" onClick={onClick}>{text}</button>
        </>
    )
}