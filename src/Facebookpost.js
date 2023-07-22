
export default function Fb_Post(props){

    return <>
    <div>
    <img src="logo192.png"/><h1>{props.name}</h1><i>{props.mydate}</i>
    <input type="text" placeholder="comment"/>
    </div>
    </>

}

function do_sum(num1,num2){

    return [num1+num2, num1*num2, num1/num2];

}

let [sum,multi,divide]= do_sum(4,6);

console.log(sum);
console.log(multi);
