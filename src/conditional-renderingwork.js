import { useState } from "react";
/*
function Logoutmsg(){

    return(
        <div>
            <h1>you are lagout</h1>
        </div>
    )
}

function Loginmsg(){

    return (
        <div>
            <h1> you are login</h1>
        </div>
    )
}

function Login_logoutwork(props){

    let loggedin = props.loggedin;

  if(loggedin){

    return(

        <Loginmsg/>
    )
  }
  else{

    return(
        <Logoutmsg/>
      )
  }

}

export default Login_logoutwork;
 
*/

 
export default function Login_featurework(){

// const [loggedin, setloggedin] = useState(false);
let [loggedin, settingloggedin] = useState(0);

function do_login(){

    return settingloggedin(2);
}

function do_logout(){

    return settingloggedin(0);
}

function play_game(){

    return settingloggedin(0);
}
if(loggedin==1){

    return (

        <div>

            <h1>Welcome back</h1>
            <button id="logout" onClick={do_logout}>Logout</button>
        </div>
    )
}

else if(loggedin==2){

    return(

        <div><h1>This is your gaming area</h1>
        <button onClick={play_game}>QUite Game</button>
        </div>
    )
}
return(
    <div>
        <h1>Please login</h1>
        <input type="text" placeholder="please enter your username"/><br/>
        <input type="password" placeholder="please enter password here"/><br/>
        <button id="login" onClick={do_login}>Login</button>
    </div>
)

}


