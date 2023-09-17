import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './sharedComponents/Navbar'
import { About } from './pages/About.pages'
import { Accessories } from './pages/Accessories.pages'
import { Home } from './pages/Home.pages'
import { Men } from './pages/Men.pages'
import { Promotions } from './pages/Promotions.pages'
import { RegisterProduct } from './pages/RegisterProducts.pages'
import { Underwear } from './pages/Underwear.pages'
import { Women } from './pages/Woman.pages'
import { NotFound } from './pages/404.pages'

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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
