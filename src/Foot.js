export default function Footer(){

    function showlop(){

        let arrdata=[123,4,5,5,];

        console.log(arrdata);
        alert("working hard");
    }

    function sum(a,b){

        alert (a+b);
    }
    
    return <>
    <button onClick={showlop}>click here</button>
    <button onClick={sum(3,14)}>sum here</button>
    
    </>
    
    

  
}