const redux= require("redux")

//two actions using payloads to add parameters to the function in the console, rather than increment by one or default in the actions set amount
function changeCount(amount){
    return{
        type:"CHANGE_COUNT", 
        payload: amount
    }
}

function addFavoriteThings(thing){
    return{
        type:"ADD_FAVORITE_THING", 
        payload:thing
    }
}

function removeFavoriteThing(things){
    return{
        type:"REMOVE_FAVORITE_THING", 
        payload:thing
    }
}

//keep initial state for many types of data 
const initialState= {
    count:0, 
    favoriteThings:["things 1"]
}

//reducer contains all the actions
function reducer(state = initialState, action) {
    switch (action.type){
        case "CHANGE_COUNT":
            return {
                ...state,
                count:state.count + action.payload
        
            }
        //...state is to return the previous state and keep in mind, while performing action    
        case "ADD_FAVORITE_THING":
            return{
                ...state, 
                favoriteThings: [...state.favoriteThings, action.payload]
            }
            //to add to array, can still use ...state.array, then use action.payload for the next item in the array.
        //to remove item, without mutating the data, you can use filter results and assign them to a new array, which you present in the updated state.
        case "REMOVE_FAVORITE_THING":
            //const arrCopy is a way to test and play with data before passing it to your updated array
            // const arrCopy = [...state.favoriteThings]

            const updatedArr = state.favoriteThings.filter(thing => thing.toLowerCase() !== action.payload)
            return{
                ...state, 
                favoriteThings:updatedArr
            }
        default:
            return state
    }
}

//create store
const store = redux.createStore (reducer)
store.subscribe(()=> {
    console.log(store.getState())
})


//use dispatchers
store.dispatch(changeCount (5))
store.dispatch(addFavoriteThings("thing2"))
