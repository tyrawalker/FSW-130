import React from "react"
import {ThemeProvider} from "../themeContext"
import Button from "./button"

function Main (props) {
    return (
        <ThemeProvider>
            {context =>(
                 <main className={`${context.theme}-theme`}>
                 <h1>Click the Button below to change the color scheme</h1>
                 <Button/>
                 </main>
            )}
        </ThemeProvider>
        
       
    )
}
export default Main
