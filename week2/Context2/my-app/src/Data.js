import React from "react"
import { ContextConsumer } from "./themeContext"
function Data(props) {
    let count = 0
    return (
        <div>
            <ContextConsumer>
                {context => (
                    <div>
                        <h1 Class="top">Popular Shows</h1>
                        {context.Shows.map(Show => {
                            count += 1
                            return (
                                <div key={count}>

                                    <h1> Tv Show: {Show.title}</h1>,
                                    <h2>Pilot Aired Date: {Show.airedDate}</h2>,
                                    <h3>Television Network: {Show.televisionNetwork}</h3>
                                </div>
                            )
                        })}
                    </div>
                )}
            </ContextConsumer>
        </div>

    )
}
export default Data