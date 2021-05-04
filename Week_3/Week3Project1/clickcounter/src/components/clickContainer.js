import React from "react"
import {connect} from 'react-redux'
import { increment } from "../redux"
import {decrement} from "../redux"


function ClickContainer(props){
    return(
        <div> <h1>Click Counter</h1>    
        </div>
    )
}

const mapStateToProps = state => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = dispatch =>{
    return ({
        increment:() => dispatch(increment()) 
    }, 
    {
        decrement:() => dispatch(decrement())
    })
}

export default connect (
    mapStateToProps, 
    mapDispatchToProps)
     (ClickContainer)