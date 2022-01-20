const mongoose = require("mongoose");

const ProovedorSchema = new mongoose.Schema(
    {
        empresa: {
            type: String,
            require: true, 
            unique:false,
        },

        rif: {
            type: String, 
            require: true, 
            unique:false, 
        },
      email: {
        type: String, 
        require: true, 
        index:true, 
        unique:false,
        sparse:true
      },
      contact: {
      type: Number,
        min: 10,
        require: true, 
          unique:false,
      },
       
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Proovedor", ProovedorSchema);


  
