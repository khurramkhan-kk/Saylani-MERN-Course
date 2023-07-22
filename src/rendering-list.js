// import img from '../public/khurram.jpg';
// 
// let numarray =[{img},{img}];
// function do_listing(){
// let numarray =[2,3,4,5];
  
// let arrayitem = numarray.map(multiple_array => multiple_array *2)




// console.log(arrayitem);
// }
//images array bnao let img_arr=[hhha ]
export default function My_List(){



    // let instruction =["please read the j carefully", "Do not submit empty form", "Proof read before submission"]
    // //let arrayitem = numarray.map(show_arr =><li>{show_arr}</li> )
    // let arrayitem = instruction.map(function show_instruction(show_data){ return <p>{show_data}</p>


    // } )

    return <div>
        {/* <h1>Please read login instruction below</h1> */}
{/*        
            {arrayitem} */}
            <List_data_withfilter/>
        
        {/* <button onClick={do_listing}>click here to show</button> */}
    </div>
}

function List_data_withfilter(){

const hosting_plan =[ {

    id: 'Basic',
    monthly: '$3.99',
    disk_space: '100GB',
    Date_transfer: '1000/GB/Mo',
    Site_pages: 10
},
{
    id: 'Professional   ',
    monthly: '$4',
    disk_space: '500GB',
    Date_transfer: '20000/GB/Mo',
    Site_pages: 15

},
{

    id: 'Ultimate',
    monthly: '$5',
    disk_space: '3000GB',
    Date_transfer: '1000/GB/Mo',
    Site_pages: 20
}


]



let basic_plan = hosting_plan.filter(show_basic_plan => show_basic_plan.id==='Ultimate')

let basic_details = basic_plan.map(basic_items => <li>{basic_items.Site_pages}</li>)


return<>
<h1>Here is our basic plan</h1>
<ul>
    {basic_details}
</ul>
</>




}







/*
function List_with_filter(){

    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
      }, 
      {id:21,
      name: 'kamran',     
      profession: 'teacher',
      address: 'jinnah colony'}
      ];
let show_persons = people.filter(human => human.id==21 )

let show_items = show_persons.map(show_listing => <li>{show_listing.name}
<p><b>{show_listing.profession}</b></p>
<h2>{show_listing.id}</h2>
<a href="#">{show_listing.address}</a>
</li>

)

return <div>
    <ul>
        {show_items}
    </ul>
</div>

}
    
*/


