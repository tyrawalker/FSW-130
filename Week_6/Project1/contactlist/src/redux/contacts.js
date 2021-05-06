import redux, {createStore} from "redux"

export function addContact (person){
    return{
        type: "ADD_CONTACT", 
        payload: person
    }
}

export function removeContact (person){
    return{
        type: "REMOVE_CONTACT", 
        payload: person
    }
}

//initial state- had trouble parsing with initialstate variable, so i simplified
const person= [
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

//reducer
 function contactReducer (state = person, action){
    switch (action.type){
        case "ADD_CONTACT":
            return{ 
                person:[...person.person, action.payload]
            }
       case "REMOVE_CONTACT":
        const updatedArr = person.person.filter(person => person.toLowerCase() !== action.payload)
            return{
                ...person,
                person:updatedArr 
            }
        default:
    }        return person
}

const store = createStore(contactReducer)
store.subscribe(()=>{
    console.log(store.getState())
})

export default store