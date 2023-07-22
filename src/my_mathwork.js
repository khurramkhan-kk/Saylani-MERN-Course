

 export default function Mathwork(){

    return <>
    <h1>this componenet has javascript code</h1>

<input id="display" type="text" placeholder="Enter an integer"/>
    {/* <button onClick={form_validate}>Login</button> */}
    <button onClick={Mth}>show data</button>
    </>



function form_validate(){

    let email= document.getElementById('myemail').value;
    let mypassword= document.getElementById('passwrd').value;

    if(email.length <=3 ){
alert("Please enter the complete email")
    }
    else if(mypassword.length <= 4){
alert( "please enter the proper password")

    }

    
    else{

        if (email ==="abc@gmail.com" && mypassword==="123456"){

            alert("login successfull here");
        }
            else{
                alert("please use valid credentials");
            }
    }

}
function Mth(){
    let val = document.getElementById('display').value;

    if(val%3===0 &&val%5===0){
        alert("fizzbuzz");
        
    }
    else if(val%5===0)
    {
        alert("bizz");
       
    }
    else if (val%3==0)
    alert("fizz");
    else{
        alert("this is another number");
    }
}

}