const redux =require("redux")
const {combinedReducers, createStore}= redux

//import the separate reducers
import countReducer from "./count"
import favoriteThingsReducer from "./favoriteThing"
import youTubeVideoReducer from "./youTubeVideo"
import userReducer from "./user"

//combined the reducers into a single state tree
const rootReducer = combinedReducers({
    count: countReducer, 
    favoriteThings:favoriteThingsReducer, 
    youTubeVideo:youTubeVideoReducer,
    user:userReducer
})

//combine the store
const store = createStore(rootReducer)
store.subscribe(()=> {
    console.log(store.getState())
})

//export the store
export default store 


