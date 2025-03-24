import { useContext } from "react"
import { CartContext } from "../context/CartContext/CartContext"



export const useCart = ()=> {
    const context = useContext(CartContext)
  
    if(!context) throw new Error('useProducts must be used within a ProductProvider')
  
    return context
}