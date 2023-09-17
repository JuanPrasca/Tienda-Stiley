import { useState } from "react";
import Swal from 'sweetalert2'
import axios from "axios";


import "../components/formProduct.css"
import { createProduct } from "../api/httpRequest.products.js";

export const FormProduct = () => {

  // const [name, setName] = useState("");
  // const [price, setPrice] = useState(0);
  // const [size, setSize] = useState("");
  // const [amount, setAmount] = useState(1);
  // const [category, setCategory] = useState("");
  // const [color, setColor] = useState("");
  // const [products, setProdutcs] = useState([]);
  const initialFormData = {
    name: '',
    price: 0,
    size: '',
    amount: 1,
    category: '',
    color: '',
    image: ''
  }
   const [formData, setFormData] = useState(initialFormData)

  const saveProductData = async () => {
    const createProducts = await createProduct('saveProduct', formData.name, formData.price, formData.size, formData.amount, formData.category, formData.color, formData.image)
    setFormData(initialFormData)
    const msg = "El producto fue guardado exitosamente"
    return Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: msg,
    })
  }
  const handleCancel = () => {
    setFormData(initialFormData)
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  
  // useEffect(() => {
  //   const getProductsDataRequest = async () => {
  //     const productData = await getProducts('getproducts')
  //     setProdutcs(productData)
  //   }
  //     getProductsDataRequest()
  // }, []);

  // const deleteProduct = (id) => {
  //   axios.delete(`http://localhost:2000/api/products/deleteproduct/${id}`)
  //     .then(() => {
  //       alert("producto eliminado correctamente")
  //     })
  // }]


  // const deleteProduct = async (id) => {
  //   try {
  //     const deletedProduct = await axios.delete(`deleteproduct/${id}`)
  //     alert("Producto eliminado")
  //   } catch (error) {
  //     alert("Error al eliminar el producto: ", error)
  //   }
    
  // }


  return (
    <>
      <h1 className="text-primary text-center my-2">Registra un producto</h1>
      <div className="container mb-3 p-3">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" name="name" value={formData.name} placeholder="Ingrese el nombre del producto" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="$" name="price" value={formData.price} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Talla</label>
          <input className="form-control" list="datalistOptions1" id="exampleDataList" placeholder="Tallas disponibles" name="size" value={formData.size} onChange={handleChange} />
          <datalist id="datalistOptions1">
            <option value="L" />
            <option value="M" />
            <option value="X" />
            <option value="Xl" />
          </datalist>
        </div>
        <div className="mb-3">
          <label className="form-label">Cantidad</label>
          <input type="number" name="amount" value={formData.amount} className="form-control" id="exampleFormControlInput1" placeholder="1" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Categoria</label>
          <input className="form-control" name="category" value={formData.category} list="datalistOptions" id="exampleDataList" placeholder="Selecciona la categoria..." onChange={handleChange} />
          <datalist id="datalistOptions">
            <option value="Ropa Masculina" />
            <option value="Ropa Femenina" />
            <option value="Accesorios" />
            <option value="Ropa interior" />
          </datalist>
        </div>
        <div className="mb-3">
          <label className="form-label">Color</label>
          <input type="text" name="color" value={formData.color} className="form-control" id="exampleFormControlInput1" onChange={handleChange} />
        </div>
        <label className="form-label">Imagen</label>
        <input className="form-control" name="image" value={formData.image} id="exampleDataList" placeholder="https://image.jpg" onChange={handleChange} />

        <button type="button" className="btn btn-success" onClick={saveProductData}>
          Guardar
        </button>
        <button type="button" className="btn btn-danger" onClick={handleCancel}>
          Cancelar
        </button>
      </div>
      <h1 className="my-3 text-center">Lista de productos</h1>
      {/* <InfoProducts product={products} deletedData={deleteProduct} /> */}
    </>
  )
}