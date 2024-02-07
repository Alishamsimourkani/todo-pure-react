import React, { useState } from 'react'
import todosContext from '../../Context/todos';

function FormAddTodo(props) {

    const [text, setText] = useState('');

    let formHandler = (e, context) => {
        e.preventDefault();
        context.add(text);
        setText("");
    }

    let inputHandler = e => setText(e.target.value)

    return (
        <todosContext.Consumer>
            {context => (
                <form className="form-inline" onSubmit={(e) => formHandler(e, context)}>
                    <div className="form-group">
                        <input type="text" className="form-control mx-sm-3" placeholder="i want to do ..." value={text} onChange={inputHandler} />
                        <button className="btn btn-primary" type='submit' >add</button>
                    </div>
                </form>
            )}
        </todosContext.Consumer>
    )
}

export default FormAddTodo;