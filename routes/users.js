const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");


//update user: actualizar datos (editar)
/*router.put("/:id", async (req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
               const salt =await bcrypt.genSalt(10);
               req.body.password= await bcrypt.hash(req.body.password,salt);


            }catch(err){
                return res.status(500).json(err)

            }
        }
        try{
            const user= await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            })
            res.status(200).json("account has been updated")
        }catch(err){
            return res.status(500).json(err);
        }

    } else{
        return res.status(403).json("you can update only your account")
    }
})
*/

router.put("/:id", async (req,res)=>{
    
        if(req.body.password){
            try{
               const salt =await bcrypt.genSalt(10);
               req.body.password= await bcrypt.hash(req.body.password,salt);


            }catch(err){
                return res.status(500).json(err)

            }
        }
        try{
            const user= await User.findByIdAndUpdate(req.params.id,{
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
            const user= await User.findByIdAndDelete(req.params.id)
            res.status(200).json("account has been deleted")
        }catch(err){
            return res.status(500).json(err);
        }

   
})
//get a user
/*
router.get("/:id",async(req,res)=>{
    try{
        const user= await User.findById(req.params.id);
        const {password, updatedAt, ... other}= user._doc
        
        res.status(200).json(other)
    }catch(err){
        res.status(500).json(err)
    }
})
*/
// peticion get (obtener) usuario
router.get("/", async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
      const user = userId
        ? await User.findById(userId)
        : await User.findOne({ username: username });
      const { password, updatedAt, ...other } = user._doc;
      return res.status(200).json(other);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // get all users (quiero obtener todos los usuarios)
  router.get("/users", async(req,res)=>{
      try{
          //busca en users por nombre de usuario(username)
          const users= await User.find({})
          //busca por su id
         // const userId= await User.find({_id:req.body._id})
         res.status(200).json(users);

      }catch(err){
        res.status(500).json(err)
      }
  })


  //prueba para total de users con countDocuments

  router.get("/totaluser", async(req,res)=>{
   try{
    const docCount = await User.countDocuments({}).exec();
    res.status(200).json(` la cantidad de users es de : ${docCount}`);  

   }catch(err){
    res.status(500).json(err)
   }
});



module.exports=router