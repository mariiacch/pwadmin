const Client = require("../models/Clients");
const router = require("express").Router();

//REGISTER create Client
router.post("/register", async (req, res) => {
    try {
     
      //create new client
      const newClient = new Client({
        nombres: req.body.nombres,
        cedula: req.body.cedula,
        contact: req.body.contact,
        licencia:req.body.licencia,
        ciudad:req.body.ciudad
      });
  
      //save user and respond
      const client = await newClient.save();
      res.status(200).json(client);
    } catch (err) {
      res.status(500).json(err)
    }
  });


  // get all clients(quiero obtener todos los usuarios)
router.get("/clients", async(req,res)=>{
    try{
        //busca en users por nombre de usuario(username)
        const clients= await Client.find({})
        //busca por su id
       // const userId= await User.find({_id:req.body._id})
       res.status(200).json(clients);
  
    }catch(err){
      res.status(500).json(err)
    }
  })



   //prueba para total de clientes con countDocuments

   router.get("/totalclients", async(req,res)=>{
    try{
     const docCount = await Client.countDocuments().exec();
     res.status(200).send([docCount]);
 
    }catch(err){
     res.status(500).json(err)
    }
 });

 //update client
router.put("/:id", async (req,res)=>{
    
  try{
      const user= await Client.findByIdAndUpdate(req.params.id,{
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
      const user= await Client.findByIdAndDelete(req.params.id)
      res.status(200).json("account has been deleted")
  }catch(err){
      return res.status(500).json(err);
  }


})

  module.exports=router