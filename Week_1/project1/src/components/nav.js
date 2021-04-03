import React from "react"
import {ThemeProvider} from "../themeContext"

function Nav (props){
    return (
        <ThemeProvider>
            {context =>(
                 <nav className={`${context.theme}-theme`} > 
                 <div> Home</div>
                 <div> About</div>
                 <div> Contact Us</div>
             </nav>
            )}
        </ThemeProvider>
       
    )
}
 export default Nav 