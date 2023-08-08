// IMPORTACION DE MONGOOSE
import mongoose from "mongoose";

// CREACION DEL SCHEMA PARA EL PRODUCTO. UN SCHEMA HACE REFERENCIA
// A LA ESTRUCTURA QUE TENDRA NUESTRA TABLA EN LA BASE DE DATOS
const productsSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  size: {
    type: String,
    required: true,
    trim: true
  },
  amount: {
    type: Number,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  color: {
    type: String,
    required: true,
    trim: true
  },

})

// EXPORTACION DEL MODELO CON EL NOMBRE "PRODUCTS" COMO PRIMER PARAMETRO Y EL SCHEMA COMO EL OTRO
export default mongoose.model("Products", productsSchema);