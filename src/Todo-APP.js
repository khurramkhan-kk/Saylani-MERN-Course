
import { useState } from "react"
export default function Todo_APP(){
    //Step 2:
const [TaskItem, setTastItem] = useState("");

const [showTask, setShowTask] = useState([]);
// //newTask("hdhdh"); this is immutable
// //setTast("enter task"); this is wrong to put you infinite loop while rendering componenet
// // step 3:

// let arr1 =[1,2,3];
// let arr2 = ["kamran","saba"];
// let result = [...arr2, arr1];
// console.log(result);
// console.log("this is my id=="+crypto.randomUUID());
function handle_Task(e){
e.preventDefault();
    

setShowTask(enteredTaskvalue =>{
    return[
        ...enteredTaskvalue,
        {id:crypto.randomUUID(),title:TaskItem, completed:false},
    ]
})
    
    

    // setTastItem("hdhfhf");
    
}
function checkedTodo(id, completed){
    setShowTask(enteredTaskvalue =>{
        return enteredTaskvalue.map(myTask =>{
            if(myTask.id === id){
                return {...myTask, completed}
            }
            return myTask;
        })
    })
}



// }

// //step 5: to show filtered data only
function deleteTask(id){
setShowTask(enteredTaskvalue =>{
    return enteredTaskvalue.filter(showTask => showTask.id !==id)
})
}

// return <>

// <form onSubmit={handle_Task}>
//     <label>Todo Tasks</label>
//     <input type="text" placeholder="enter your task" value={TaskItem}
//     onChange={getvalue=> setTastItem(getvalue.target.value)}/>
//     <button>Add Tasks</button>
// </form>
// <h1>Todo Tasks List</h1>
// <ul>
//     {/* set the condition here */}
//     {/* {showTask.length=== 0 && "No tasks here"} */}
//    {/* step 4 show data by map */}
//     {showTask.map(myTask =>{
//         return<li key={myTask.id}>
//         <label>
//         <input type="checkbox"  />
//         {/* // onChange={showchange => checkedTodo(myTask.id,showchange.target.checked)checked={myTask.completed}} */}
        
//         {myTask.title}
//         </label>
//         <button onClick={()=> deleteTask(myTask.id)}>Delete</button>
        
//     </li>
//     })}

// {/* <li>
//     <label>
//     <input type="checkbox"/> Task 1</label>
//     <button>Delete</button>
// </li>
// <li>
//     <label>
//     <input type="checkbox"/> Task 2</label>
//     <button>Delete</button>
// </li> */}

// </ul>


return<>
<form onSubmit={handle_Task}>

    <label>Todo Task</label>
    <input type="text" value={TaskItem}
    onChange={getvalue=> setTastItem(getvalue.target.value)}/>
    <button>Add tasks</button>
</form>
<ul>
{showTask.length=== 0 && "No tasks here"}
    {showTask.map(myTask =>{

        return<li key={myTask.id}>

            <label>

                <input type="checkbox" onChange={showchange => checkedTodo(myTask.id,showchange.target.checked)} checked={myTask.completed }/>
                {myTask.title}
            </label>
            <button onClick={() => deleteTask(myTask.id)}>delete</button>
        </li>
    })}
  
</ul>
</>

}