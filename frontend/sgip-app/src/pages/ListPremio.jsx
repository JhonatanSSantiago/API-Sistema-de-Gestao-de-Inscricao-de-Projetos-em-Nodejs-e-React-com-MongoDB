import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";




const ListPremio = () => {

  const[premios, setPremios] = useState([]);
   const getPremios = async() => {
      
      try {
        
        const reponse = await axios.get("http://localhost:3000/api/premio");
        const data = reponse.data;

        console.log(data);
      } catch (error) {
        console.log(error)
      }



   }

   useEffect(() => {
      getPremios()
   }, [])

  return (
    <div>ListPremio</div>
  )
}

export default ListPremio