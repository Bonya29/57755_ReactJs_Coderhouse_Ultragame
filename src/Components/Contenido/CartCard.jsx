import "./CartCard.css"

export default function CartCard({imagen, titulo, precio}) {
    return (
        <>
        <div className="cart-card">
            <button>✖</button>
            <img src={imagen}/>
            <h3>{titulo}</h3>
            <h3 className="precio">${precio}.00</h3>
        </div>
        </>
    )
}