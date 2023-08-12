import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import "./style.css";
// import Todo_APP from './Todo-APP';
// import Weather from './Components/weather/showweather.js';
// import Weather_data from './Components/weather/weatherdatawork.js';
// import Class_TodoApp from './ClassTodoApp';
// import List_work from './mylistshow';
// import My_List from './rendering-list';
// import Form from './Manage-states/Loginwork.js';
// import Profile from './Manage-states/profile.js';
// import { logincontextwork } from './Manage-states/Logincontexthandle.js';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import Homepage from './Navigationwork/Home.js';
import Shop_page from './Navigationwork/Shop.js';
import Nav_work from './Navigationwork/Navpage.js';
import {Routes, Route} from 'react-router-dom';
import Orderpage from './Navigationwork/orderpage.js';
import Login_page from './Navigationwork/Loginwork.js';
import Mynav from './Navpage.js';
import Gallerywork from './Navigationwork/Mygallery.js';

//5mins are left to complete task

function My_multi_post(){
   // const [showpage, setpage] = useState(false);
   // const [getusername, setusername] = useState('');

   return <>
<div>
   <Mynav/>
   <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/login' element={<Login_page/>}></Route>
      <Route path='/gallery' element={<Gallerywork/>}></Route>
   </Routes>






{/* <Nav_work/>

<Routes>

   <Route path='/' element={<Homepage/>}></Route>
   <Route path='/shop' element={<Shop_page/>}></Route>
   <Route path='/order'element={<Orderpage/>}></Route>
</Routes> */}
</div>
   {/* <Fb_Post name="Khateeb" mydate= "12-dec-2022"/>
   <Fb_Post name="Ramazan" mydate= "12-dec-2021"/> */}
   {/* <logincontextwork.Provider value={{getusername,setusername, setpage}}> */}

{/* <logincontextwork.Provider value={{getusername,setusername,setpage}}>

{
   showpage ? <Profile/> : <Form/>
}
</logincontextwork.Provider> */}


{/* </logincontextwork.Provider> */}
{/* <Weather_data/> */}

{/* <List_work/> */}

   </>
}


// ReactDOM.render(<Hi/>, document.getElementById('p1'));

var root = ReactDOM.createRoot(document.getElementById('root'));

// let value1= <>  <My_multi_post/>






root.render( <BrowserRouter>
<My_multi_post/>
</BrowserRouter>

 );