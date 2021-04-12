import React ,{useState, useContext} from 'react';
import TodoContext from "../context/TodoContext";

const FormToInput = () => {
    const [inputBaru, setInputBaru] = useState ('')

    const { addTodox } = useContext(TodoContext);

    const handleChange = (e) => {
        setInputBaru(e.currentTarget.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodox(inputBaru);
        setInputBaru('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={inputBaru} type="text" onChange={handleChange} ></input>
            <button>ADD</button>
        </form>
    );

};

export default FormToInput;