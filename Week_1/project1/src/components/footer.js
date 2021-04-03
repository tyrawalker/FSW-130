import React from "react"
import {ThemeProvider} from "../themeContext"


function Footer (props){
    return (
        <ThemeProvider>
            {context =>(
                <footer className={`${context.theme}-theme`}>This is the way Context works</footer>
            )}
        </ThemeProvider>
        
    )
}
export default Footer