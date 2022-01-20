const mongoose=require("mongoose")

const SellerSchema= new mongoose.Schema({
    
    nombre:{
        type:String,
        required:true,
        max:50,
        unique:true
    },
    apellido:{
        type:String,
        required:true,
        max:50,
        unique:true
    },
    cedula:{
        type:Number,
        required:true,
        min:20,
    },
   
    contact:{
        type:Number,
        required:true,
        min:20,
    },
   

},
{timestamps:true}
)
//exporto
module.exports= mongoose.model("Vendedor", SellerSchema);