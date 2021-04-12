// import {createContext, useReducer} from 'react';
// import Reducer from './reducer';

// const TodoContext = createContext();

// const initialState = {
//     todos: [],
// };

// const TodoContextProvider = (props) =>{
//     const [state,dispatch] = useReducer(Reducer, initialState);
//     const value = {state, dispatch};

//     return (
//         <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
//     )
// }

// export {TodoContext,TodoContextProvider};