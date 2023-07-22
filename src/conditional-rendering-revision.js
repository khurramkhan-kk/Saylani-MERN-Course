
function MyItem({name, price, checkcondtion}){
// let name = props.name;
// let price = props.price;
// let checkcondtion =props.checkcondtion;
    if(checkcondtion){

        return <li>{name} {price} YES</li>
        // return null
    }
    return <li>{name}</li>
}

 export default function Show_list(){

    return <div>
        <h1>food list</h1>
        <MyItem name="biryani" price = "500" 
        checkcondtion={true}/>
        <MyItem name="Pulao" price = "300" 
        checkcondtion={true}
        />
        <MyItem name ="Pizza" price = "800" 
        checkcondtion={false}/>


    </div>

}