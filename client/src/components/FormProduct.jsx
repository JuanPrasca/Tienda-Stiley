import { useState } from "react";
import axios from "axios";

import { InfoProducts } from "./InfoProducts";

import "../components/formProduct.css"
import { useEffect } from "react";

export const FormProduct = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState("");
  const [amount, setAmount] = useState(1);
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [products, setProdutcs] = useState([]);


  const addProduct = () => {
    axios.post("http://localhost:2000/api/products/saveProduct", {
      productName: name,
      price: price,
      size: size,
      amount: amount,
      category: category,
      color: color
    })
      .then(() => {
        alert("Producto Registrado");
      })
      .catch((error) => {
        alert("error:", error)
      });
  };
  useEffect(() => {
    axios.get("http://localhost:2000/api/products/getproducts")
      .then((response) => {
        setProdutcs(response.data);
      })
  }, [])


  return (
    <>
      <h1 className="text-primary text-center my-2">Registra un producto</h1>
      <div className="container mb-3 p-3">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ingrese el nombre del producto" onChange={(event) => {
            setName(event.target.value)
          }} />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="$" onChange={(event) => {
            setPrice(event.target.value)
          }} />
        </div>
        <div className="mb-3">
          <label className="form-label">Talla</label>
          <input className="form-control" list="datalistOptions1" id="exampleDataList" placeholder="Tallas disponibles" onChange={(event) => {
            setSize(event.target.value)
          }} />
          <datalist id="datalistOptions1" >
            <option value="L" />
            <option value="M" />
            <option value="X" />
            <option value="Xl" />
          </datalist>
        </div>
        <div className="mb-3">
          <label className="form-label">Cantidad</label>
          <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="1" onChange={(event) => {
            setAmount(event.target.value)
          }} />
        </div>
        <div className="mb-3">
          <label className="form-label">Categoria</label>
          <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Selecciona la categoria..." onChange={(event) => {
            setCategory(event.target.value)
          }} />
          <datalist id="datalistOptions" >
            <option value="Ropa Masculina" />
            <option value="Ropa Femenina" />
            <option value="Accesorios" />
            <option value="Ropa interior" />
          </datalist>
        </div>
        <div className="mb-3">
          <label className="form-label">Color</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(event) => {
            setColor(event.target.value)
          }} />
        </div>


        <button type="button" className="btn btn-success" onClick={addProduct} >Guardar</button>
        <button type="button" className="btn btn-danger">Cancelar</button>
      </div>
      <h1 className="my-3">Lista de productos</h1>
      <InfoProducts product={products}/>

    </>

  );
}