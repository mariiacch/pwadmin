
const StockProducts = require("../models/StockProducts");
const router = require("express").Router();


// peticion /REGISTER create 
router.post("/register", async (req, res) => {
    try {
     
      //create new user
      const newRegister = new StockProducts({
        Producto:req.body.Producto,
        cantidad:req.body.cantidad,
        mes:req.body.mes,
        year:req.body.year,
          
      });

      //save user and respond
      const register= await newRegister.save();
      
      res.status(200).json(register);
    } catch (err) {
      res.status(500).json(err)
    }
  });

  //peticion put para asignar actualizar (editar) un  producto al stock
  //se ingresa {producto} desde el cliente (const{producto}=req.body; y se hace un push al array productos para agregar el nuevo valor)

  router.put("/asignaproducto/:id",async(req,res)=>{
      const {id}=req.params;
      const {producto}=req.body;
      const updated= await StockProducts.findByIdAndUpdate(id,{
          $push:{productos:producto}
      });
      res.status(200).json(updated);
  })

  //get all (populate) para traer toda la data 

  //update
  //update 
router.put("/:id", async (req,res)=>{
    
  try{
      const productUp= await StockProducts.findByIdAndUpdate(req.params.id,{
          $set:req.body
      })
      
     
      res.status(200).json(productUp)
     
      //return productUp;
      //res.render(productUp)
      
  }catch(err){
      return res.status(500).json(err);
      
      console.log(err)
  }


})

//eliminar :
router.delete("/:id", async (req,res)=>{
    
       
  try{
       await StockProducts.findByIdAndDelete(req.params.id)
      res.status(200).json("account has been deleted")
  }catch(err){
      return res.status(500).json(err);
  }


})

  // get all (quiero obtener todos )
  router.get("/stock", async(req,res)=>{
    try{
        //busca 
     const stock= await StockProducts
     .find({})

      res.status(200).json(stock);

    }catch(err){
      res.status(500).json(err)
    }
})


  module.exports=router