import {INCREMENT} from './counterType'
import{DECREMENT} from './counterType'

export const increment =() =>{
    return {
        type:(INCREMENT)
    }
};

export const decrement =()=>{
    return {
        type:(DECREMENT)
    }
}