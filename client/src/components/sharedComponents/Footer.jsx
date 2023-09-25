export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Información de la Tienda</h3>
            <p>123 Calle Principal</p>
            <p>Ciudad, País</p>
            <p>Teléfono: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Enlaces Rápidos</h3>
            <ul>
              <li className="mb-2">
                <a href="#">Inicio</a>
              </li>
              <li className="mb-2">
                <a href="#">Productos</a>
              </li>
              <li className="mb-2">
                <a href="#">Ofertas</a>
              </li>
              <li className="mb-2">
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Síguenos en Redes Sociales</h3>
            <ul>
              <li className="mb-2">
                <a href="#">Facebook</a>
              </li>
              <li className="mb-2">
                <a href="#">Twitter</a>
              </li>
              <li className="mb-2">
                <a href="#">Instagram</a>
              </li>
              <li className="mb-2">
                <a href="#">Pinterest</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Boletín de Noticias</h3>
            <p>Suscríbete para recibir ofertas y actualizaciones por correo electrónico.</p>
            <div className="mt-2">
              <input type="email" placeholder="Tu correo electrónico" className="w-full p-2 rounded" />
              <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">Suscribirse</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
