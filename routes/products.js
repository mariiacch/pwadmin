const Product = require("../models/Product");
const router = require("express").Router();

//REGISTER create Client
router.post("/register", async (req, res) => {
    try {
     
      //create new 
      const newProduct = new Product({
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        grados: req.body.grados,
        tipo: req.body.tipo,
        precio:req.body.precio
       
      });
  
      //save user and respond
      const product = await newProduct.save();
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err)
    }
  });


  // get all (quiero obtener todos )
router.get("/products", async(req,res)=>{
    try{
        //busca en users por nombre de usuario(username)
        const products= await Product.find({})
        //busca por su id
       // const userId= await User.find({_id:req.body._id})
       res.status(200).json(products);
       //res.status(200).render(products);
       console.log(products)
  
    }catch(err){
      res.status(500).json(err)
    }
  })



   //prueba para total de clientes con countDocuments

   router.get("/totalproducts", async(req,res)=>{
    try{
     const docCount = await Product.countDocuments().exec();
     res.status(200).send([docCount]);
 
    }catch(err){
     res.status(500).json(err)
    }
 });

 //update 
router.put("/:id", async (req,res)=>{
    
  try{
       const productUp= await Product.findByIdAndUpdate(req.params.id,{
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

//peticion put para asignar actualizar (editar) la cantidad de  producto al stock
  //se ingresa {cantidad} desde el cliente 
  //(const{cantidad}=req.body; y se hace un push al array productos para agregar el nuevo valor)

  router.put("/asignacantidad/:id",async(req,res)=>{
    
    const {id}=req.params;
    const {cantidad}=req.body;
    const updated= await Product.findByIdAndUpdate(id,{
        $push:{productos:cantidad}
    });
    res.status(200).json(updated);
})
//eliminar :
router.delete("/:id", async (req,res)=>{
    
       
  try{
      const user= await Product.findByIdAndDelete(req.params.id)
      res.status(200).json("account has been deleted")
  }catch(err){
      return res.status(500).json(err);
  }


})

  module.exports=router