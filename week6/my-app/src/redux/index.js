import {createStore} from "redux"

export function addContact(payload){
    return{
        type: "ADD_NEW_CONTACT",
        payload: payload
    }
}
export function deleteContact(payload){
    return{
        type: "DELETE_CONTACT",
        payload: payload
    }
}
function reducer(state =[], action){
    switch(action.type){
        case "ADD_NEW_CONTACT":
            return[...state, action.payload]
            case "DELETE_CONTACT": 
           const newArray = state.filter(x => x.id !== action.payload)
            return newArray
            default: return state
    }
}
const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))
export default store;