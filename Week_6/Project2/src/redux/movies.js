export function addMovie(title){
    return{
        type:"ADD_MOVIE", 
        payload:title
    }
}

export function removeMovie(title){
    return{
        type:"REMOVE_MOVIE", 
        payload:title
    }
}

export default function movieReducer(movies = [], action){
    switch (action.type){
        case "ADD_MOVIE":
            return [...movies, action.payload]
        case "REMOVE_MOVIE":
             const updatedArr = movies.filter(title => title.toLowerCase() !== action.payload)
            return updatedArr
            
        default:return movies
    }

       
}