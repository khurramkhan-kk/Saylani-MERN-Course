import { useState } from "react"

export default function   Class_TodoApp(){

// Todo app development steps here:
    //step 1: Write your html in react
    //step 2: To make this html dynamic use javascript code in react.

   
    const [TaskItem, setTaskitem] = useState("");
    const [showTasks, setTasks] = useState([]);

// setTaskitem("abdhhdhd");
    function entered_task(e){
e.preventDefault();
 setTasks(enteredValue =>{

    return [...enteredValue, {id: crypto.randomUUID(), title: showTasks, completed:false

    }]
 })
 setTaskitem("");

 
    }
   
    function checkedTodo(id, completed){
        setTasks(enteredValue =>{
            return enteredValue.map(showTasks =>{
                if(showTasks.id === id){
                    return {...showTasks, completed}
                }
                return showTasks;
            })
        })
    }
    return <>
    
    <form onSubmit={entered_task}>
        <label>Todo Tasks:</label>
        <input type="text" placeholder="enter any task" value={TaskItem}
        onChange={getvalue => setTaskitem(getvalue.target.value)}
        />
        <button>Add task</button>
    </form>
    <ul>

   {showTasks.map(mylist=>{

    return<li key={mylist.id}>
        <label>
            <input type="checkbox" onChange={showchange => checkedTodo(showTasks.id,showchange.target.checked)} />
            {mylist.title}
        </label>
    </li>
   })}
   
     


        </ul>
    </>
    }