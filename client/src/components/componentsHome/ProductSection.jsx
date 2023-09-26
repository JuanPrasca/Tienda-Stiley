import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { getProducts } from '../../api/httpRequest.products'

export const ProductsSection = ({title}) => {
    const [products, setProduts] = useState([])
    const [prductsNumber,  setProdutsNumber] = useState(4)
    const [botonValue, setBotonValue] = useState('Ver mas')
    const [selectedProductId, setSelectedProductId] = useState(0)
    const listProductsNews = products.slice(0, prductsNumber)

    useEffect(() => {
        getProductsHttp()
    }, [])

     const getProductsHttp = async () => {
       try {
         const response = await getProducts('products')
         setProduts(response.result)
       } catch (error) {
         console.error(error)
       }
     }
     const seeAll = () => {
        setProdutsNumber(products.length)
        setBotonValue('Ver menos')
     }
     const seeLess = () => {
       setBotonValue('Ver mas')
       setProdutsNumber(4)
     }
     const handleProductClick = (productId) => {
       setSelectedProductId(productId)
     }
    return (
      <section className="my-3 mx-3 justify-center">
        <h1 className="text-center font-bold text-3xl font-farro my-10">{title}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {listProductsNews.map((item) => (
            <div className="max-w-xs rounded overflow-hidden shadow-lg my-3" key={item.id_producto}>
              <img src={item.imagen_producto} alt="Producto" className="w-full h-[60%]" />
              <div className="px-6 py-4">
                <h1 className="font-bold text-xl mb-2">{item.nombre_producto}</h1>
                <p className="text-gray-700 text-base">${item.precio_producto}</p>
                <p className="text-gray-700 text-base">{item.descripcion_producto}</p>
              </div>
              <div className="px-6 py-4">
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Talla: {item.talla_producto}</span>
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Color: {item.color_producto}</span>
              </div>
              <div className="px-6 py-4">
                <Link to={`/productInfo`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleProductClick(item.id_producto)}>
                  Comprar
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-5">
          <button className="p-4 bg-white shadow-lg border rounded-full text-md w-112" onClick={botonValue === 'Ver mas' ? seeAll : seeLess}>
            {botonValue}
          </button>
        </div>
      </section>
    )
};
