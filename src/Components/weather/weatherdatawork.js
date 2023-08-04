import axios from "axios";
import { useState } from "react";



export default function Weather_data(){

    let [weatherData, setweatherData] = useState([]);
    const [cityname, setcityname] = useState("");

    function callweatherdata(e){
        e.preventDefault();
// axios practice blog link: https://www.freecodecamp.org/news/how-to-use-axios-with-react/

        axios.get(`https://randomuser.me/api/`).then(response=>{

        console.log("response here==", response.data);
setweatherData(response.data);

        }). catch(err=>{

            console.log("API error==", err);
        })

    }



    return (
<div>
     <form onSubmit={callweatherdata} >
         {/* <label>Your weather City:</label>
         <input type="text" placeholder="your" 
         onChange={getcityvalue => {
            // console.log(getcityvalue.target.value);
            setcityname(getcityvalue.target.value)}}
         /> */}
         <button type="submit">fetch user data</button>
     </form>
    
    <div>

       {weatherData.map()}
      
    
    </div>
     </div>


    );
}

