import { useState } from "react";

export default function Form(){

    const [Firstname, SetFirstname] = useState("");
    let [Lastname, Setlastname] = useState("");
    const [Fullname, setFullName] = useState('');
    
    function handleFirstNameChange(e) {
        SetFirstname(e.target.value);
        // setFullName(e.target.value + ' ' + lastName);
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
        <input type="text" value={Lastname} onChange={getvalue=>(

            Setlastname(getvalue.target.value)
        )}/>
        <br/>

        <p> your first name is here == {Firstname}</p>
        <p>Your last name is here=== {Lastname}</p>
        <p>your CNIC name is here== {''}</p>
        </>
    )
}