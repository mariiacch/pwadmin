const mongoose = require("mongoose");

//type: Schema.Types.ObjectId, ref:'productos
const VentaSemanal = new mongoose.Schema(
    {
        
    

        cantidadBolivares:{
            type:Number,
            required:true,
        }
        
       
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Semanal", VentaSemanal);