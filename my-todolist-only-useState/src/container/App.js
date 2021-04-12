import React,{useState} from 'react';
import Header from '../component/Header'
import TodoList from '../component/TodoList'
import FormToInput from '../component/FormToInput';
import data from './data.json';

import './App.css';

const App = () => {

  const [TDL, setTDL] = useState(data);

  // const [TDL, setTDL] = useState([]);

  const ADD_Todo = (userInput) => {
    let newInput = [...TDL];
    newInput = [...TDL, { id: TDL.length + 1, task: userInput, complete: false}];
    setTDL(newInput);
  }

  const handleToggle = (id) => {
    let theMap = TDL.map(contentInTDL => {
      return contentInTDL.id === Number(id) ? { ...contentInTDL, complete: !contentInTDL.complete} : {...contentInTDL}
    });
    setTDL(theMap);
  }

  const handleFilter = () => {
    let theFiltered = TDL.filter(contentInTDL => {
      return !contentInTDL.complete
    });
    setTDL(theFiltered);
  }


  return (
    <div className="App">
        <Header />
        <FormToInput ADD_Todo={ADD_Todo}/>  {/*didalam FormToInput sudah terdapat textbox dan button buat add karena pada dasarnya ini form*/}
        <TodoList TDL={TDL} handleToggle={handleToggle} handleFilter={handleFilter}/>
    

      
    </div>
  );
}

export default App;
