import React, { useState, useContext } from 'react';
import EditTodo from './EditTodo';
import TodosContext from '../../Context/todos';
import todoApi from '../../Api/todos'

export default function Todo(props) {

    const { item } = props;
    const [edit, setEdit] = useState(false);
    const todosContext = useContext(TodosContext);
    let doneHandler = e => {
        todoApi.patch(`/todos/${item.key}.json`, { done: !item.done })
            .then(response => {
                todosContext.dispatch({ type: 'toggle_todo', payload: { key: item.key } })
            })
            .catch(err => console.log(err))
    }

    let editHandler = text => {
        todoApi.patch(`/todos/${item.key}.json`, { text })
            .then(response => {
                todosContext.dispatch({ type: 'edit_todo', payload: { key: item.key, text } });
            })
            .catch(err => console.log(err))
        setEdit(false)
    }
    let deleteHandler = e => {
        // ajax
        todoApi.delete(`/todos/${item.key}.json`)
            .then(response => {
                todosContext.dispatch({ type: 'delete_todo', payload: { key: item.key } })
            })
            .catch(err => { console.log(err) })
    }
    return (
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
                                    <button type="button" className={`btn btn-sm m-1 ${item.done ? 'btn-outline-primary' : 'btn-success'}`} onClick={doneHandler}>{item.done ? "Undone" : "Done"}</button>
                                    <button type="button" className="btn btn-info btn-sm m-1" onClick={() => setEdit(true)}>edit</button>
                                    <button type="button" className="btn btn-danger btn-sm m-1" onClick={deleteHandler}>delete</button>
                                </div>
                            </div>
                        </div>
                    )
                    : <EditTodo text={item.text} edit={editHandler} />
            }
        </>

    )
};
