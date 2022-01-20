//creo express
const express=require('express');
const bodyParser = require('body-parser');
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv")
const helmet=require("helmet")
const morgan=require("morgan")
const cors = require('cors')
const userRoute= require("./routes/users")
const authRoute= require("./routes/auth")
const sellRoute= require("./routes/vendedor")
const proRoute= require("./routes/proovedor")
const clientRoute= require("./routes/clients")
const importProduct= require("./routes/products")
const stockProductos=require("./routes/stockProducts")
const ventaMensual=require("./routes/ventaMensual")
const ventaSemanal=require("./routes/ventaSemanal")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


// Configurar cabeceras y cors 
app.use(function(req, res, next)
{ 
  res.header('Access-Control-Allow-Origin', '*'); 
  
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'); 
  
  res.header('Access-Control-Allow-Methods', 'PUT, POST, OPTIONS'); 
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE'); 
  res.header('Access-Control-Allow-Credentials: true');
  res.header('Access-Control-Max-Age: 240');
  next(); 

}); 


// handling errors
app.use((err, req, res, next) => {
  return res.status(500).json({
    status: "error",
    message: err.message,
  });
});



app.use(cors())

//activo dotenv
dotenv.config();

//especifico el puerto
app.listen(process.env.PORT || 8800,()=>{
    console.log("Backend server is runing")
})


//deploy code:

//******************************************** */

//1 use este midleware para decirle a la app de que usaremos el directorio client como un folder statico 
app.use(express.static(path.join(__dirname, "/client/build")));

//este codigo dice que al recibir alguna request tomar la cd client 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

//******************************************** */
//conexion por url
mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
  );

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));




//prueba de peticion al homepage
app.get("/",(req,res)=>{
    res.send("welcome to homepage")
})

//para usar el archivo users.js ruta:
app.use("/api/users",userRoute);

//para usar el archivo auth.js
app.use("/api/auth",authRoute);

//para usar el archivo vendedor.js
app.use("/api/vendedor",sellRoute);

//para usar el archivo Proovedor.js
app.use("/api/proovedor",proRoute);

//para usar el archivo clients.js
app.use("/api/clients",clientRoute);

//para usar el archivo products.js
app.use("/api/products",importProduct);

//para usar el archivo stockProducts.js
app.use("/api/stockProducts",stockProductos);

//para usar el archivo ventaMensual.js
app.use("/api/ventaMensual",ventaMensual);

//para usar el archivo ventaSemanal.js
app.use("/api/ventaSemanal",ventaSemanal);
