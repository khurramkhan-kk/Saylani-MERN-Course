import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import Todo_APP from './Todo-APP';
// import Class_TodoApp from './ClassTodoApp';
// import List_work from './mylistshow';
// import My_List from './rendering-list';




//5mins are left to complete task

function My_multi_post(){

   return <>
   {/* <Fb_Post name="Khateeb" mydate= "12-dec-2022"/>
   <Fb_Post name="Ramazan" mydate= "12-dec-2021"/> */}

<Todo_APP/>


{/* <List_work/> */}

   </>
}

// ReactDOM.render(<Hi/>, document.getElementById('p1'));

var root = ReactDOM.createRoot(document.getElementById('root'));

let value1= <>  <My_multi_post/>

</> 




root.render(value1);