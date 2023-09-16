import { useState } from "react";

import axios from "axios";



export default function Weather(){
const [weatherData, setweatherData]= useState(" ");
// const [placeName, setplaceName]= useState("");

function submitHandler(e){
    e.preventDefault();
    
    console.log("check clicking");
    axios.get(`http://localhost:4000/users`)
    .then(response=>{
        console.log("response: ", response.data);
        setweatherData(response.data);
    })
    .catch(err=>{
        console.log("err",err); 
        alert(err);
    })
 
console.log("This is hardcode console=="+weatherData[0].id);
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
         <button type="submit">Fetch user data</button>
     </form>
     {/* <div> */}
        
     {/* <label>Temperature</label> {weatherData?.id?.name}
     <label>min Temperature</label> {weatherData?.name?.first
} */}
{/* <label>Country:</label>{weatherData?.sys?.country} */}


{/* <label>Gender:</label>{weatherData?.results[0]?.gender} 
<br/>
<label>email:</label>{weatherData?.results[0]?.email}
<br/>
 <label>phone:</label>{weatherData?.results[0]?.cell}  */}

{/* this is for object data type for userAPI
<label>Name of user: {weatherData[0]?.name}</label><br/>
<label>Name of user: {weatherData[0]?.email}</label><br/>
<label>Name of user: {weatherData[1]?.name}</label><br/>
<label>Name of user: {weatherData[1]?.email}</label> */}

{/* <input type="text" placeholder={weatherData[0]}/> */}
{/* <ul>
<label>Fruits Name</label><br/>
<li>{weatherData[0]}</li>
<li>{weatherData[1]}</li>
<li>{weatherData[2]}</li>
</ul> */}


<label>Name: {weatherData[0].name}</label><br/>
<label>Email: {weatherData[0].email}</label>




 </div>
        
    //  </div> 
     );
 
        }
       


