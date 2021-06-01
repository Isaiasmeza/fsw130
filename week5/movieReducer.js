function addMovie(movie){
    return {
      type: "ADD_MOVIE",
      payload: movie
    }
  }
   
  function movieReducer (state = {movies: []}, action) {
    switch(action.type){
      case "ADD_MOVIE": 
        
        return {
          movies: [...state.movies, action.payload]
        }
      case "DELETE_MOVIE":
        const Arr = state.movies
        const newArr = Arr.filter(movie => movie !== action.payload)
        return {
          movies: newArr
        }
      default: 
        return state
    }
  }
  function deleteMovie (movie){
    return {
      type: "DELETE_MOVIE",
      payload: movie
    }
  }
  
  
  module.exports = {
    addMovie, deleteMovie, movieReducer
  }