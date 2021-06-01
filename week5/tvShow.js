function addTvShow (tvShow)  {
    return {
      type: "ADD_TVSHOW",
      payload: tvShow
    }
  }
  
  const initialState = {tvShows: []}
  function tvShowReducer (state = initialState, action){
    switch(action.type){
      case "ADD_TVSHOW": 
        return {
          tvShows: [...state.tvShows, action.payload]
        }
      case "DELETE_TVSHOW":
        const Arr = state.tvShows
        const newArr = Arr.filter(tvShow => tvShow !== action.payload)
        return {
          tvShows: newArr
        }
      default:
        return state
    }
  }
  function deleteTvShow (tvShow){
    return {
      type: "DELETE_TVSHOW",
      payload: tvShow
    }
  }
  module.exports = { 
    addTvShow, deleteTvShow, tvShowReducer
  }