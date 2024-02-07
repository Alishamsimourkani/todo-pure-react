import React, { useState } from 'react';
import EditTodo from './EditTodo';
import todosContext from '../../Context/todos';

export default function Todo(props) {

    const { item } = props;

    const [edit, setEdit] = useState(false);

    let editHandler = text => {
        props.edit(item.key, text);
        setEdit(false)
    }
    return (<todosContext.Consumer>
        {context => (
            <>
                {
                    !edit
                        ? (
                            <div className="col-6 mb-2">
                                <div className="d-flex justify-content-between align-items-center border rounded p-3">
                                    <div>
                                        {item.text}
                                    </div>
                                    <div>
                                        <button type="button" className={`btn btn-sm m-1 ${item.done ? 'btn-outline-primary' : 'btn-success'}`} onClick={() => context.done(item.key)}>{item.done ? "Undone" : "Done"}</button>
                                        <button type="button" className="btn btn-info btn-sm m-1" onClick={() => setEdit(true)}>edit</button>
                                        <button type="button" className="btn btn-danger btn-sm m-1" onClick={() => context.delete(item.key)}>delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                        : <EditTodo text={item.text} edit={editHandler} />
                }
            </>
        )}
    </todosContext.Consumer>

    )
};
