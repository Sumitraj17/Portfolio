import react, { useState } from "react";
import context from "./context.jsx";

const States = (props)=>{
    const [state,setState] = useState(()=>{
        return localStorage.getItem('state') || 'About'
    })
    const update = (state1)=>{
        setState(state1)
        localStorage.setItem('state',state1);
    }
    return(
        <context.Provider value={{state,update}}>
            {props.children}
        </context.Provider>
    )
}


export default States;