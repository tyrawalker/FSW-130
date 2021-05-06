
import contactReducer from './contacts'
const redux = require('redux')
const {combinedReducers, createStore}= redux

const rootReducer = combinedReducers({
    contacts:contactReducer
})

const store = createStore(rootReducer)
store.subscribe(()=>{
    console.log(store.getState())
})

export default store