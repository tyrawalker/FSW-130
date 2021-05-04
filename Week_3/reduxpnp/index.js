const redux = require("redux")

//action creators
function increment(amount){
    return{
        type:"INCREMENT", 
        payload: amount
    }
}

function decrement(){
    return{
        type:"DECREMENT"
    }
}

function double(){
    return{
        type:"DOUBLE"
    }
}

function halve(){
    return{
        type:"HALVE"
    }
}

//reducer function
function reducer(state = {count:0}, action){
    switch(action.type){
        case "INCREMENT":
            return {
                count:state.count +action.payload
                    }
        case "DECREMENT":
            return {
                count: state.count -1
            }
        case "DOUBLE":
            return {
                count: state.count *2
            }
        case "HALVE":
            return {
                count: Math.round(state/2)
            }
        default:
            return {count: state.count}
    }
}

//creating the store
const store = redux.createStore(reducer)

//subscribe to store. done in console log for viewing. this monitors changes to store to inact and action
store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(increment(5))
store.dispatch(double(2))