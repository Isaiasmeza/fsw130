
const { combineReducers, createStore } = require("./redux")
const { addMovie, movieReducer, deleteMovie } =require("./movieReducer")
const { addTvShow, tvShowReducer, deleteTvShow } =require("./tvShow")


const rootReducer = combineReducers({
    tvShowReducer,
    movieReducer
})

const store = createStore(rootReducer)
store.subscribe(() => console.log(store.getState()))
export default store


store.dispatch(addMovie("Mighty Ducks"))
store.dispatch(addMovie("Remember the Titans"))
store.dispatch(addMovie("Fast and Furious"))

store.dispatch(addtvShow("Walking Dead"))
store.dispatch(addTvShow("Big Bang Theory"))

store.dispatch(deleteMovie("Remember the Titans"))
store.dispatch(deleteTvShow("Walking Dead"))



