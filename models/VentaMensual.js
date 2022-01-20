const mongoose = require("mongoose");

//type: Schema.Types.ObjectId, ref:'productos
const VentaMensual = new mongoose.Schema(
    {
        
        Mes: {
            type: String, 
            require: true, 
            unique:false, 
            }
        ,


        cantidadBolivares:{
            type:Number,
            unique:false, 
            required:true,
        }
        
       
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Mensual", VentaMensual);