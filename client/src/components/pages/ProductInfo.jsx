import { useEffect, useState } from 'react'
import { getProductById } from '../../api/httpRequest.products'

export const ProductInfo = () => {
  const [products, setProducts] = useState([])
  const [amount, setAmount] = useState(1)
  const  productId  = 1

  const addAmount = (newAmount) => {
    if (amount < products[0].cantidad_producto) setAmount(newAmount + 1)
  }
  const subtractAmount = (newAmount) => {
    if (newAmount > 1) {
      setAmount(newAmount - 1)
    }
  }
  const getProductByIdHttp = async (id) => {
    const res = await getProductById('product', id)
    console.log(res.result)
    setProducts(res.result)
  }

  useEffect(() => {
    getProductByIdHttp(productId)
  }, [])
  return (
    <>
      {products.map((item) => (
        <section className="px-10" key={item.id_producto}>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex justify-center bg-gray-400">
              <img src={item.imagen_producto} className="h-[80vh]" />
            </div>
            <div>
              <h2 className="text-3xl font-farro font-bold my-4">{item.nombre_producto}</h2>
              <p className="text-2xl font-farro font-bold my-4">${item.precio_producto}</p>
              <p className="text-[15px] font-workSans mb-4">{item.descripcion_producto}</p>
              <hr />
              <div className="flex flex-col w-[18%]">
                <span className="bg-gray-200 my-3 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Color: {item.color_producto}</span>
                <span className="bg-gray-200 my-3 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Tallas: {item.talla_producto}</span>
              </div>
              <div className="flex p-4 border w-[20%] rounded-full my-5 justify-center">
                <span className="font-bold  cursor-pointer text-green-700 text-2xl" onClick={() => addAmount(amount)}>
                  +
                </span>
                <p className="mx-8 text-2xl">{amount}</p>
                <span className="font-bold  cursor-pointer text-red text-2xl" onClick={() => subtractAmount(amount)}>
                  -
                </span>
              </div>
              {amount < products[0].cantidad_producto ? '' : <p className="font-bold text-red mb-3 mx-5">No hay mas productos</p>}
              <button className="p-4 bg-midnight text-white">Añadir al carrito</button>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
