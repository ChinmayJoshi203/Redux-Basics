import redux, { createStore } from 'redux'

import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter';
import authSlice from './auth'
// const store=createStore((state={ counter:0, showCounter: true }, action)=>{//Reducer function
//     if(action.type==='increment')
//     return({
//         counter: state.counter+1,
//         showCounter: true
//     })
//     if(action.type==='increase')
//     {
//        return {
//             showCounter: true,
//             counter: state.counter+action.value
//         }
//     }

//     if(action.type==='toggle')
//     {
//         return{
//             showCounter: !action.value,
//             counter: state.counter
//         }
//     }

//     if(action.type==='decrement')
//     {
//        return {
//             counter: state.counter-1,
//             showCounter: true
//         }
//     }

//     else return state;

// })
const store=configureStore(
    {reducer:{counter: counterSlice.reducer, auth: authSlice.reducer}})
export const counterActions=counterSlice.actions;
export const authActions=authSlice.actions;
export default store;