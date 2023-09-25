import imgHome from '../../../public/images/imgHome.jpg'
import { Categories } from '../componentsHome/Categories'
import { CommentsSection } from '../componentsHome/CommentsSection'
import { ProductsSection } from '../componentsHome/ProductSection'
import { Ubication } from '../componentsHome/Ubication'
import { Footer } from '../sharedComponents/Footer'
export const Home = () => {
  
  const comments = [
    { name: 'Juan Carlos Prasca', comment: 'Excelentes productos', date: '17 de septiembre del 2023' },
    { name: 'Diego', comment: 'Excelentes productos', date: '17 de septiembre del 2023' },
    { name: 'Carmensa', comment: 'Excelentes productos', date: '17 de septiembre del 2023' },
    { name: 'Carmensa', comment: 'Excelentes productos', date: '17 de septiembre del 2023' }
  ]
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 px-10 ">
        <div className="my-3">
          <p className="text-[3rem] w-[80%] mt-11 font-bold font-farro leading-none">ENCUENTRA LA MEJOR CALIDAD DE ROPA QUE ENCAJA CON TU ESTILO</p>
          <p className="font-workSans w-[83%] mt-3">Stiley Store es la mejor opcion para tus compras, ya que nos enfocamos en brindarte la mejor calidad a los mejores precios</p>
          <button className="p-2 border rounded-full bg-purple-300 font-workSans my-10">Comprar ahora</button>
          <div className="flex">
            <div className="mr-10 border-r">
              <p className="font-inter font-bold text-3xl">2,000+</p>
              <p className="mr-3 font-workSans">Usuarios Activos</p>
            </div>
            <div className="mr-10 border-r">
              <p className="font-inter font-bold text-3xl">200+</p>
              <p className="mr-3 font-workSans">Productos diferentes</p>
            </div>
            <div className="mr-10">
              <p className="font-inter font-bold text-3xl">3,000+</p>
              <p className="mr-3 font-workSans">Usuarios Felices</p>
            </div>
          </div>
        </div>
        <div>
          <img src={imgHome} alt="" className="h-[88vh] mr-10" />
        </div>
      </section>
      <ProductsSection title={'Lo mas nuevo'} />
      <ProductsSection title={'Lo que los usuarios prefieren'} />
      <Categories />
      <Ubication />
      <CommentsSection comments={comments} />
      <Footer />
    </>
  )
}
