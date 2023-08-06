import { useContext, useState } from "react";
import { logincontextwork } from "./Logincontexthandle.js";


export default function Form(){
//  const {getusername} =useContext(logincontextwork);
    const [Firstname, SetFirstname] = useState("");
    // let [Lastname, Setlastname] = useState("");
   
     const {getusername} = useContext(logincontextwork);

     const {setusername, setpage }= useContext(logincontextwork);
     const Fullname = Firstname+'  '+getusername


    function handleFirstNameChange(e) {
        SetFirstname(e.target.value);
        // setFullName(e.target.value + ' ' + Lastname);
      }

    return(

        <>
        <h1>Let's type your name first & Last</h1>
        <label>FirstName:</label>
        <input type="text"
        value={Firstname} onChange={handleFirstNameChange}
        />

        <br/>
        <label>LastName:</label>
        <input type="text"  onChange={(event)=>{
            setusername(event.target.value);
        }
        }/>
        <button onClick={()=>{
            setpage(true);
        }}>login</button>
        <br/>

        <p> your first name is here == {Firstname}</p>
        <p>Your last name is here=== {getusername}</p>
        <p>your CNIC name is here== {Fullname}</p>
        </>
    )
}