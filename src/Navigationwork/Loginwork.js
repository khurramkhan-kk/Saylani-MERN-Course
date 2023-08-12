export default function Login_page(){

return<>
<div>
    <h1>User Login</h1>
    <label>Username/email:</label>
    <input type="text" placeholder="enter your user name or email"/>
    <br/>
    <label>password:</label>
    <input type="password"/>
    <br/>
    <button onClick={alert("this is static, we are coding more")}>Login</button>
</div>
</>

}