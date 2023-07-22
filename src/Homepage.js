
 export default function MyHeader(){

    function sayhello(){

        alert("this is your header componenet");
    }

    function Show_iteration(){

        let num1 = parseInt(prompt("enter ending number"));
        for (let i=1; i<=num1; i++){

console.log ("counting here======="+i);
        }
    }


    return <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>Orders</li>
        <li><button onClick={sayhello}>click here</button></li>
        <li><button onClick={Show_iteration}>Counting here</button></li>
    </ul>

}
