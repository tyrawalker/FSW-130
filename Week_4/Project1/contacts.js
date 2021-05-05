const redux = require("redux")

//build the add and remove functions first
function addContact (person){
    return{
        type: "ADD_CONTACT", 
        payload: person
    }
}

function removeContact (person){
    return{
        type: "REMOVE_CONTACT", 
        payload: person
    }
}

//initial state
const initialState= {
    person= [
        {name: "John Smith", 
        age:16, 
        location:"North Carolina"
        }, 
        {name:"Jane Doe", 
        age:21, 
        location:"South Carolina"
        }, 
        {name:"FMU LNU", 
        age:33, 
        location:"Connecticut"
        }
    ]
}
//reducer
function reducer (state = initialState, action){
    switch (action.type){
        case "ADD_CONTACT":
            return{
                ...state, 
                person:[...state.person, action.payload]
            }
       case "REMOVE_CONTACT":
        const updatedArr = state.person.filter(person => person.toLowerCase() !== action.payload)
            return{
                ...state,
                person:updatedArr 
            }
        default:
    }        return state
}

//create store
const store= redux.createStore(reducer)
store.subscribe(()=>{
    console.log(store.getState())
})

//dispatchers
store.dispatch(addContact({
    name:"Sally Camel", 
    age:16, 
    location:"Washington"
}))
store.dispatch(removeContact("John Smith"))