import { useEffect, useState } from 'react'
import { getProducts } from '../../api/httpRequest.products'


export const Men = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const getAllProducts = async () => {
      const response = await getProducts('getproducts')
      setLoading(true)
      setProducts(response)
    }
    getAllProducts()
  }, [])

  return (
    <>
    <h1 className='text-center my-3'>Productos</h1>
      {loading ? (
        <div className="mainContaine container">
          {products.map((item) => {
            return (
              <div className="card" key={item._id}>
                <img src={item.image} className='card-img' alt="" />
                <div className="card-body">
                  <h5 className="card-title">{item.productName}</h5>
                  <p className="card-text">Talla: {item.size}</p>
                  <p className="card-text">$ {item.price}</p>
                  <p className="card-text">Color: {item.color}</p>
                  <a href="#" className="btn btn-primary">
                    Comprar
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="spinner-border text-warning loading" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  )
}
