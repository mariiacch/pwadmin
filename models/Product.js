const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new mongoose.Schema(
  {
    
    nombre: {
        type: String,
        require: true, 
        unique:false,
    },
   
    codigo: {
        type: Number, 
        require: true, 
        unique:false, 
    },
    
    grados:{
        type:Number,
        required:true,
        
    },
    tipo: {
        type: String,
        require: true, 
        unique:false,
    },
    precio: {
       type:Number,
        required:true,
  },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);