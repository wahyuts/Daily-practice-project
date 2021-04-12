import React, { useReducer } from "react";
import {ADD_TODO, HANDLE_TOGGLE, HANDLE_FILTER} from "./constants";
// import {addTodo,handleToggle,handleFilter} from "./actions";
import TodoContext from "./TodoContext";
import Reducer from './reducer';
// import data from './data.json';

const TodoState = (props) => {
    const initialState = {
        TDL: []
      }

      const [state, dispatch] = useReducer(Reducer, initialState)

      const addTodox = (text) => {
        dispatch({
            type: ADD_TODO,   
            payload: text
          })
        // dispatch(addTodo)
      }

      const handleTogglex = (id) => {
        dispatch({
            type: HANDLE_TOGGLE,   
            payload: id,
          })
        // dispatch(handleToggle)
      }

      const handleFilterx = (id) => {
        dispatch({
            type: HANDLE_FILTER,   
            payload: id,
          })
        // dispatch(handleFilter)
      }

      return (
        <TodoContext.Provider value=
        {{
          TDL: state.TDL, 
        addTodox, 
        handleTogglex, 
        handleFilterx
        }}>
          {props.children}
        </TodoContext.Provider>
      );
};
    
    export default TodoState;
