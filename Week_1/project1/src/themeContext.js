import React, {Component} from "react"
const{Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component {
state= { 
    theme:"light"
}

toggleButton = ()=>{
    this.setState(prevState =>{
        return {
            theme: prevState.theme === "light" ? "dark": "light"
        }
    })
}

    render (){
        return(
            <Provider value={{theme: this.state.theme, toggleButton: this.toggleButton}}>
                {this.props.children}
            </Provider>
        )
    }
}
export {ThemeContextProvider, Consumer as ThemeProvider}