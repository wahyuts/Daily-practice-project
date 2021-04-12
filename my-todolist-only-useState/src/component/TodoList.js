import React from 'react'
import Item from './Item'
// import data from '../data.json'

const TodoList = ({TDL, handleToggle, handleFilter}) => {
    return(
        <div>
            {TDL.map(contentInTDL => (
          <Item
           contentInTDL={contentInTDL} //handleToggle={handleToggle} handleFilter={handleFilter}
           handleToggle={handleToggle}
        //    hanldeFilter={handleFilter}
          />
        ))}
        <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    )
}

export default TodoList;