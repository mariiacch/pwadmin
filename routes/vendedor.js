const Vendedor = require("../models/Vendedor");
const router = require("express").Router();


//REGISTER create vendedor
router.post("/register", async (req, res) => {
    try {
     
      //create new user
      const newVendedor = new Vendedor({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        cedula: req.body.cedula,
        contact: req.body.contact,
       
      });
  
      //save user and respond
      const vendedor = await newVendedor.save();
      res.status(200).json(vendedor);
    } catch (err) {
      res.status(500).json(err)
    }
  });

  // get all (quiero obtener todos los usuarios)
  router.get("/sellers", async(req,res)=>{
    try{
        //busca 
        const sellers= await Vendedor.find({})
        //busca por su id
       // const userId= await User.find({_id:req.body._id})
       res.status(200).json(sellers);

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
      const user= await Vendedor.findByIdAndDelete(req.params.id)
      res.status(200).json("account has been deleted")
  }catch(err){
      return res.status(500).json(err);
  }


})









module.exports=router