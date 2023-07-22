import Profile from "./Profile.js";
export default function Gallery(){

    return<>
    
    <h3>THis is gallery componenet




        {/* <Profile/> */}
    </h3>
    <input id="name" type="text" placeholder="enter your name" />
    <button onClick={listitems}>click here for des-structuring</button>

    <button onClick={formvalidation}>Submission</button>
   
    </>
}

function listitems(){

    let numbers = [2,3,4,5];
    let names =['kamran',"awam","pareshan"];

    let [mynumber1, mynumber2, mynumber3]= numbers;

    console.log(mynumber1);
    console.log(mynumber2);
    console.log(mynumber3);
}

function CalculateSum(a,b){

    return [a+b, a*b, a/b];

}

let [sum,multi, divided] = CalculateSum(3,4);
console.log("this the sum of two numbers=="+sum);
console.log("this is the multiplication of two numbers==="+multi);
console.log("divided==="+divided);
//Des-Structuring


function formvalidation(){

    let username = document.getElementById('name').value;

    console.log(username);
    if(username.length <=2){

        alert("please enter complete name");
    }
    else{

        alert ("thanks for your input");
    }
}