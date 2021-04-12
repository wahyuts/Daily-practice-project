import React from 'react'

const Item = ({contentInTDL, handleToggle}) => {
    const handleClick = (e) => {
        e.preventDefault();
        handleToggle(e.currentTarget.id);
    }
    return(
            
        // <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} className={todo.complete ? "todo strike" : "todo"}>
        //     {todo.task}
        // </div>
        <div id={contentInTDL.id}
        key={contentInTDL.id + contentInTDL.task}
        // name='contentInTDL'
        value={contentInTDL.id}
        onClick={handleClick} 
        className={contentInTDL.complete ? "contentInTDL strike" : "contentInTDL"}>

            {contentInTDL.task}
        
        </div>
    )
}

export default Item;