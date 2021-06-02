import React from "react"
import './App.css';
import { connect } from "react-redux"
import { useDispatch } from "react-redux"
import { addContact, deleteContact } from "./redux"
import Contact from "./Contact"
import Form from "./Form"

function App(props) {
  const dispatch = useDispatch()
  function delContact(e) {
    const id = e.target.parentNode.id
    dispatch(deleteContact(id))
  }
  return (
    <div className="App">
      <Form />
      {props.contacts.map((x) => {
        return <Contact name={x.name} number={x.number} id={x.id} onClick={delContact} />
      })}
    </div>
  );
}
function mapStateProps(state){
  return {
    contacts:state
  }
}

export default connect(mapStateProps, {addContact, deleteContact})(App);
