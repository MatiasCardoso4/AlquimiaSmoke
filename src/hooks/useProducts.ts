import { useContext } from "react"
import { ProductsContext } from "../context/ProductsContext/ProductsContext"


export const useProducts = () => {
  const context = useContext(ProductsContext)

  if(!context) throw new Error('useProducts must be used within a ProductProvider')

  return context
}