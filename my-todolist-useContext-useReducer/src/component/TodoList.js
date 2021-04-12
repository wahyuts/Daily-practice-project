import React, {useContext} from 'react'
import TodoContext from '../context/TodoContext'
import Item from './Item'
// import TodoContext from '../context/TodoContext'
// import Item from '../component/Item'
// import data from '../data.json'

const TodoList = () => {

//   robots.map((user,i) => {   // menggunakan fungsi map dengan parameter user,...user itu yang bagian   (<Card key= {i} id={robots[i].id}....)   ini semua user,..nah didalam user ada parameter index
//   return (<Card key= {i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>) //mengapa ada return disini? karena fungsi map mengharuskan ada return
// })


    const {TDL, handleTogglex, handleFilterx} = useContext(TodoContext)
    return(
        <div>

          {/* {TDL.map((contentInTDL,i) => {
            return (
              <Item
              key={i}
              id={contentInTDL[i].id}
              text={contentInTDL[i].task}
              complete={contentInTDL[i].complete}
             //  contentInTDL={contentInTDL}
             //  contentInTDL={contentInTDL} //handleToggle={handleToggle} handleFilter={handleFilter}
              handleToggle={handleTogglex}
           //    hanldeFilter={handleFilter}
             />
            )
          //this is the way to display the list item
          
        }) */}


          {TDL.map(contentInTDL =>(
          //this is the way to display the list item
          <Item
          //  key={contentInTDL.id}
          //  text={contentInTDL.task}
          //  complete={contentInTDL.complete}
           contentInTDL={contentInTDL}
          //  contentInTDL={contentInTDL} //handleToggle={handleToggle} handleFilter={handleFilter}
           handleToggle={handleTogglex}
        //    hanldeFilter={handleFilter}
          />
        ))} 
        <button style={{margin: '20px'}} onClick={handleFilterx}>Clear Completed</button>
        </div>
    )
}

export default TodoList;