import React from "react"
import { ContextConsumer } from "./themeContext"
function Form() {
    return (
        <ContextConsumer>
            {context => (
                <div>
                    <h1>Add Your Favorite Show</h1>
                    <form onSubmit={context.submit}>
                        
                         
                        <label>Show</label>
                        
                        <input
                         name="title"
                        type="text"
                        onChange={context.change}>
                        </input>

                        <label>Pilot Air Date: </label>
                        
                        <input
                        name="airedDate"
                        type="text"
                        onChange={context.change}>
                        </input>

                        <label>Television Network </label>
                        
                        <input
                         name="televisionNetwork"
                        type="text"
                        onChange={context.change}>
                        </input>

                        <button>Submit!</button>
                    </form>
                </div>
            )
            }
        </ContextConsumer>
    )
}
export default Form
