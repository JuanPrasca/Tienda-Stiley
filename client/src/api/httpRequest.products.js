import axios from "axios";

const initialUrl = "http://localhost:3000/api/";


// export const createProduct = async (url, name, price, size, amount, category, color, image) => {
//   try {
//     const response = await axios.post(`${initialUrl}/${url}`, {
//       productName: name,
//       price: price,
//       size: size,
//       amount: amount,
//       category: category,
//       color: color,
//       image: image
//     })
//     return response
//   } catch (error) {
//     alert(error)
//   }
  
// }

export const getProducts = async (url) => {
  try {
    const response = await axios.get(`${initialUrl}/${url}`)
    return response.data

  } catch (error) {
    alert(error)
  }
}

export const deleteProduct = async (url) => {
  try {
    const response = await axios.delete(`${initialUrl}/${url}`);
    response.status(200).alert("Se elimino con exito")
  } catch (error) {
    alert(error)
  }
} 
