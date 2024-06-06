import { createContext, useState } from "react";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const CartContext = createContext()
export function CartProvider({children}) {
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [acumulador, setAcumulador] = useState(0)

    const clearCart = () => {
        setProducts([])
        setTotal(0)
        setAcumulador(0)
    }

    const removeProductCart = (id) => {
        const updatedProducts = products.filter((product) => product.id !== id)
        setProducts(updatedProducts)
        const precioTotal = updatedProducts.reduce((total, product) => total + product.precio, 0)
        setTotal(precioTotal)
        const acum = acumulador - 1
        setAcumulador(acum)
        Toastify({
            text: "Producto Eliminado",
            duration: 2000
            }).showToast()
    }

    const addCart = (product) => {
        const inCart = products.some((i) => i.id === product.id)
        if (inCart) {
            Toastify({
                text: "El Producto ya esta en el Carrito",
                duration: 2000
                }).showToast()
        } else {
                const newProducts = [...products, { ...product }]
                setProducts(newProducts)
                const precioTotal = total + product.precio
                setTotal(precioTotal)
                const acum = acumulador + 1
                setAcumulador(acum)
                console.log(newProducts, precioTotal, acum)
                Toastify({
                    text: "Producto Añadido al Carrito",
                    duration: 2000
                    }).showToast()
        }
    }

    return (
        <CartContext.Provider value = {{ products, clearCart, removeProductCart, addCart, acumulador, total}}>
            {children}
        </CartContext.Provider>
    )
}