const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: false,
    },
    email: {
      type: String, 
      require: true, 
      index:true, 
      unique:false,
      sparse:true
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
   
    nombres: {
        type: String,
        require: true, 
        unique:false,
    },
    apellidos: {
        type: String,
        require: true, 
        unique:false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    contact: {
    type: Number,
     
      require: true, 
        unique:false,
    },
    cedula: {
        type: Number, 
        require: true, 
        unique:false, 
    },
    
    level: {
      type: Number,
      enum: [1, 2, 3],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);