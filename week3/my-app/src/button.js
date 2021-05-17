import React from "react"

function Button(props) {
    return (
        <button onClick={props.onClick}>
            {props.description}
        </button>
    )
}
export default Button;