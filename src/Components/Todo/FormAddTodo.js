import React, { useState } from 'react'

function FormAddTodo(props) {

    const [text, setText] = useState('');

    let formHandler = e => {
        e.preventDefault();
        props.add(text);
        setText("");
    }

    let inputHandler = e => setText(e.target.value)

    return (
        <form className="form-inline" onSubmit={formHandler}>
            <div className="form-group">
                <input type="text" className="form-control mx-sm-3" placeholder="i want to do ..." value={text} onChange={inputHandler} />
                <button className="btn btn-primary" type='submit' >add</button>
            </div>
        </form>
    )
}

export default FormAddTodo;