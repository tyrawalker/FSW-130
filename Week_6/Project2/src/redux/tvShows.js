export function addTvShow(title){
    return{
        type:"ADD_TVSHOW", 
        payload:title
    }
}

export function removeTvShow(title){
    return{
        type:"REMOVE_TVSHOW", 
        payload:title
    }
}

export default function TvShowReducer(TvShow = [], action){
    switch (action.type){
        case "ADD_TVSHOW":
            return [...TvShow, action.payload]
        case "REMOVE_TVSHOW":
             const updatedArr =TvShow.filter(title => title.toLowerCase() !== action.payload)
            return updatedArr
            
        default:return TvShow
    }

       
}