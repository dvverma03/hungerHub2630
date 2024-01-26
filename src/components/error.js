import React from "react";
import { useRouteError } from "react-router";
 
const Error = ()=>{
    const err= useRouteError();
    return(
        <>
        <h1>Ooops!!!</h1>
        <h2>Something went wrong!!</h2>
        <h1>{err.status}</h1>
        <h1>{err.statusText}</h1>
        <h1>Please add this extention and enable it (https://chromewebstore.google.com/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc )</h1>
        </>
    )
}
export default Error;