import React from 'react'
import { ListContextConsumer } from './context'

function Card (props) {
  let count = 1
  return (
    <ListContextConsumer>
      {list => (
        <div id="card">          
            {list.list.map((item) => {
              count += 1
              console.log(count)
              return (
                <div id ={count} key={count} >
                  <h1>{item.name}</h1>
                  <br/>
                  <p>{item.description}</p>
                  <img src={item.site} />
                  <br/>
                  <button className="cards" onClick={list.delete} id="btn">Delete</button>
                </div>
              )
            })}
        </div>      
      )}
    </ListContextConsumer>
  )
}

export default Card