import React from "react"
import {ThemeProvider} from "../themeContext"


function Button (props){
    return(
        <ThemeProvider>
            {context =>(
                <button onClick={context.toggleButton} className = {`${context.theme}-theme`}>Click Here</button>
            )}
        </ThemeProvider>
        
    )


}
 export default Button