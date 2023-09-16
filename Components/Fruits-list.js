import { useState } from "react";

import axios from "axios";

export default function Fruitsname(){

    const [FruitsData, setfruitdata]= useState(" ");
    // const [placeName, setplaceName]= useState("");
    
    function submitHandler(e){
        e.preventDefault();
        
        console.log("check clicking");
        axios.get(`http://localhost:4000/API/Fruits`)
        .then(response=>{
            console.log("response: ", response.data);
            setfruitdata(response.data);
        })
        .catch(err=>{
            console.log("err",err); 
        })
    
    
    }
        
         
    
         return (
        <div >
         <form onSubmit={submitHandler}>
             {/* <label>Your weather City:</label> */}
             {/* <input type="text" placeholder="your" 
             onChange={getcityvalue => {
                // console.log(getcityvalue.target.value);
                setplaceName(getcityvalue.target.value)}} */}
             {/* /> */}
             <button type="submit">Fetch Fruits Data</button>
         </form>

         <ul>
            <label>Fruit Names</label>
            <li>{FruitsData[0]}</li>
            <li>{FruitsData[1]}</li>
            <li>{FruitsData[2]}</li>
         </ul>
         </div>
     
         
         )

         
}