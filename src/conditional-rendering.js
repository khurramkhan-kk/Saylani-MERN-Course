
import { useState } from "react";
import { ReactDOM } from "react";
 //==Example 1 ===
//  function Loggin() {
// 	return <h1>welcome on portal!</h1>;
// }

// function Loggout() {
// 	return <h1>please login again!</h1>;
// }

// function Login_feature({isloggedin}) {
//   // const isloggedin = props.isloggedin;
//   if (isloggedin) {
//     return <Loggin/>;
//   }
//   return <Loggout/>;
// }

// export default Login_feature;

//==complex-example==
/*
export default function Login_handle(){

    const [loggin, setloggin]= useState(1);
    let  login_here =()=>{
        setloggin(2);

        
    };
  let logout_here=() =>{

        setloggin(1);
    };
    function third_option(){

        return setloggin(3);
    }
    function fourth_option(){
      return setloggin(3);
    }
  
    return(
        <div>
            {loggin==2 ?
        <div><h1>welcome back</h1><button onClick={logout_here}>Logout</button></div>
        
        :loggin==1? <div><h1>please login</h1><button onClick={login_here}>Login</button></div>
        
        : loggin ==3 ?  <div><h1>You have third option</h1><button onClick={third_option}>Third-one</button></div> 
        : <h1>fourth option</h1>
            }
        </div>
    )

}

*/

/*
 export default function Loginwork(){

    let [loggedin, setlogin] =useState(true);

    if(loggedin){
        return(
            <div>
                <h1>welcome here</h1>
            </div>
        )
    }
    else{

        return(

<div><h1>not welcome here</h1></div>
        ) 
    }
}
*/


/*Another example of conditional rendering
function Item({ name, isPacked }) {

    return <li className="item">{name}</li>;
    if (isPacked) {
        return <li className="item">{name} ✔</li>;
      }
      or
      if(isPacked){
        return null;
      }
      return <li className="item">{name}</li>;
  }
  
  export default function PackingList() {
    return (<>
  
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
      
      </> );
    
  }

*/