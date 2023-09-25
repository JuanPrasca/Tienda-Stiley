import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/sharedComponents/Navbar'
import { About } from './components/pages/About.pages'
import { Accessories } from './components/pages/Accessories.pages'
import { Home } from './components/pages/Home.pages'
import { Men } from './components/pages/Men.pages'
import { Promotions } from './components/pages/Promotions.pages'
import { RegisterProduct } from './components/pages/RegisterProducts.pages'
import { Underwear } from './components/pages/Underwear.pages'
import { Women } from './components/pages/Woman.pages'
import { NotFound } from './components/pages/404.pages'
import { ProductInfo } from './components/pages/ProductInfo'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="about" element={<About />} />
          <Route path="men" element={<Men />} />
          <Route path="promotions" element={<Promotions />} />
          <Route path="registerProduct" element={<RegisterProduct />} />
          <Route path="underwear" element={<Underwear />} />
          <Route path="women" element={<Women />} />
          <Route path="productInfo" element={<ProductInfo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
