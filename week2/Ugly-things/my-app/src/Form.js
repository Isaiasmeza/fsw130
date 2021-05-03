import React from "react"
import{ListContextConsumer} from "./context"

function Form(props){
    return(
        <ListContextConsumer>
            {items => (
                <div id="entry">
                    <form onSubmit={items.submit}>
                        <label>Title</label>
                        <input onChange={items.change} name="name" type="text"></input>

                        <label>Description </label>
                        <input onChange={items.change} name="description" type="text"></input>

                        <label>Image URL </label>
                        <input onChange={items.change} name="site" type="text"></input>

                        <button>Submit </button>
                    </form>
                </div>
            )}
            </ListContextConsumer>
    )
}
export default Form