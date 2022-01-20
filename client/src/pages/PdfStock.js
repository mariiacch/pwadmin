import React,{useEffect, useState} from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import axios from "axios";
import Pdf from "react-to-pdf";
import ConsultProductStock from './ConsultStock';

   

const ref= React.createRef();
export default function PdfStock() {
    const urlStock="http://localhost:8800/api/stockProducts/stock";

    //estado 1 almacena estatico:
   const [Clients,setClients]= useState([]);

    useEffect(() => {
        const getPro = async () => {
          const res= await axios.get(urlStock)
          try{
            setClients(res.data);
            
          }catch(err){
           console.log(err)
          }
          };
          getPro();
        
        },[])

    return (
        <div>
            <>
            
        <div  ref={ref} style={{
                
              }}>
                <br />
              <h1  style={{
                
                "marginLeft":"50px",
              
              
              }}   >Inventario  Registrado en El Stock</h1>
              <br />
        {


              <table style={{
                
                "marginLeft":"50px"
              
              
              }} >
              <thead>
                <tr>
                  
                  <th >Producto</th>
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  <th >Unidades</th>
                  &nbsp;&nbsp;
                  <th >Mes</th>
                  &nbsp;
                  &nbsp;
                  <th>Año</th>
                  &nbsp;
                  <th >Fecha de Registro</th>
                  
                </tr>
              </thead>

              <tbody>
                
                  
                  
    
                  {Clients &&
                Clients.map((client)=>(
                    
                  <tr key={client._id}>
                    
                  
                 
                    <td >{client.Producto}</td>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <td >{client.cantidad}</td>
                    &nbsp;
                    &nbsp;
                    
                     <td className="sellTd " >{client.mes}</td>
                     &nbsp;
                     <td className="sellTd " >{client.year}</td>
                     &nbsp;
                     &nbsp;
                     <td className="none " >{client.createdAt}</td>
                    
                    
                  </tr>
                ))}
                    
                  
              
              </tbody>
            </table>
            }
           
          
        </div>
        <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
       
        </>
        </div>
    )
}
