import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
    trim: true
  },
  amount: {
    type: Number,
    required: true,
    trim: true
  },
  color: {
    type: String,
    required: true,
    trim: true
  }
  
})

export default mongoose.model("Products", productsSchema);