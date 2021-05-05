export function addFavoriteThings(thing){
    return{
        type:"ADD_FAVORITE_THING", 
        payload:thing
    }
}

export function removeFavoriteThing(things){
    return{
        type:"REMOVE_FAVORITE_THING", 
        payload:thing
    }
}

export default function favoriteThingsReducer(favoriteThings = [], action){
    switch (action.type){
        case "ADD_FAVORITE_THING":
            return [...favoriteThings, action.payload]
        case "REMOVE_FAVORITE_THING":
             const updatedArr = state.favoriteThings.filter(thing => thing.toLowerCase() !== action.payload)
            return updatedArr
            
        default:return favoriteThings
    }

       
}