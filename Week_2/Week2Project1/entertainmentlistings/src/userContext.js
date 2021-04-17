import React from "react"
// import MovieListing from "./components/movie"

const {Provider, Consumer} = React.createContext()

class UserContextProvider extends React.Component{
    state = {
        image:"",
        title:""
    }

    addMovieListing = (title, image)=> {
        this.setState({title, image})
    }

    render() {
        const {MovieListing}= this.state
        return(
            <Provider value = {{MovieListing, addMovieListing: this.addMovieListing}}>
            {this.props.children}
            </Provider>
        )
      
    }

   



export {UserContextProvider, Consumer as UserContextConsumer}