
import TvShowReducer from "./tvShows"
import movieReducer from "./movies"

const redux =require("redux")
const {combinedReducers, createStore}= redux

const rootReducer = combinedReducers({
    TvShows: TvShowReducer, 
    movies:movieReducer
})

const store = createStore(rootReducer)
store.subscribe(()=> {
    console.log(store.getState())
})



export default store 