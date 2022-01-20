const Mensual = require("../models/VentaMensual");
const router = require("express").Router();


//REGISTER create 
router.post("/register", async (req, res) => {
    try {
     
      //create new user
      const newVenta = new Mensual({
        Mes: req.body.Mes,
        cantidadBolivares: req.body.cantidadBolivares,
       
      });
  
      //save user and respond
      const ventaMensual = await newVenta.save();
      res.status(200).json(ventaMensual);
    } catch (err) {
      res.status(500).json(err)
    }
  });

  // get all (quiero obtener todos los usuarios)
  router.get("/sellers", async(req,res)=>{
    try{
        //busca 
        const sellers= await Mensual.find({})
        //busca por su id
       // const userId= await User.find({_id:req.body._id})
       res.status(200).json(sellers);

    }catch(err){
      res.status(500).json(err)
    }
})

//get last
router.post("/getlast", async(req,res)=>{
  try{
      //busca 
     const ventas= await Mensual.find().sort({$natural:-1}).limit(1);
     res.status(200).json(ventas);

  }catch(err){
    res.status(500).json(err)
  }
})
//update seller
router.put("/:id", async (req,res)=>{
    
  try{
      await Vendedor.findByIdAndUpdate(req.params.id,{
          $set:req.body
      })
      res.status(200).json("account has been updated")
  }catch(err){
      return res.status(500).json(err);
  }


})


//eliminar user:
router.delete("/:id", async (req,res)=>{
    
       
  try{
      const user= await Mensual.findByIdAndDelete(req.params.id)
      res.status(200).json("account has been deleted")
  }catch(err){
      return res.status(500).json(err);
  }


})









module.exports=router