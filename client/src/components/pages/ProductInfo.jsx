import { useState } from "react"

export const ProductInfo = () => {
    const product = [
        {name: 'Producto example', price: 25000, description: 'Este es el mejor produtos q he podido ver desde asjdajshkasldklaskashjahdjadkjdhdhakdkjhdsah', color: 'verde', size: ['M,', 'S'], amount: 4 }
    ]
    const [amount, setAmount] = useState(1) 
    const addAmount = (newAmount) => {
        if (amount < product[0].amount) setAmount(newAmount + 1)
    }
    const subtractAmount = (newAmount) => {
      if (newAmount > 1) {
        setAmount(newAmount - 1)
      }
    }
    return (
      <>
        <section className="px-10">
          <div className="grid grid-cols-2 gap-10">
            <div className="flex justify-center bg-gray-400">
              <img src="https://c0.klipartz.com/pngpicture/282/778/gratis-png-camisa-negra-con-cuello-redondo-top-de-manga-de-camiseta-camisa-de-vestir.png" className="h-[80vh]" />
            </div>
            <div>
              {product.map((item, index) => (
                <div key={index}>
                  <h2 className="text-3xl font-farro font-bold my-4">{item.name}</h2>
                  <p className="text-2xl font-farro font-bold my-4">${item.price}</p>
                  <p className="text-[15px] font-workSans mb-4">{item.description}</p>
                  <hr />
                  <div className="flex flex-col w-[18%]">
                    <span className="bg-gray-200 my-3 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Color: {item.color}</span>
                    <span className="bg-gray-200 my-3 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Tallas: {item.size}</span>
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
                  {amount < product[0].amount ? '' : <p className="font-bold text-red mb-3 mx-5">No hay mas productos</p>}
                </div>
              ))}
              <button className="p-4 bg-midnight text-white">Añadir al carrito</button>
            </div>
          </div>
        </section>
      </>
    )
}