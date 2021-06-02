import React from "react"
import { addContact } from "./redux"
import { useDispatch } from "react-redux"
const { v4: uuid } = require('uuid')
function Form(props) {
    const dispatch = useDispatch()

    function onSubmit(e) {
        e.preventDefault()
        const name = document.getElementById("name")
        const number = document.getElementById("number")

        dispatch(addContact({ "name": name.value, "number": number.value, "id": uuid() }))
    }
    return (
        <div>
            <h1>Add New Contact</h1>
            <form onSubmit={onSubmit}>
                <input type="text" id="name" name="name" key="name" placeHolder="Enter First and Last Name"/>
                <input type="text" id="number" name="number" key="number" placeHolder="Enter Phone number"/>
                <button>New Contact</button>
            </form>
        </div>
    )
} export default Form