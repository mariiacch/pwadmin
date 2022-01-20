const Proovedor = require("../models/Proovedor");
const router = require("express").Router();


//REGISTER create Proovedor
router.post("/register", async (req, res) => {
    try {
     
      //create new pro
      const newProovedor = new Proovedor({
        empresa: req.body.empresa,
        rif: req.body.rif,
        email: req.body.email,
        contact: req.body.contact,
       
      });
  
      //save user and respond
      const proveedor = await newProovedor.save();
      res.status(200).json(proveedor);
    } catch (err) {
      res.status(500).json(err)
    }
  });



// get all proovedores (quiero obtener todos los usuarios)
router.get("/proovedors", async(req,res)=>{
  try{
      //busca en users por nombre de usuario(username)
      const proovedors= await Proovedor.find({})
      //busca por su id
     // const userId= await User.find({_id:req.body._id})
     res.status(200).json(proovedors);

  }catch(err){
    res.status(500).json(err)
  }
})


//update proovedor
router.put("/:id", async (req,res)=>{
    
  try{
      const user= await Proovedor.findByIdAndUpdate(req.params.id,{
          $set:req.body
      })
      res.status(200).json("account has been updated")
  }catch(err){
      return res.status(500).json(err);
  }


})

//eliminar :
router.delete("/:id", async (req,res)=>{
    
       
  try{
      const user= await Proovedor.findByIdAndDelete(req.params.id)
      res.status(200).json("account has been deleted")
  }catch(err){
      return res.status(500).json(err);
  }


})






module.exports=router