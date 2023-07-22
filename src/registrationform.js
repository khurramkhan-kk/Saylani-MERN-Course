
export default function Formworking(){

return <>

<form >
    <label>username:</label>
    <input id="email" type="text"/>
    <br/>
    <label>Password:</label>
    <input id="pass" type="password"
/>
<button onClick={emaillogic}>login here again</button>


</form>


</>

function emaillogic(){

    let useremail= document.getElementById('email').value;
    let password = document.getElementById('pass').value;

    if (useremail.length <=5 & password <=6){

        alert (" please use valid credentials");
    }

else{

    alert ("login successfull");
}
}



}