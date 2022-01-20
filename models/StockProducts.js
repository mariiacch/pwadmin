const mongoose = require("mongoose");
const { Schema } = mongoose;
//type: Schema.Types.ObjectId, ref:'productos
const StockProductSchema = new mongoose.Schema(
    {
        
        Producto: {
            type: String, 
            require: true, 
            unique:false,
            }
        ,

        cantidad:{
            type:Number,
            required:true,
        },
        
        mes: {
            type: String, 
            require: true, 
            unique:false, 
        },

        year:{
            type:Number,
            required:true,
        }
        
       
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Stock", StockProductSchema);