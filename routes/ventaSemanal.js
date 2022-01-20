const Semanal = require("../models/VentaSemanal");
const router = require("express").Router();


//REGISTER create vendedor
router.post("/register", async (req, res) => {
  try {
   
    //create new user
    const newRegister = new Semanal({
      cantidadBolivares: req.body.cantidadBolivares,
      
    });

    //save user and respond
    const cantidadBolivares = await newRegister.save();
    res.status(200).json(cantidadBolivares);
  } catch (err) {
    res.status(500).json(err)
  }
});

  // get all (quiero obtener todos los ventas)
  router.get("/ventas", async(req,res)=>{
    try{
        //busca 
        const ventas= await Semanal.find({})
        //busca por su id
       // const userId= await User.find({_id:req.body._id})
       res.status(200).json(ventas);

    }catch(err){
      res.status(500).json(err)
    }
})

//get last
// get all (quiero obtener todos los usuarios)
router.post("/getlast", async(req,res)=>{
  try{
      //busca 
     const ventas= await Semanal.find().sort({$natural:-1}).limit(1);
     res.status(200).json(ventas);

  }catch(err){
    res.status(500).json(err)
  }
})


//update seller
router.put("/:id", async (req,res)=>{
    
  try{
      await Semanal.findByIdAndUpdate(req.params.id,{
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
      const user= await Semanal.findByIdAndDelete(req.params.id)
      res.status(200).json("account has been deleted")
  }catch(err){
      return res.status(500).json(err);
  }


})









module.exports=router