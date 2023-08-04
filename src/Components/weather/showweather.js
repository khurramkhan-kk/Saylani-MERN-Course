import { useState } from "react";
import axios from "axios";

export default function Weather(){
const [weatherData, setweatherData]= useState({});
const [placeName, setplaceName]= useState("");

function submitHandler(e){
    e.preventDefault();
    
    console.log("check clicking");
    axios.get(`https://randomuser.me/api/`)
    .then(response=>{
        console.log("response: ", response.data);
        setweatherData(response.data);
    })
    .catch(err=>{
        console.log("err",err); 
    })


}
    
     

     return (
    <div>
     <form onSubmit={submitHandler}>
         <label>Your weather City:</label>
         <input type="text" placeholder="your" 
         onChange={getcityvalue => {
            // console.log(getcityvalue.target.value);
            setplaceName(getcityvalue.target.value)}}
         />
         <button type="submit">show weather</button>
     </form>
     <div>
        
     <label>Temperature</label> {weatherData?.id?.name}
     <label>min Temperature</label> {weatherData?.name?.first
}
{/* <label>Country:</label>{weatherData?.sys?.country} */}
 </div>
        
     </div> 
     );
 
        }
       


