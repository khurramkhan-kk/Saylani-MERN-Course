

export default function FizzbuzzTask(){

    return <>
    <h1>This program will check fizz & Buzz</h1>
    <input id='mynum' type="number" placeholder="enter any number"/>
    <button onClick={fizzbuzz_action}>Check logic</button>
    </>

    
}


function fizzbuzz_action(){

    let checknum = document.getElementById('mynum').value;
// logical making steps
if (checknum%3 ===0 && checknum%5===0){
alert("this is divisible by 3 & 5=="+"FizzBuzz=="+checknum);
}

else if(checknum%5===0){

alert("this is divisible by 5=="+"Buzz=="+checknum);
}
else if (checknum%3===0){
alert("this is divisible by 3 =="+"Fizz=="+checknum);

}
else{

alert("this is another number not in scope");
}


}