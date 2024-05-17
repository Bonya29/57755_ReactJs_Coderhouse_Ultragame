import "./ProductCard.css"

export default function ProductCard({imagen, titulo, precio}) {
    return (
        <>
        <div className="product-card">
            <img src={imagen}/>
            <h2>{titulo}</h2>
            <h2>${precio}.00</h2>
        </div>
        </>
    )
}