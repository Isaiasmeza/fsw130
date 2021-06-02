import React from "react"
function Contact(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.number}</h2>
            <button onClick={props.onClick} >Remove</button>
        </div>
    )
} export default Contact