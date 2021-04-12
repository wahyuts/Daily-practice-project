import React ,{useState} from 'react';

const FormToInput = ({ADD_Todo}) => {
    const [inputBaru, setInputBaru] = useState ('')

    const handleChange = (e) => {
        setInputBaru(e.currentTarget.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        ADD_Todo(inputBaru);
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