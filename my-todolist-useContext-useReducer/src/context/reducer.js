import {ADD_TODO, HANDLE_TOGGLE, HANDLE_FILTER} from './constants'

const Reducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                TDL: [...state.TDL, { id: state.length + 1, task: action.payload, complete: false} ]
            }
        // case HANDLE_TOGGLE:
        //     return {
        //         ...state,
        //         TDL: state.TDL.map((contentInTDL)=> {
        //             return contentInTDL.id === Number(id) ? { ...contentInTDL, complete: !contentInTDL.complete} : {...contentInTDL}
        //         })
                    
        //     }
        case HANDLE_TOGGLE:
            return {
                ...state,
                TDL: state.TDL.map((contentInTDL)=>
                    contentInTDL.id === action.payload ?
                    {...contentInTDL, complete: !contentInTDL.complete} : {...contentInTDL}
                )
            }
        case HANDLE_FILTER: 
            return{
                ...state,
                TDL: state.TDL.filter(contentInTDL => contentInTDL.id != action.payload && !contentInTDL.complete)
            }
        default:
            return state;
        
    }
     
};

export default Reducer;




// import React, {useReducer} from 'react'
// import TodoContext from "./TodoContext";
// import {catchTheText,addTodo,deleteTodo,toggleTodo,loadDataFirsttime} from './actions'
// import data from "../data.json";
// import {
//     ADD_TODO,
// } from './constants'

// const Reducer = (state,action={}) => {
//     // const initialState = {
//     //     todos: [data]
//     // }
//         switch (action.type) {
//             case ADD_TODO:
//                 return Object.assign({},state,{todos:action.payload})
//             default:
//                 return state;
//         }
// }

// export default Reducer;
