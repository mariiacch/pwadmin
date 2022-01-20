const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
  {
    
   
    nombres: {
        type: String,
        require: true, 
        unique:false,
    },
   
    cedula: {
        type: Number, 
        require: true, 
        unique:false, 
    },
    licencia: {
      type: Number, 
      require: true, 
      unique:false, 
  },
  ciudad: {
    type: String,
    require: true, 
    unique:false,
},
    
    contact:{
        type:Number,
        required:true,
        min:20,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Client", ClientSchema);