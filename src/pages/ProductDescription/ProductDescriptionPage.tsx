import { useParams } from "react-router-dom";

import data from "../../data/data.json";



export const ProductDescriptionPage = ()=> {

  const {name} = useParams()

  const producto = data.find(p => p.name === name)

  if(!producto){
    return <div className="text-zinc-50">El producto no existe</div>
  }

return (
  <div>
    <h1 className="text-zinc-50">Detalle del producto {producto.name}</h1>
  </div>
)

}