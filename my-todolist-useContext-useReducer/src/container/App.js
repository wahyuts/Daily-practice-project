import React,{useState} from 'react';
import Header from '../component/Header'
import TodoList from '../component/TodoList'
import Textbox from '../component/Textbox'
import AddButton from '../component/AddButton'
import DelTaskDone from '../component/DelTaskDone'
import Item from '../component/Item'
import FormToInput from '../component/FormToInput';
import TodoState from "../context/TodoState";

// import data from './data.json';

import './App.css';
import Reducer from '../context/reducer';

const App = () => {

  // const [TDL, setTDL] = useState(data);

  // const [TDL, setTDL] = useState([]);

  // const ADD_Todo = (userInput) => {
  //   let newInput = [...TDL];
  //   newInput = [...TDL, { id: TDL.length + 1, task: userInput, complete: false}];
  //   setTDL(newInput);
  // }

  // const handleToggle = (id) => {
  //   let theMap = TDL.map(contentInTDL => {
  //     return contentInTDL.id === Number(id) ? { ...contentInTDL, complete: !contentInTDL.complete} : {...contentInTDL}
  //   });
  //   setTDL(theMap);
  // }

  // const handleFilter = () => {
  //   let theFiltered = TDL.filter(contentInTDL => {
  //     return !contentInTDL.complete
  //   });
  //   setTDL(theFiltered);
  // }


  return (
    <div className="App">
      <TodoState>
        <Header />
        <FormToInput/>
        {/* <FormToInput ADD_Todo={ADD_Todo}/>  didalam FormToInput sudah terdapat textbox dan button buat add karena pada dasarnya ini form */}
        <TodoList/>
        {/* <TodoList TDL={TDL} handleToggle={handleToggle} handleFilter={handleFilter}/> */}
      </TodoState>
      
          {/* <Header />
          <TodoList />
          <Item />
          <Textbox />
          <AddButton />
          <DelTaskDone/> */}
    

      
    </div>
  );
}

export default App;
