import { useContext } from "react"
import { useState } from "react";
import { logincontextwork } from "./Logincontexthandle.js";

export default function Profile(){
const {getusername} =useContext(logincontextwork);

    return (
        <>
        <h1>profile page</h1>
        <h2>YOUR-PROFILE:{getusername} </h2>
        </>
    )
}